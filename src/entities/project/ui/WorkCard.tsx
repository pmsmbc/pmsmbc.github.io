import type { WorkProject } from '../model/types'
import s from './WorkCard.module.css'

type Props = {
  project: WorkProject
  onOpen: (project: WorkProject) => void
}

export function WorkCard({ project, onOpen }: Props) {
  const { title, year, client, roles, images } = project
  const thumb = images?.find((i) => i.device === 'pc') ?? images?.[0]
  const meta = [year, client].filter(Boolean).join(', ')

  return (
    <article className={s.card}>
      <div className={s.thumb}>
        {thumb && <img src={thumb.src} alt="" loading="lazy" decoding="async" />}
      </div>
      <div className={s.body}>
        <h3 className={s.title}>
          <button type="button" className={s.open} onClick={() => onOpen(project)} aria-haspopup="dialog">
            {title}
          </button>
        </h3>
        {meta && <p className={s.meta}>{meta}</p>}
        <p className={s.roles}>{roles.join(', ')}</p>
      </div>
    </article>
  )
}
