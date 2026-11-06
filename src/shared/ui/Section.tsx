import type { ReactNode } from 'react'
import { Container } from './Container'
import s from './Section.module.css'

type Props = {
  id: string
  title: string
  lead?: string
  children: ReactNode
}

export function Section({ id, title, lead, children }: Props) {
  const titleId = `${id}-title`
  return (
    <section id={id} className={s.section} aria-labelledby={titleId}>
      <Container>
        <header className={s.head}>
          <h2 id={titleId} className={s.title}>{title}</h2>
          {lead && <p className={s.lead}>{lead}</p>}
        </header>
        {children}
      </Container>
    </section>
  )
}
