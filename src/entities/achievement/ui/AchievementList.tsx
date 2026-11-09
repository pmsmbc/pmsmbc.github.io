import { Counter } from '@/shared/ui'
import type { Achievement } from '../model/types'
import s from './AchievementList.module.css'

export function AchievementList({ items }: { items: Achievement[] }) {
  return (
    <dl className={s.list}>
      {items.map((a) => (
        <div key={a.id} className={s.item} data-reveal>
          <dt className={s.label}>{a.label}</dt>
          <dd className={s.value}>
            <Counter value={a.count} />
            <span className={s.unit}>{a.unit}</span>
          </dd>
          <dd className={s.detail}>{a.detail}</dd>
        </div>
      ))}
    </dl>
  )
}
