import { useState } from 'react'
import { Marquee } from '@/shared/ui'
import s from './SkillsMarquee.module.css'

const rowA = ['HTML5', 'CSS3', 'SCSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Vue', 'Vite']
const rowB = ['FSD 아키텍처', '웹 접근성', 'KRDS', '반응형 웹', 'GS인증 QA', 'Claude Code', 'Figma', 'Git']

export function SkillsMarquee() {
  const [paused, setPaused] = useState(false)

  return (
    <section className={s.wrap} aria-label="다루는 기술">
      <Marquee items={rowA.map((t) => <span key={t} className={s.solid}>{t}</span>)} duration={38} paused={paused} itemClassName={s.item} />
      <Marquee items={rowB.map((t) => <span key={t} className={s.outline}>{t}</span>)} duration={44} reverse paused={paused} itemClassName={s.item} />
      {/* 저절로 움직이는 콘텐츠의 정지 기능 (KWCAG 2.2.2) */}
      <button type="button" className={s.toggle} aria-pressed={paused} onClick={() => setPaused((v) => !v)}>
        {paused ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 4l13 8-13 8z" /></svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6 4h4v16H6zM14 4h4v16h-4z" /></svg>
        )}
        <span>{paused ? '기술 목록 흐름 재생' : '기술 목록 흐름 멈춤'}</span>
      </button>
    </section>
  )
}
