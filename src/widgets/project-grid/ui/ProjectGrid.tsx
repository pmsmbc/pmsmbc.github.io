import { ProjectCard, sideProjects } from '@/entities/project'
import { Section } from '@/shared/ui'
import s from './ProjectGrid.module.css'

export function ProjectGrid() {
  return (
    <Section
      id="projects"
      title="개인 프로젝트"
      lead="업무 밖에서 새로운 도구와 방식을 시험해 본 결과물입니다. 프로젝트마다 AI를 어디에 썼는지 함께 적었습니다."
    >
      <div className={s.grid}>
        {sideProjects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </Section>
  )
}
