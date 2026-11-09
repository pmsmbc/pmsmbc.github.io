import { useRef } from 'react'
import { gsap, MOTION_OK, useGSAP } from '@/shared/lib'
import { SplitText } from '@/shared/ui'
import { principles, steps } from '../model/content'
import s from './AiWorkflow.module.css'

/**
 * 섹션이 화면 맨 위에 닿으면 고정되고, 세로 스크롤만큼 카드가 가로로 이동합니다.
 * 마지막 카드까지 지나가면 고정이 풀리고 다음 섹션으로 내려갑니다.
 * 움직임 줄이기 설정이면 카드를 세로로 쌓아 보여줍니다.
 */
export function AiWorkflow() {
  const ref = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const section = ref.current
      const track = trackRef.current
      if (!section || !track) return

      const mm = gsap.matchMedia()
      mm.add(MOTION_OK, () => {
        // 가로 배치로 바꾼 뒤 길이를 잼
        section.dataset.horizontal = 'true'
        const distance = () => Math.max(0, track.scrollWidth - window.innerWidth)

        const tween = gsap.to(track, {
          x: () => -distance(),
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 0.6,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        })

        // 큰 숫자가 카드보다 살짝 느리게 움직여 깊이감을 줌
        gsap.utils.toArray<HTMLElement>('[data-num]').forEach((num) => {
          gsap.fromTo(
            num,
            { xPercent: 30 },
            {
              xPercent: -10,
              ease: 'none',
              scrollTrigger: { trigger: num, containerAnimation: tween, start: 'left right', end: 'right left', scrub: true },
            },
          )
        })

        gsap.fromTo(
          '[data-ai-progress]',
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: 'none',
            scrollTrigger: { trigger: section, start: 'top top', end: () => `+=${distance()}`, scrub: true, invalidateOnRefresh: true },
          },
        )

        return () => {
          delete section.dataset.horizontal
        }
      })
    },
    { scope: ref },
  )

  return (
    <section id="ai-workflow" ref={ref} className={s.section} data-tone="dark" aria-labelledby="ai-workflow-title">
      <div className={s.track} ref={trackRef}>
        <div className={s.intro}>
          <SplitText as="h2" id="ai-workflow-title" lines={['AI', 'Workflow']} className={s.title} />
          <p className={s.lead}>
            AI는 속도를 내는 도구이고, 결과물의 품질은 제가 책임집니다. 실제 업무에서 쓰는 순서를 그대로 옮겼습니다.
          </p>
          <p className={s.hint} aria-hidden="true">
            스크롤하면 옆으로 넘어갑니다
            <svg width="40" height="12" viewBox="0 0 40 12" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M0 6h38M33 1l5 5-5 5" />
            </svg>
          </p>
        </div>

        <ol className={s.steps}>
          {steps.map((step, i) => (
            <li key={step.title} className={s.panel} data-human={i === 2 || undefined}>
              <span className={s.num} aria-hidden="true" data-num>{String(i + 1).padStart(2, '0')}</span>
              <p className={s.who}>{i === 2 ? '사람이 맡는 단계' : 'AI와 함께'}</p>
              <h3 className={s.stepTitle}>{step.title}</h3>
              <p className={s.stepText}>{step.text}</p>
            </li>
          ))}
        </ol>

        <div className={s.principles}>
          <h3 className={s.principlesTitle}>지키는 원칙</h3>
          <ul>
            {principles.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </div>
      <span className={s.progress} aria-hidden="true"><span data-ai-progress /></span>
    </section>
  )
}
