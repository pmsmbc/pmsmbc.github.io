import { cx, scrollToTop, useScrollProgress } from '@/shared/lib'
import s from './ScrollTopButton.module.css'

const R = 22
const C = 2 * Math.PI * R

/** 스크롤 진행률을 테두리로 보여주는 맨 위로 버튼 */
export function ScrollTopButton() {
  const { y, progress } = useScrollProgress()
  const visible = y > 400

  const toTop = () => {
    scrollToTop()
    document.getElementById('top')?.focus({ preventScroll: true })
  }

  return (
    <button
      type="button"
      className={cx(s.button, visible && s.visible)}
      onClick={toTop}
      aria-label="맨 위로"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
    >
      <svg viewBox="0 0 52 52" className={s.ring} aria-hidden="true">
        <circle cx="26" cy="26" r={R} className={s.track} />
        <circle cx="26" cy="26" r={R} className={s.bar} style={{ strokeDasharray: C, strokeDashoffset: C * (1 - progress) }} />
      </svg>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  )
}
