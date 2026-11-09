import { useRef } from 'react'
import { siteConfig } from '@/shared/config'
import { gsap, MOTION_OK, useGSAP } from '@/shared/lib'
import { ButtonLink, Container, GradientBlobs, SplitText } from '@/shared/ui'
import s from './Hero.module.css'

export function Hero() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(MOTION_OK, () => {
        const tl = gsap.timeline({ defaults: { ease: 'expo.out' }, delay: 0.15 })
        tl.from('[data-kicker]', { y: 20, opacity: 0, duration: 1 })
          .from('[data-hero-title] [data-char]', { yPercent: 115, rotate: 6, duration: 1.3, stagger: 0.035 }, '-=0.7')
          .from('[data-hero-sub]', { y: 24, opacity: 0, duration: 1.1, stagger: 0.12 }, '-=0.9')
          .from('[data-cue]', { opacity: 0, duration: 1 }, '-=0.6')

        // 스크롤하면 제목이 위로 밀리며 흐려짐
        gsap.to('[data-hero-content]', {
          yPercent: -18,
          opacity: 0.15,
          ease: 'none',
          scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom top', scrub: true },
        })
      })
    },
    { scope: ref },
  )

  return (
    <section ref={ref} className={s.hero} aria-labelledby="hero-title">
      <GradientBlobs />
      <Container>
        <div className={s.content} data-hero-content>
          <p className={s.kicker} data-kicker>
            <span className={s.dot} aria-hidden="true" />
            {siteConfig.role}
          </p>
          <SplitText as="h1" id="hero-title" lines={['기한은 지키고,', '완성도는 끝까지.']} className={s.title} data-hero-title />
          <div className={s.bottom}>
            <p className={s.desc} data-hero-sub>
              안녕하세요, 13년 동안 웹 표준과 접근성을 지키며 화면을 만들어 온 웹 퍼블리셔이자
              프론트엔드 개발자 박진우입니다. AI로 속도를 내고, 품질은 끝까지 직접 책임집니다.
            </p>
            <div className={s.cta} data-hero-sub>
              <ButtonLink href="#work">작업 보기</ButtonLink>
              <ButtonLink href="#contact" variant="ghost">연락하기</ButtonLink>
            </div>
          </div>
        </div>
      </Container>
      <a href="#about" className={s.cue} data-cue>
        <span>Scroll<span className="sr-only">, 소개로 이동</span></span>
        <i aria-hidden="true" />
      </a>
    </section>
  )
}
