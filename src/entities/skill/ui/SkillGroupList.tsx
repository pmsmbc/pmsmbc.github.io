import { Tag } from '@/shared/ui'
import type { SkillGroup } from '../model/types'
import s from './SkillGroupList.module.css'

export function SkillGroupList({ groups }: { groups: SkillGroup[] }) {
  return (
    <dl className={s.list}>
      {groups.map((g) => (
        <div key={g.id} className={s.group}>
          <dt className={s.title}>{g.title}</dt>
          <dd className={s.items}>
            {g.items.map((item) => (
              <Tag key={item}>{item}</Tag>
            ))}
          </dd>
        </div>
      ))}
    </dl>
  )
}
