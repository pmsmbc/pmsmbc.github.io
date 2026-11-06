import { Tag } from '@/shared/ui'
import type { SideProject } from '../model/types'
import s from './ProjectCard.module.css'

export function ProjectCard({ project }: { project: SideProject }) {
  const { title, summary, stack, aiNote, thumbnail, link, repo } = project
  return (
    <article className={s.card}>
      <div className={s.thumb} aria-hidden={!thumbnail}>
        {thumbnail ? <img src={thumbnail} alt={`${title} 화면`} loading="lazy" /> : null}
      </div>
      <div className={s.body}>
        <h3 className={s.title}>{title}</h3>
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
        {(link || repo) && (
          <p className={s.links}>
            {link && <a href={link} target="_blank" rel="noopener noreferrer">사이트 보기<span className="sr-only"> (새 창)</span></a>}
            {repo && <a href={repo} target="_blank" rel="noopener noreferrer">코드 보기<span className="sr-only"> (새 창)</span></a>}
          </p>
        )}
      </div>
    </article>
  )
}
