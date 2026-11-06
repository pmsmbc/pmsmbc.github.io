import { useState } from 'react'
import { WorkCard, WorkDetail, WorkRow, otherWorkProjects, workProjects, type WorkProject } from '@/entities/project'
import { Dialog, Section } from '@/shared/ui'
import s from './WorkList.module.css'

const INITIAL = 9
const DETAIL_TITLE_ID = 'work-detail-title'

export function WorkList() {
  const [selected, setSelected] = useState<WorkProject | null>(null)
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? workProjects : workProjects.slice(0, INITIAL)
  const hiddenCount = workProjects.length - INITIAL

  return (
    <Section
      id="work"
      title="실무 작업"
      lead="13년 동안 맡았던 작업 가운데 화면으로 보여드릴 수 있는 것들입니다. 카드를 누르면 PC와 모바일 화면을 크게 볼 수 있습니다."
    >
      <ul className={s.grid} id="work-grid">
        {visible.map((p) => (
          <li key={p.id}>
            <WorkCard project={p} onOpen={setSelected} />
          </li>
        ))}
      </ul>

      {hiddenCount > 0 && (
        <div className={s.more}>
          <button
            type="button"
            className={s.moreButton}
            aria-expanded={expanded}
            aria-controls="work-grid"
            onClick={() => setExpanded((v) => !v)}
          >
            {expanded ? '접기' : `작업 ${hiddenCount}개 더 보기`}
          </button>
        </div>
      )}

      <h3 className={s.subTitle}>그 밖의 작업</h3>
      <div className={s.list}>
        {otherWorkProjects.map((p) => (
          <WorkRow key={p.id} project={p} />
        ))}
      </div>

      <Dialog open={!!selected} onClose={() => setSelected(null)} labelledBy={DETAIL_TITLE_ID}>
        {selected && <WorkDetail project={selected} titleId={DETAIL_TITLE_ID} />}
      </Dialog>
    </Section>
  )
}
