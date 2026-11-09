import type { ElementType } from 'react'
import s from './SplitText.module.css'

type Props = {
  /** 한 줄에 하나씩 */
  lines: string[]
  as?: ElementType
  className?: string
  id?: string
  [data: `data-${string}`]: unknown
}

/**
 * 글자 단위로 쪼개 애니메이션할 수 있게 렌더링합니다.
 * 각 글자는 `[data-char]`, 줄은 `[data-line]` 으로 선택할 수 있습니다.
 * 스크린리더에는 원문 한 줄로 읽힙니다.
 */
export function SplitText({ lines, as: Tag = 'p', className, id, ...data }: Props) {
  return (
    <Tag className={className} id={id} {...data}>
      <span className="sr-only">{lines.join(' ')}</span>
      <span aria-hidden="true">
        {lines.map((line, li) => (
          <span key={li} className={s.line} data-line>
            {line.split(' ').map((word, wi, words) => (
              <span key={wi} className={s.word}>
                {Array.from(word).map((ch, ci) => (
                  <span key={ci} className={s.mask}>
                    <span className={s.char} data-char>{ch}</span>
                  </span>
                ))}
                {wi < words.length - 1 && ' '}
              </span>
            ))}
          </span>
        ))}
      </span>
    </Tag>
  )
}
