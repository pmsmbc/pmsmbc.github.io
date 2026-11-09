import { useEffect, useRef, type KeyboardEvent, type ReactNode } from 'react'
import { pauseSmoothScroll, resumeSmoothScroll } from '@/shared/lib'
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
      pauseSmoothScroll()
    }
    if (!open && d.open) d.close()
    return () => {
      document.documentElement.style.overflow = ''
      resumeSmoothScroll()
    }
  }, [open])

  // 팝업 안에서만 Tab 순환 (마지막 요소 다음 → 첫 요소)
  const trapTab = (e: KeyboardEvent<HTMLDialogElement>) => {
    if (e.key !== 'Tab' || !ref.current) return
    const focusables = ref.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')
    if (!focusables.length) return
    const first = focusables[0]
    const last = focusables[focusables.length - 1]
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault()
      last.focus()
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault()
      first.focus()
    }
  }

  return (
    <dialog
      onKeyDown={trapTab}
      ref={ref}
      className={s.dialog}
      data-lenis-prevent
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
