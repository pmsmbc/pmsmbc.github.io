import type { SkillGroup } from './types'

export const skillGroups: SkillGroup[] = [
  { id: 'markup', title: '마크업과 스타일', items: ['HTML5', 'CSS3', 'SCSS', 'jQuery', '반응형 웹', 'CSS 애니메이션'] },
  { id: 'frontend', title: '프론트엔드', items: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Vue', 'Vite', 'FSD 아키텍처'] },
  { id: 'quality', title: '표준과 품질', items: ['웹 표준', '웹접근성(KWCAG)', 'KRDS', 'GS인증 QA', '다국어(i18n)'] },
  // TODO: 실제로 쓰는 AI 도구를 더 추가하세요.
  { id: 'ai', title: 'AI 도구', items: ['Claude Code'] },
  { id: 'collab', title: '협업', items: ['Git', 'SVN', 'Figma', 'Photoshop'] },
]
