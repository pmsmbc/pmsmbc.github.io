import type { ReactNode } from 'react'
import s from './Tag.module.css'

export function Tag({ children }: { children: ReactNode }) {
  return <span className={s.tag}>{children}</span>
}
