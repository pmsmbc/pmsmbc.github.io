import { useEffect, useState } from 'react'
import { usePrefersReducedMotion } from '@/shared/lib'
import s from './WorkLog.module.css'

type Who = 'req' | 'ai' | 'me' | 'done'

// 실제 진행 중인 중소벤처24 헬프데스크 고도화 프로젝트의 흐름
const lines: Array<{ who: Who; label: string; text: string }> = [
  { who: 'req', label: '요청', text: '헬프데스크 고도화, React와 KRDS 기준으로 신규 구축' },
  { who: 'ai', label: 'AI', text: '기획안 요약, 메뉴 트리와 화면 목록 초안 정리' },
  { who: 'me', label: '직접', text: 'FSD 레이어 설계, 팀원별 작업 분배와 일정 수립' },
  { who: 'ai', label: 'AI', text: 'KRDS 컴포넌트 마크업과 테스트 데이터 초안 생성' },
  { who: 'me', label: '직접', text: '웹 접근성(KWCAG) 점검과 결함 조치, 코드 리뷰' },
  { who: 'done', label: '원칙', text: '디자인 확정 전 뼈대 구축, 기한은 반드시 지킨다' },
]

export function WorkLog() {
  const reduced = usePrefersReducedMotion()
  const [step, setStep] = useState(0)
  // 움직임 줄이기 설정이면 처음부터 전체를 보여줌
  const shown = reduced ? lines.length : step

  useEffect(() => {
    if (reduced || step >= lines.length) return
    const t = window.setTimeout(() => setStep((n) => n + 1), step === 0 ? 500 : 700)
    return () => window.clearTimeout(t)
  }, [step, reduced])

  return (
    <figure className={s.panel}>
      <figcaption className={s.caption}>
        <span className={s.dots} aria-hidden="true"><i /><i /><i /></span>
        작업 기록
      </figcaption>
      {/* 스크린리더에는 전체 내용을 한 번에 제공 */}
      <ol className={s.lines}>
        {lines.map((line, i) => (
          <li
            key={i}
            className={s.line}
            data-who={line.who}
            data-visible={i < shown}
          >
            <span className={s.label}>{line.label}</span>
            <span className={s.text}>{line.text}</span>
          </li>
        ))}
      </ol>
    </figure>
  )
}
