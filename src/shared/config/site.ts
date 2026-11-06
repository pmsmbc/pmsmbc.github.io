// 사이트 전역에서 쓰는 개인 정보와 링크는 이 파일 한 곳에서 관리합니다.
// 링크 값을 빈 문자열로 두면 화면에서 자동으로 숨겨집니다.
export const siteConfig = {
  name: '박진우',
  nameEn: 'Park Jinwoo',
  role: '13년 차 웹 퍼블리셔 · 프론트엔드 개발자',
  // TODO: 이력서에 pms***@naver.com 으로 가려져 있어 추정한 주소입니다. 실제 주소인지 확인하세요.
  email: 'pmsmbc@naver.com',
  links: {
    github: 'https://github.com/pmsmbc',
    blog: '',
    resume: '',
  },
} as const

export const navItems = [
  { id: 'about', label: '소개' },
  { id: 'ai-workflow', label: 'AI 활용' },
  { id: 'work', label: '실무 작업' },
  { id: 'projects', label: '개인 프로젝트' },
  { id: 'contact', label: '연락처' },
] as const

export type SectionId = (typeof navItems)[number]['id']
