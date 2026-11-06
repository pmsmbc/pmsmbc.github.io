import { useEffect, useRef, type ReactNode } from 'react'
import s from './Dialog.module.css'

type Props = {
  open: boolean
  onClose: () => void
  labelledBy: string
  children: ReactNode
}

/** 네이티브 <dialog> 기반 모달. Esc 닫기, 포커스 가두기, 닫은 뒤 포커스 복귀는 브라우저가 처리합니다. */
export function Dialog({ open, onClose, labelledBy, children }: Props) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const d = ref.current
    if (!d) return
    if (open && !d.open) {
      d.showModal()
      document.documentElement.style.overflow = 'hidden'
    }
    if (!open && d.open) d.close()
    return () => {
      document.documentElement.style.overflow = ''
    }
  }, [open])

  return (
    <dialog
      ref={ref}
      className={s.dialog}
      aria-labelledby={labelledBy}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose()
      }}
    >
      <div className={s.inner}>
        <button type="button" className={s.close} onClick={onClose} aria-label="닫기">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
        {open && children}
      </div>
    </dialog>
  )
}
