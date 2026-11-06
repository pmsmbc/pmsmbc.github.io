import type { ReactNode } from 'react'
import s from './Container.module.css'

export function Container({ children }: { children: ReactNode }) {
  return <div className={s.container}>{children}</div>
}
