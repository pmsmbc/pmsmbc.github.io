import type { Career } from '../model/types'
import s from './CareerList.module.css'

export function CareerList({ items }: { items: Career[] }) {
  return (
    <ol className={s.list}>
      {items.map((c) => (
        <li key={c.id} className={s.item}>
          <p className={s.period}>{c.period}</p>
          <div>
            <h4 className={s.company}>
              {c.company} <span className={s.role}>{c.role}</span>
            </h4>
            <p className={s.summary}>{c.summary}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}
