import { useRef } from 'react'
import { gsap, MOTION_OK, useGSAP } from '@/shared/lib'

/** 화면에 들어오면 0부터 목표 숫자까지 올라갑니다. */
export function Counter({ value, className }: { value: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)

  useGSAP(() => {
    const el = ref.current
    if (!el) return
    const mm = gsap.matchMedia()
    mm.add(MOTION_OK, () => {
      const obj = { n: 0 }
      el.textContent = '0'
      gsap.to(obj, {
        n: value,
        duration: 1.6,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 85%', once: true },
        onUpdate: () => {
          el.textContent = String(Math.round(obj.n))
        },
      })
      return () => {
        el.textContent = String(value)
      }
    })
  }, [value])

  return (
    <span className={className}>
      <span className="sr-only">{value}</span>
      <span ref={ref} aria-hidden="true">{value}</span>
    </span>
  )
}
