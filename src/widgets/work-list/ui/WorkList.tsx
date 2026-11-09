import { useRef, useState } from 'react'
import { WorkCard, WorkDetail, WorkListRow, workProjects, type WorkProject } from '@/entities/project'
import { gsap, MOTION_OK, useGSAP } from '@/shared/lib'
import { Container, Dialog } from '@/shared/ui'
import s from './WorkList.module.css'

const DETAIL_TITLE_ID = 'work-detail-title'
const featured = workProjects.filter((p) => p.featured)
const rest = workProjects.filter((p) => !p.featured)

export function WorkList() {
  const ref = useRef<HTMLElement>(null)
  const [selected, setSelected] = useState<WorkProject | null>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(MOTION_OK, () => {
        // 큰 WORKS 글자가 스크롤 방향과 반대로 흐름
        gsap.fromTo('[data-big-word]', { xPercent: 8 }, {
          xPercent: -28,
          ease: 'none',
          scrollTrigger: { trigger: ref.current, start: 'top bottom', end: 'center top', scrub: true },
        })
        // 대표작 카드: 이미지가 아래에서 펼쳐짐
        gsap.utils.toArray<HTMLElement>('[data-feature]').forEach((card, i) => {
          gsap.from(card, {
            y: 100,
            opacity: 0,
            duration: 1.2,
            delay: (i % 2) * 0.12,
            ease: 'expo.out',
            scrollTrigger: { trigger: card, start: 'top 88%', once: true },
          })
          gsap.from(card.querySelector('img'), {
            scale: 1.25,
            duration: 1.6,
            ease: 'expo.out',
            scrollTrigger: { trigger: card, start: 'top 88%', once: true },
          })
        })
      })

    },
    { scope: ref },
  )

  return (
    <section id="work" ref={ref} className={s.section} aria-labelledby="work-title">
      <h2 id="work-title" className="sr-only">실무 작업</h2>
      <div className={s.bigWord} aria-hidden="true">
        <span data-big-word>Selected Works ✦ Selected Works ✦</span>
      </div>

      <Container>
        <div className={s.intro}>
          <p className={s.lead} data-reveal>
            13년 동안 맡았던 작업 가운데 화면으로 보여드릴 수 있는 것들입니다. 카드를 누르면 PC와 모바일 화면을 크게 볼 수 있습니다.
          </p>
        </div>

        <ul className={s.grid}>
          {featured.map((p) => (
            <li key={p.id} data-feature>
              <WorkCard project={p} onOpen={setSelected} />
            </li>
          ))}
        </ul>
      </Container>

      <div className={s.dark} data-tone="dark">
        <Container>
          <div className={s.allHead}>
            <h3 className={s.allTitle} data-reveal>All works</h3>
            <p className={s.allCount} data-reveal>{rest.length}개의 작업 더 보기</p>
          </div>
          <ul className={s.list}>
            {rest.map((p) => (
              <WorkListRow key={p.id} project={p} onOpen={setSelected} />
            ))}
          </ul>
        </Container>
      </div>

      <Dialog open={!!selected} onClose={() => setSelected(null)} labelledBy={DETAIL_TITLE_ID}>
        {selected && <WorkDetail project={selected} titleId={DETAIL_TITLE_ID} />}
      </Dialog>
    </section>
  )
}
