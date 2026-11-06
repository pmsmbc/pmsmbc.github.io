import { ScrollTopButton } from '@/features/scroll-to-top'
import { siteConfig } from '@/shared/config'
import { Container } from '@/shared/ui'
import s from './Footer.module.css'

const links = [
  { label: '이력서', href: siteConfig.links.resume },
  { label: '블로그', href: siteConfig.links.blog },
  { label: 'GitHub', href: siteConfig.links.github },
].filter((l) => l.href)

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className={s.footer}>
      <Container>
        <div className={s.inner}>
          <p className={s.copy}>© {year} {siteConfig.nameEn}</p>
          <ul className={s.links}>
            {links.map((l) => (
              <li key={l.label}>
                <a href={l.href} target="_blank" rel="noopener noreferrer">
                  {l.label}<span className="sr-only"> (새 창)</span>
                </a>
              </li>
            ))}
          </ul>
          <ScrollTopButton />
        </div>
      </Container>
    </footer>
  )
}
