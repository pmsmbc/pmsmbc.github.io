import { ProjectCard, sideProjects } from '@/entities/project'
import { Section } from '@/shared/ui'
import s from './ProjectGrid.module.css'

export function ProjectGrid() {
  return (
    <Section
      id="projects"
      title="Side projects"
      lead="업무 밖에서 직접 기획하고 만들어 운영하는 사이트입니다."
    >
      <div className={s.grid}>
        {sideProjects.map((p) => (
          <div key={p.id} data-reveal>
            <ProjectCard project={p} />
          </div>
        ))}
      </div>
    </Section>
  )
}
