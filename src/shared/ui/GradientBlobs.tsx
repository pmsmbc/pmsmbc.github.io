import { useRef } from 'react'
import { cx, gsap, MOTION_OK, useGSAP } from '@/shared/lib'
import s from './GradientBlobs.module.css'

/** 천천히 떠다니며 마우스를 살짝 따라오는 흐린 색 덩어리 배경 */
export function GradientBlobs({ className, followMouse = true }: { className?: string; followMouse?: boolean }) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(MOTION_OK, () => {
        const blobs = gsap.utils.toArray<HTMLElement>('[data-blob]')
        const rand = gsap.utils.random
        blobs.forEach((blob) => {
          const drift = () =>
            gsap.to(blob, {
              x: rand(-180, 180),
              y: rand(-120, 120),
              rotation: rand(-40, 40),
              scale: rand(0.85, 1.2),
              duration: rand(6, 11),
              ease: 'sine.inOut',
              onComplete: drift,
            })
          drift()
        })

        if (!followMouse || !ref.current) return
        const inner = ref.current.querySelector<HTMLElement>('[data-blob-inner]')
        if (!inner) return
        const toX = gsap.quickTo(inner, 'x', { duration: 1.8, ease: 'power3.out' })
        const toY = gsap.quickTo(inner, 'y', { duration: 1.8, ease: 'power3.out' })
        const onMove = (e: PointerEvent) => {
          toX((e.clientX / window.innerWidth - 0.5) * 120)
          toY((e.clientY / window.innerHeight - 0.5) * 80)
        }
        window.addEventListener('pointermove', onMove)
        return () => window.removeEventListener('pointermove', onMove)
      })
    },
    { scope: ref },
  )

  return (
    <div ref={ref} className={cx(s.wrap, className)} aria-hidden="true">
      <div className={s.inner} data-blob-inner>
        <span className={s.blob} data-blob data-c="1" />
        <span className={s.blob} data-blob data-c="2" />
        <span className={s.blob} data-blob data-c="3" />
        <span className={s.blob} data-blob data-c="4" />
      </div>
      <span className={s.grain} />
    </div>
  )
}
