import type { WorkProject } from '../model/types'
import s from './WorkListRow.module.css'

type Props = {
  project: WorkProject
  onOpen?: (project: WorkProject) => void
}

/** 어두운 전체 작업 목록의 한 줄. 화면 이미지가 있으면 눌러서 상세를 엽니다. */
export function WorkListRow({ project, onOpen }: Props) {
  const { title, client, roles, summary, images } = project
  const clickable = !!images?.length && !!onOpen

  const content = (
    <>
      <span className={s.title}>{title}</span>
      <span className={s.roles}>{roles.join(' / ')}</span>
      <span className={s.meta}>{client}</span>
      {!clickable && <span className={s.summary}>{summary}</span>}
    </>
  )

  return (
    <li className={s.item}>
      {clickable ? (
        <button type="button" className={s.row} onClick={() => onOpen(project)} aria-haspopup="dialog">
          {content}
          <span className={s.plus} aria-hidden="true" />
        </button>
      ) : (
        <div className={s.row}>{content}</div>
      )}
    </li>
  )
}
