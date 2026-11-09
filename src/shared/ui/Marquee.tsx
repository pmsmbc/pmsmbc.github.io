import type { ReactNode } from 'react'
import { cx } from '@/shared/lib'
import s from './Marquee.module.css'

type Props = {
  items: ReactNode[]
  reverse?: boolean
  /** 한 바퀴 도는 시간(초) */
  duration?: number
  /** true면 멈춤 */
  paused?: boolean
  className?: string
  itemClassName?: string
}

/** 끝없이 흐르는 띠. 같은 내용을 두 번 이어 붙여 이음매 없이 돌립니다. */
export function Marquee({ items, reverse, duration = 40, paused, className, itemClassName }: Props) {
  const group = (hidden: boolean) => (
    <ul className={s.group} aria-hidden={hidden || undefined}>
      {items.map((item, i) => (
        <li key={i} className={cx(s.item, itemClassName)}>{item}</li>
      ))}
    </ul>
  )
  return (
    <div
      className={cx(s.marquee, reverse && s.reverse, paused && s.paused, className)}
      style={{ ['--duration' as string]: `${duration}s` }}
    >
      <div className={s.track}>
        {group(false)}
        {group(true)}
      </div>
    </div>
  )
}
