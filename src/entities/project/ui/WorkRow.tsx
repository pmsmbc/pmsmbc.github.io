import { Tag } from '@/shared/ui'
import type { WorkProject } from '../model/types'
import s from './WorkRow.module.css'

export function WorkRow({ project }: { project: WorkProject }) {
  const { year, title, client, summary, roles, links } = project
  const link = links?.[0]?.href
  return (
    <article className={s.row}>
      <p className={s.year}>{year}</p>
      <div className={s.body}>
        <h3 className={s.title}>
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer" className={s.link}>
              {title}
              <span className="sr-only"> (새 창에서 상세 보기)</span>
            </a>
          ) : (
            title
          )}
        </h3>
        {client && <p className={s.client}>{client}</p>}
        <p className={s.summary}>{summary}</p>
      </div>
      <ul className={s.roles} aria-label="담당 역할">
        {roles.map((r) => (
          <li key={r}><Tag>{r}</Tag></li>
        ))}
      </ul>
    </article>
  )
}
