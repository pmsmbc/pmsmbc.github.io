// 웹 접근성 자동 점검 (axe-core, WCAG 2.1 A/AA 기준 = KWCAG 2.2 대응)
// 사용법: 개발 서버를 켠 뒤 `npm run a11y` (기본 주소 http://localhost:5173)
import { readFileSync } from 'node:fs'
import { chromium } from 'playwright-core'

const BASE = process.env.BASE_URL ?? 'http://localhost:5173/'
const AXE = readFileSync(new URL('../node_modules/axe-core/axe.min.js', import.meta.url), 'utf8')

const viewports = [
  { name: 'PC', width: 1440, height: 900 },
  { name: '모바일', width: 390, height: 844 },
  { name: '최소폭', width: 320, height: 640 },
]
const themes = ['light', 'dark']

// 화면 상태: 기본 / 상세 팝업 열림 / 모바일 메뉴 열림
const states = {
  기본: async () => {},
  상세팝업: async (page) => {
    await page.locator('#work button[aria-haspopup="dialog"]').first().click()
    await page.waitForTimeout(600)
  },
  모바일메뉴: async (page, vp) => {
    if (vp.width >= 860) return 'skip'
    await page.getByRole('button', { name: '메뉴 열기' }).click()
    await page.waitForTimeout(600)
  },
}

const browser = await chromium.launch({ channel: 'chrome' })
const byRule = new Map()
let runs = 0

for (const vp of viewports) {
  for (const theme of themes) {
    for (const [stateName, apply] of Object.entries(states)) {
      // 움직임 줄이기로 열어 등장 애니메이션 중간 상태(투명도 0)가 대비 검사에 섞이지 않게 함
      const page = await browser.newPage({ viewport: vp, colorScheme: theme, reducedMotion: 'reduce' })
      await page.goto(BASE, { waitUntil: 'networkidle' })
      await page.waitForTimeout(800)
      if ((await apply(page, vp)) === 'skip') { await page.close(); continue }
      await page.evaluate(AXE)
      const { violations } = await page.evaluate(() =>
        window.axe.run(document, {
          runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'] },
          resultTypes: ['violations'],
        }),
      )
      runs++
      for (const v of violations) {
        const entry = byRule.get(v.id) ?? { impact: v.impact, help: v.help, where: new Set(), nodes: new Set() }
        entry.where.add(`${vp.name}/${theme}/${stateName}`)
        v.nodes.forEach((n) => entry.nodes.add(`${n.target.join(' ')}  ${n.failureSummary?.split('\n')[1]?.trim() ?? ''}`))
        byRule.set(v.id, entry)
      }
      await page.close()
    }
  }
}
await browser.close()

const order = { critical: 0, serious: 1, moderate: 2, minor: 3 }
const rules = [...byRule.entries()].sort((a, b) => order[a[1].impact] - order[b[1].impact])
console.log(`검사 ${runs}회 (화면 크기 ${viewports.length} x 테마 ${themes.length} x 상태)`)
if (!rules.length) {
  console.log('위반 0건')
} else {
  for (const [id, r] of rules) {
    console.log(`\n[${r.impact}] ${id} - ${r.help}`)
    console.log(`  발생: ${[...r.where].join(', ')}`)
    ;[...r.nodes].slice(0, 8).forEach((n) => console.log(`  - ${n}`))
  }
  process.exitCode = 1
}
