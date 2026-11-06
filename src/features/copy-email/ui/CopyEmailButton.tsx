import { useEffect, useState } from 'react'
import s from './CopyEmailButton.module.css'

type Status = 'idle' | 'copied' | 'failed'

export function CopyEmailButton({ email }: { email: string }) {
  const [status, setStatus] = useState<Status>('idle')

  useEffect(() => {
    if (status === 'idle') return
    const t = window.setTimeout(() => setStatus('idle'), 2500)
    return () => window.clearTimeout(t)
  }, [status])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setStatus('copied')
    } catch {
      setStatus('failed')
    }
  }

  return (
    <>
      <button type="button" className={s.button} onClick={copy}>
        {status === 'copied' ? '복사했습니다' : '이메일 주소 복사'}
      </button>
      <span className="sr-only" role="status" aria-live="polite">
        {status === 'copied' && `${email} 주소를 복사했습니다.`}
        {status === 'failed' && '복사하지 못했습니다. 주소를 직접 선택해 복사해 주세요.'}
      </span>
    </>
  )
}
