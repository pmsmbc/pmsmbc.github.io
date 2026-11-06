import { usePrefersReducedMotion } from '@/shared/lib'
import s from './ScrollTopButton.module.css'

export function ScrollTopButton() {
  const reduced = usePrefersReducedMotion()
  const toTop = () => {
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' })
    document.getElementById('top')?.focus({ preventScroll: true })
  }
  return (
    <button type="button" className={s.button} onClick={toTop}>
      맨 위로
    </button>
  )
}
