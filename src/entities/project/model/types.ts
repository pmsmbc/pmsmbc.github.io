export type ProjectImage = {
  src: string
  alt: string
  device: 'pc' | 'mobile'
}

export type ProjectLink = {
  label: string
  href: string
}

/** 회사에서 진행한 실무 작업 */
export type WorkProject = {
  id: string
  year?: string
  title: string
  client?: string
  summary: string
  roles: string[]
  links?: ProjectLink[]
  /** 첫 번째 PC 이미지가 카드 썸네일로 쓰입니다 */
  images?: ProjectImage[]
  /** 상세 화면에 덧붙이는 짧은 안내 (예: 로그인 후 내부 화면) */
  note?: string
}

/** 개인적으로 만든 프로젝트 */
export type SideProject = {
  id: string
  title: string
  summary: string
  stack: string[]
  /** 이 프로젝트에서 AI를 어떻게 썼는지 한 줄로 */
  aiNote?: string
  thumbnail?: string
  link?: string
  repo?: string
}
