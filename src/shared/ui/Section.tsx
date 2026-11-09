import type { ReactNode } from 'react'
import { cx } from '@/shared/lib'
import { Container } from './Container'
import { SplitText } from './SplitText'
import s from './Section.module.css'

type Props = {
  id: string
  /** 크게 보이는 영문 제목 */
  title: string
  /** 제목 아래 한국어 설명 */
  lead?: string
  tone?: 'light' | 'dark'
  className?: string
  children: ReactNode
}

export function Section({ id, title, lead, tone = 'light', className, children }: Props) {
  const titleId = `${id}-title`
  return (
    <section id={id} className={cx(s.section, tone === 'dark' && s.dark, className)} aria-labelledby={titleId}>
      <Container>
        <header className={s.head}>
          <SplitText as="h2" id={titleId} lines={[title]} className={s.title} />
          {lead && <p className={s.lead} data-reveal>{lead}</p>}
        </header>
        {children}
      </Container>
    </section>
  )
}
