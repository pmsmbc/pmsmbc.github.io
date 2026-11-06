import { AchievementList, achievements, otherAchievements } from '@/entities/achievement'
import { CareerList, careers, educations } from '@/entities/career'
import { SkillGroupList, skillGroups } from '@/entities/skill'
import { Section } from '@/shared/ui'
import s from './About.module.css'

export function About() {
  return (
    <Section
      id="about"
      title="소개"
      lead="퍼블리싱 가이드를 먼저 세워 프로젝트의 일관성을 지키고, 개발자와 디자이너가 함께 읽기 쉬운 코드를 씁니다. 화면 구현을 넘어 품질 보증과 공공 표준 대응까지 책임집니다."
    >
      <AchievementList items={achievements} />
      <ul className={s.others}>
        {otherAchievements.map((a) => (
          <li key={a}>{a}</li>
        ))}
      </ul>

      <div className={s.grid}>
        <div className={s.block}>
          <h3 className={s.heading}>경력</h3>
          <CareerList items={careers} />
          <h3 className={s.heading}>학력</h3>
          <ul className={s.edu}>
            {educations.map((e) => (
              <li key={e.id}>
                <span className={s.eduPeriod}>{e.period}</span>
                {e.title}
              </li>
            ))}
          </ul>
        </div>
        <div className={s.block}>
          <h3 className={s.heading}>다루는 기술</h3>
          <SkillGroupList groups={skillGroups} />
        </div>
      </div>
    </Section>
  )
}
