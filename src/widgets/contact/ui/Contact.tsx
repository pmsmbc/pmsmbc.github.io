import { CopyEmailButton } from '@/features/copy-email'
import { siteConfig } from '@/shared/config'
import { ButtonLink, Container } from '@/shared/ui'
import s from './Contact.module.css'

export function Contact() {
  return (
    <section id="contact" className={s.contact} aria-labelledby="contact-title">
      <Container>
        <h2 id="contact-title" className={s.title}>
          기한을 지키고 끝까지 꼼꼼하게 마무리하는 퍼블리셔, 프론트엔드 개발자가 필요하시면 연락 주세요.
        </h2>
        <p className={s.email}>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        </p>
        <div className={s.actions}>
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
