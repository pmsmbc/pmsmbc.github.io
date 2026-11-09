import Lenis from 'lenis'
import { gsap, ScrollTrigger } from './gsap'

let lenis: Lenis | null = null

/** 부드러운 스크롤 시작. 움직임 줄이기 설정이면 켜지 않습니다. 정리 함수를 돌려줍니다. */
export function startSmoothScroll() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {}
  const offset = -parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h') || '72', 10)
  lenis = new Lenis({ lerp: 0.1, anchors: { offset } })
  lenis.on('scroll', ScrollTrigger.update)
  const tick = (time: number) => lenis?.raf(time * 1000)
  gsap.ticker.add(tick)
  gsap.ticker.lagSmoothing(0)
  return () => {
    gsap.ticker.remove(tick)
    lenis?.destroy()
    lenis = null
  }
}

export const pauseSmoothScroll = () => lenis?.stop()
export const resumeSmoothScroll = () => lenis?.start()

export function scrollToTop() {
  if (lenis) lenis.scrollTo(0)
  else window.scrollTo({ top: 0, behavior: 'smooth' })
}
