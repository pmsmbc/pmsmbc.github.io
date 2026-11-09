import { useEffect, useState } from 'react'

/** 헤더 가운데 높이에 어두운 섹션([data-tone="dark"])이 걸쳐 있는지 */
export function useDarkUnderHeader() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const targets = document.querySelectorAll('[data-tone="dark"]')
    if (!targets.length) return
    let io: IntersectionObserver | null = null

    const setup = () => {
      io?.disconnect()
      const mid = Math.round((parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h'), 10) || 72) / 2)
      const inside = new Set<Element>()
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => (e.isIntersecting ? inside.add(e.target) : inside.delete(e.target)))
          setDark(inside.size > 0)
        },
        // 화면 위에서 헤더 절반 높이에 있는 1px 선과 겹치는지 확인
        { rootMargin: `-${mid}px 0px -${window.innerHeight - mid - 1}px 0px` },
      )
      targets.forEach((t) => io!.observe(t))
    }

    setup()
    window.addEventListener('resize', setup)
    return () => {
      window.removeEventListener('resize', setup)
      io?.disconnect()
    }
  }, [])

  return dark
}
