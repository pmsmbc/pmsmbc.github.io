import { useRef } from 'react'
import { CopyEmailButton } from '@/features/copy-email'
import { siteConfig } from '@/shared/config'
import { gsap, MOTION_OK, useGSAP } from '@/shared/lib'
import { ButtonLink, Container, GradientBlobs, SplitText } from '@/shared/ui'
import s from './Contact.module.css'

export function Contact() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(MOTION_OK, () => {
        const tl = gsap.timeline({ scrollTrigger: { trigger: ref.current, start: 'top 65%', once: true } })
        tl.from('[data-contact-title] [data-char]', { yPercent: 115, duration: 1.1, stagger: 0.03, ease: 'expo.out' })
          .from('[data-contact-in]', { y: 30, opacity: 0, duration: 1, stagger: 0.1, ease: 'expo.out' }, '-=0.7')
      })
    },
    { scope: ref },
  )

  return (
    <section id="contact" ref={ref} className={s.contact} aria-labelledby="contact-title">
      <GradientBlobs followMouse={false} />
      <Container>
        <p className={s.kicker} data-contact-in>Contact</p>
        <SplitText
          as="h2"
          id="contact-title"
          lines={['함께 일할 웹 퍼블리셔,', '프론트엔드 개발자가', '필요하신가요?']}
          className={s.title}
          data-contact-title
        />
        <p className={s.desc} data-contact-in>
          기한을 지키고 끝까지 꼼꼼하게 마무리하겠습니다. 편하게 연락 주세요.
        </p>
        <a href={`mailto:${siteConfig.email}`} className={s.email} data-contact-in>
          {siteConfig.email}
        </a>
        <div className={s.actions} data-contact-in>
          <ButtonLink href={`mailto:${siteConfig.email}`}>메일 보내기</ButtonLink>
          <CopyEmailButton email={siteConfig.email} />
          {siteConfig.links.resume && (
            <ButtonLink href={siteConfig.links.resume} variant="ghost">이력서 보기</ButtonLink>
          )}
        </div>
      </Container>
    </section>
  )
}
