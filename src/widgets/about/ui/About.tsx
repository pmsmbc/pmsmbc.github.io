import { useRef } from 'react'
import { AchievementList, achievements, otherAchievements } from '@/entities/achievement'
import { CareerList, careers, educations } from '@/entities/career'
import { SkillGroupList, skillGroups } from '@/entities/skill'
import { gsap, MOTION_OK, useGSAP } from '@/shared/lib'
import { Section } from '@/shared/ui'
import s from './About.module.css'

const intro =
  '퍼블리싱 가이드를 먼저 세워 프로젝트의 일관성을 지키고, 개발자와 디자이너가 함께 읽기 쉬운 코드를 씁니다. React와 TypeScript에 FSD 아키텍처를 도입하고, AI 도구로 개발 속도를 높입니다. 웹 표준과 KRDS, 웹 접근성을 지키며 GS인증 1등급까지 품질을 끝까지 책임집니다.'

export function About() {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(MOTION_OK, () => {
        // 스크롤에 맞춰 단어가 하나씩 진해짐
        gsap.fromTo(
          '[data-word]',
          { opacity: 0.14 },
          {
            opacity: 1,
            stagger: 0.1,
            ease: 'none',
            scrollTrigger: { trigger: '[data-intro]', start: 'top 80%', end: 'bottom 45%', scrub: true },
          },
        )
        // 경력 타임라인 선이 스크롤만큼 차오름
        gsap.fromTo(
          '[data-timeline-fill]',
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: { trigger: '[data-timeline]', start: 'top 70%', end: 'bottom 70%', scrub: true },
          },
        )
      })
    },
    { scope: ref },
  )

  return (
    <Section id="about" title="About me" lead="13년 차 웹 퍼블리셔이자 프론트엔드 개발자입니다.">
      <div ref={ref}>
        <p className={s.intro} data-intro>
          {intro.split(' ').map((w, i) => (
            <span key={i} data-word>
              {w}{' '}
            </span>
          ))}
        </p>

        <div className={s.achievements}>
          <AchievementList items={achievements} />
          <ul className={s.others}>
            {otherAchievements.map((a) => (
              <li key={a} data-reveal>{a}</li>
            ))}
          </ul>
        </div>

        <div className={s.grid}>
          <div>
            <h3 className={s.heading} data-reveal>경력</h3>
            <CareerList items={careers} />
          </div>
          <div className={s.side}>
            <div>
              <h3 className={s.heading} data-reveal>다루는 기술</h3>
              <div data-reveal>
                <SkillGroupList groups={skillGroups} />
              </div>
            </div>
            <div>
              <h3 className={s.heading} data-reveal>학력</h3>
              <ul className={s.edu}>
                {educations.map((e) => (
                  <li key={e.id} data-reveal>
                    <span className={s.eduPeriod}>{e.period}</span>
                    {e.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
