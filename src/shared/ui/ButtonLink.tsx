import type { AnchorHTMLAttributes } from 'react'
import { cx } from '@/shared/lib'
import s from './ButtonLink.module.css'

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: 'primary' | 'ghost'
}

/** 외부 주소(http)면 새 창으로 열고, 스크린리더에 새 창 열림을 알립니다. */
export function ButtonLink({ variant = 'primary', className, children, ...rest }: Props) {
  const external = rest.href?.startsWith('http')
  return (
    <a
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : null)}
      {...rest}
      className={cx(s.button, s[variant], className)}
    >
      {children}
      {external && <span className="sr-only"> (새 창)</span>}
    </a>
  )
}
