import { useEffect, useState } from 'react'
import { ThemeToggle } from '@/features/theme-toggle'
import { navItems, siteConfig } from '@/shared/config'
import { cx, useActiveSection } from '@/shared/lib'
import s from './Header.module.css'

const sectionIds = navItems.map((n) => n.id)

export function Header() {
  const active = useActiveSection(sectionIds)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className={s.header}>
      <div className={s.inner}>
        <a href="#top" className={s.logo}>{siteConfig.name}</a>

        <nav aria-label="주요 메뉴" className={cx(s.nav, open && s.navOpen)} id="site-nav">
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
            onClick={() => setOpen((v) => !v)}
          >
            {open ? '닫기' : '메뉴'}
          </button>
        </div>
      </div>
    </header>
  )
}
