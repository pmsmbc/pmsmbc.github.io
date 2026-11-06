import type { AnchorHTMLAttributes } from 'react'
import { cx } from '@/shared/lib'
import s from './ButtonLink.module.css'

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: 'primary' | 'ghost'
}

export function ButtonLink({ variant = 'primary', className, ...rest }: Props) {
  const external = rest.href?.startsWith('http')
  return (
    <a
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : null)}
      {...rest}
      className={cx(s.button, s[variant], className)}
    />
  )
}
