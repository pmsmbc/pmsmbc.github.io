import { useRef } from 'react'
import { ScrollTopButton } from '@/features/scroll-to-top'
import { gsap, MOTION_OK, ScrollTrigger, useGSAP } from '@/shared/lib'
import { About } from '@/widgets/about'
import { AiWorkflow } from '@/widgets/ai-workflow'
import { Contact } from '@/widgets/contact'
import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'
import { Hero } from '@/widgets/hero'
import { ProjectGrid } from '@/widgets/project-grid'
import { SkillsMarquee } from '@/widgets/skills-marquee'
import { WorkList } from '@/widgets/work-list'
import s from './HomePage.module.css'

export function HomePage() {
  const ref = useRef<HTMLDivElement>(null)

  // 페이지 공통 등장 효과: 섹션 제목 글자, data-reveal 요소
  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(MOTION_OK, () => {
        gsap.utils.toArray<HTMLElement>('section h2:not(#hero-title):not(#contact-title)').forEach((h) => {
          const chars = h.querySelectorAll('[data-char]')
          if (!chars.length) return
          gsap.from(chars, {
            yPercent: 115,
            duration: 1.1,
            stagger: 0.03,
            ease: 'expo.out',
            scrollTrigger: { trigger: h, start: 'top 85%', once: true },
          })
        })

        gsap.set('[data-reveal]', { y: 48, opacity: 0 })
        ScrollTrigger.batch('[data-reveal]', {
          start: 'top 90%',
          once: true,
          onEnter: (els) => gsap.to(els, { y: 0, opacity: 1, duration: 1.1, stagger: 0.08, ease: 'expo.out', overwrite: true }),
        })
      })
      // 이미지가 늦게 로드되면 위치 다시 계산
      const refresh = () => ScrollTrigger.refresh()
      window.addEventListener('load', refresh)
      return () => window.removeEventListener('load', refresh)
    },
    { scope: ref },
  )

  return (
    <div ref={ref}>
      <a href="#main" className={s.skip}>본문 바로가기</a>
      <Header />
      <main id="main" tabIndex={-1} className={s.main}>
        <div id="top" tabIndex={-1} />
        <Hero />
        <SkillsMarquee />
        <About />
        <AiWorkflow />
        <WorkList />
        <ProjectGrid />
        <Contact />
      </main>
      <Footer />
      <ScrollTopButton />
    </div>
  )
}
