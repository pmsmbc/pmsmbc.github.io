import type { Career } from '../model/types'
import s from './CareerList.module.css'

export function CareerList({ items }: { items: Career[] }) {
  return (
    <ol className={s.list} data-timeline>
      <span className={s.rail} aria-hidden="true">
        <span className={s.fill} data-timeline-fill />
      </span>
      {items.map((c) => (
        <li key={c.id} className={s.item} data-reveal>
          <span className={s.node} aria-hidden="true" />
          <p className={s.period}>{c.period}</p>
          <h4 className={s.company}>{c.company}</h4>
          <p className={s.role}>{c.role}</p>
          <p className={s.summary}>{c.summary}</p>
        </li>
      ))}
    </ol>
  )
}
