import { siteConfig } from '@/shared/config'
import { ButtonLink, Container } from '@/shared/ui'
import { WorkLog } from './WorkLog'
import s from './Hero.module.css'

export function Hero() {
  return (
    <section className={s.hero} aria-labelledby="hero-title">
      <Container>
        <div className={s.grid}>
          <div className={s.copy}>
            <p className={s.intro}>
              {siteConfig.role} <strong>{siteConfig.name}</strong>
            </p>
            <h1 id="hero-title" className={s.title}>
              초안은 AI와 빠르게,
              <br />
              마무리는 직접 꼼꼼하게.
            </h1>
            <p className={s.desc}>
              13년 동안 웹 표준과 접근성을 지키며 화면을 만들어 왔습니다. 지금은 AI 도구로 개발 속도를 높이고,
              아낀 시간은 품질 검수와 기한 준수에 씁니다.
            </p>
            <div className={s.cta}>
              <ButtonLink href="#work">작업 보기</ButtonLink>
              <ButtonLink href="#contact" variant="ghost">연락하기</ButtonLink>
            </div>
          </div>
          <WorkLog />
        </div>
      </Container>
    </section>
  )
}
