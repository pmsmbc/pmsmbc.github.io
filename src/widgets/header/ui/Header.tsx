import { useEffect, useState } from 'react'
import { ThemeToggle } from '@/features/theme-toggle'
import { navItems } from '@/shared/config'
import { cx, useActiveSection, useScrollProgress } from '@/shared/lib'
import { useDarkUnderHeader } from '../model/useDarkUnderHeader'
import s from './Header.module.css'

const sectionIds = navItems.map((n) => n.id)

export function Header() {
  const active = useActiveSection(sectionIds)
  const { y, progress } = useScrollProgress()
  const [open, setOpen] = useState(false)
  const overDark = useDarkUnderHeader()

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className={cx(s.header, y > 40 && s.scrolled, overDark && !open && s.overDark, open && s.menuOpen)}>
      <div className={s.inner}>
        <a href="#top" className={s.logo}>
          Jinwoo<span className={s.logoDot}>.</span>
        </a>

        <nav aria-label="주요 메뉴" className={s.nav} id="site-nav">
          <ul className={s.menu}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={cx(s.link, active === item.id && s.active)}
                  aria-current={active === item.id ? 'location' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={s.actions}>
          <ThemeToggle />
          <button
            type="button"
            className={s.menuButton}
            aria-expanded={open}
            aria-controls="site-nav"
            aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
            onClick={() => setOpen((v) => !v)}
          >
            <span /><span />
          </button>
        </div>
      </div>
      <span className={s.progress} style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
    </header>
  )
}
