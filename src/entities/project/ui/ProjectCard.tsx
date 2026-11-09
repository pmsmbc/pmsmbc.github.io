import { Tag } from '@/shared/ui'
import type { SideProject } from '../model/types'
import s from './ProjectCard.module.css'

export function ProjectCard({ project }: { project: SideProject }) {
  const { title, summary, stack, aiNote, thumbnail, link, repo } = project
  const href = link ?? repo
  return (
    <article className={s.card}>
      <div className={s.thumb}>
        {thumbnail && <img src={thumbnail} alt={`${title} 화면`} loading="lazy" />}
      </div>
      <div className={s.body}>
        <h3 className={s.title}>
          {href ? (
            <a href={href} target="_blank" rel="noopener noreferrer" className={s.link}>
              {title}
              <span className="sr-only"> (새 창)</span>
            </a>
          ) : (
            title
          )}
        </h3>
        <p className={s.summary}>{summary}</p>
        {aiNote && (
          <p className={s.ai}>
            <strong className={s.aiLabel}>AI 활용</strong>
            {aiNote}
          </p>
        )}
        <ul className={s.stack} aria-label="사용 기술">
          {stack.map((t) => (
            <li key={t}><Tag>{t}</Tag></li>
          ))}
        </ul>
        {link && repo && (
          <p className={s.extra}>
            <a href={repo} target="_blank" rel="noopener noreferrer">코드 보기<span className="sr-only"> (새 창)</span></a>
          </p>
        )}
      </div>
    </article>
  )
}
