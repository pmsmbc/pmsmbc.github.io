import { Tag } from '@/shared/ui'
import type { WorkProject } from '../model/types'
import s from './WorkDetail.module.css'

export function WorkDetail({ project, titleId }: { project: WorkProject; titleId: string }) {
  const { title, client, summary, roles, links, images = [], note } = project
  const pcs = images.filter((i) => i.device === 'pc')
  const mobiles = images.filter((i) => i.device === 'mobile')

  return (
    <div className={s.detail}>
      <header className={s.head}>
        <h2 id={titleId} className={s.title}>{title}</h2>
        {client && <p className={s.meta}>{client}</p>}
        <p className={s.summary}>{summary}</p>
        <ul className={s.roles} aria-label="담당 역할">
          {roles.map((r) => (
            <li key={r}><Tag>{r}</Tag></li>
          ))}
        </ul>
        {links && links.length > 0 && (
          <p className={s.links}>
            {links.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
                {l.label}<span className="sr-only"> (새 창)</span>
              </a>
            ))}
          </p>
        )}
        {note && <p className={s.note}>{note}</p>}
      </header>

      <div className={mobiles.length ? s.shots : s.shotsPcOnly}>
        <div className={s.pcs}>
          {pcs.map((i) => (
            <img key={i.src} src={i.src} alt={i.alt} className={s.pc} loading="lazy" />
          ))}
        </div>
        {mobiles.length > 0 && (
          <div className={s.mobiles}>
            {mobiles.map((i) => (
              <img key={i.src} src={i.src} alt={i.alt} className={s.mobile} loading="lazy" />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
