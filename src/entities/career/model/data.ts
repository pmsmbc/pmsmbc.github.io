import type { Career, Education } from './types'

// 최신순. (이력서 경력란 기준)
export const careers: Career[] = [
  {
    id: 'ucube',
    period: '2025.12 – 현재',
    company: '유큐브',
    role: '솔루션개발부 차장, 프론트엔드',
    summary: '자사 솔루션 GS인증 1등급 획득과 조달청 등록 리딩, 중소벤처24 헬프데스크 고도화 프로젝트 PL',
  },
  {
    id: 'themoontech',
    period: '2025.01 – 2025.11',
    company: '더문테크',
    role: '서비스개발팀 퍼블리셔',
    summary: '신규 사이트 반응형 퍼블리싱, Vue·React 환경 컴포넌트 마크업, AI를 활용한 페이지 개발',
  },
  {
    id: 'themoonlabs',
    period: '2021.06 – 2025.01',
    company: '더문랩스 (구 위드컴투게더)',
    role: '개발팀 퍼블리셔',
    summary: '신규 서비스 사이트 반응형 퍼블리싱과 유지보수, Vue·React 컴포넌트 마크업',
  },
  {
    id: 'cyworks',
    period: '2016.06 – 2021.06',
    company: '싸이웍스',
    role: 'UI/UX 팀장',
    summary: '대학·기관 사이트 신규 구축과 운영 사이트 유지보수, WEB AWARD KOREA 2020 최우수상 2개 부문 수상 프로젝트',
  },
  {
    id: 'cnttech',
    period: '2015.10 – 2016.06',
    company: '씨엔티테크',
    role: '디자인팀 퍼블리셔',
    summary: '운영 사이트 유지보수와 신규 사이트 제작',
  },
  {
    id: 'hanmiit',
    period: '2015.05 – 2015.09',
    company: '한미IT',
    role: '디자인팀 퍼블리셔 (계약직)',
    summary: 'PC 반응형 웹페이지와 모바일 페이지 HTML5·CSS 작업',
  },
  {
    id: 'invaluebiz',
    period: '2013.06 – 2015.05',
    company: '인밸류비즈',
    role: '디자인팀 퍼블리셔',
    summary: '신규 사이트 제작과 유지보수',
  },
]

export const educations: Education[] = [
  { id: 'dankook', period: '2013', title: '단국대학교(천안) 컴퓨터과학과 졸업' },
]
