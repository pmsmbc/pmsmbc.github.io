import type { ProjectImage, SideProject, WorkProject } from './types'

const img = (id: string, title: string, devices: Array<'pc' | 'mobile' | 'pc2' | 'pc3'>): ProjectImage[] =>
  devices.map((d) => ({
    src: `/images/work/${id}-${d === 'mobile' ? 'm' : d}.jpg`,
    alt: `${title} ${d === 'mobile' ? '모바일' : 'PC'} 화면`,
    device: d === 'mobile' ? 'mobile' : 'pc',
  }))

const PRIVATE_NOTE = '로그인 후 내부 화면입니다. 화면 속 이름과 학번은 흐리게 처리했습니다.'

// 화면 이미지가 있는 주요 작업 (포트폴리오 pptx 기준). 최신순.
export const workProjects: WorkProject[] = [
  {
    id: 'helpdesk',
    year: '2026',
    title: '중소벤처24 헬프데스크',
    client: '유큐브',
    summary:
      'PL로 참여해 React·Vite 기반 FSD 아키텍처를 설계하고, 메뉴 트리와 워크플로우 규칙, 팀원별 작업 분배와 일정을 관리했습니다. KRDS와 웹 접근성(KWCAG) 기준으로 UI 컴포넌트를 개발하고 Slate 기반 자사 에디터를 커스터마이징했습니다.',
    roles: ['PL', 'React', 'FSD', 'KRDS'],
    links: [{ label: '사이트 보기', href: 'https://www.smes.go.kr/helpdesk/' }],
    images: img('helpdesk', '중소벤처24 헬프데스크', ['pc', 'pc2']),
  },
  {
    id: 'onepass',
    title: '중소벤처24 통합회원',
    summary: '중소벤처24 통합회원 서비스 화면 퍼블리싱. 공공기관 웹 표준과 접근성 기준을 적용했습니다.',
    roles: ['퍼블리싱', '공공', '웹접근성'],
    links: [{ label: '사이트 보기', href: 'https://onepass.smes.go.kr/' }],
    images: img('onepass', '중소벤처24 통합회원', ['pc']),
  },
  {
    id: 'web3',
    year: '2023',
    title: 'Web3.0 Creator Festival 2023',
    client: '더문랩스',
    summary: '행사 공식 사이트 반응형 퍼블리싱.',
    roles: ['퍼블리싱', '반응형'],
    links: [{ label: '사이트 보기', href: 'https://web3creatorfestival.com/' }],
    images: img('web3', 'Web3.0 Creator Festival 2023', ['pc', 'mobile']),
  },
  {
    id: 'nftkorea',
    year: '2023',
    title: 'NFT KOREA FESTIVAL 2023',
    client: '더문랩스',
    summary: '행사 공식 사이트 반응형 퍼블리싱.',
    roles: ['퍼블리싱', '반응형'],
    links: [{ label: '사이트 보기', href: 'https://nftkoreafestival.com/index.html' }],
    images: img('nftkorea', 'NFT KOREA FESTIVAL 2023', ['pc', 'mobile']),
  },
  {
    id: 'playnomm',
    title: 'playNomm',
    client: '더문랩스',
    summary: '서비스 사이트 반응형 퍼블리싱과 프레임워크 환경 내 컴포넌트 마크업.',
    roles: ['퍼블리싱', '반응형', '컴포넌트 마크업'],
    links: [{ label: '사이트 보기', href: 'https://m.playnomm.com/' }],
    images: img('playnomm', 'playNomm', ['pc', 'mobile']),
  },
  {
    id: 'lmwallet',
    title: 'LM WALLET',
    client: '더문랩스',
    summary: 'Vue 프로젝트 안에서 지갑 서비스 화면 컴포넌트 마크업과 반응형 퍼블리싱.',
    roles: ['Vue', '반응형', '컴포넌트 마크업'],
    links: [{ label: '사이트 보기', href: 'https://ilikewallet.com' }],
    images: img('lmwallet', 'LM WALLET', ['pc', 'mobile']),
  },
  {
    id: 'themoonlabs',
    title: '더문랩스 기업 사이트',
    client: '더문랩스',
    summary: '기업 소개 사이트 반응형 퍼블리싱.',
    roles: ['퍼블리싱', '반응형'],
    links: [{ label: '사이트 보기', href: 'https://themoonlabs.net/index.html' }],
    images: img('themoonlabs', '더문랩스 기업 사이트', ['pc', 'mobile']),
  },
  {
    id: 'hycu',
    year: '2020',
    title: '한양사이버대학교 대표 사이트',
    client: '싸이웍스',
    summary: '대표 사이트 메인 퍼블리싱. WEB AWARD KOREA 2020 사이버대학 분야 최우수상 수상 프로젝트입니다.',
    roles: ['퍼블리싱', '반응형', '웹 어워드 수상'],
    links: [{ label: '사이트 보기', href: 'https://www.hycu.ac.kr/user/index.do' }],
    images: img('hycu', '한양사이버대학교 대표 사이트', ['pc', 'mobile']),
  },
  {
    id: 'hycu-go',
    year: '2020',
    title: '한양사이버대학교·대학원 입학 사이트',
    client: '싸이웍스',
    summary: '입학 사이트 메인 퍼블리싱. WEB AWARD KOREA 2020 고객서비스 부문 최우수상 수상 프로젝트입니다.',
    roles: ['퍼블리싱', '반응형', '웹 어워드 수상'],
    links: [
      { label: '대학교 입학 사이트', href: 'https://go.hycu.ac.kr/user/index.do' },
      { label: '대학원 입학 사이트', href: 'https://gsgo.hycu.ac.kr/user/index.do' },
    ],
    images: img('hycu-go', '한양사이버대학교 입학 사이트', ['pc', 'mobile']),
  },
  {
    id: 'khu-portal',
    title: '경희대학교 학생 포털',
    summary: '학생 포털 메인과 위젯형 대시보드 화면 퍼블리싱, 모바일 화면 대응.',
    roles: ['퍼블리싱', '대학 포털', '반응형'],
    images: img('khu-portal', '경희대학교 학생 포털', ['pc', 'mobile']),
    note: PRIVATE_NOTE,
  },
  {
    id: 'khu-aladdin',
    title: '경희대학교 역량관리 시스템',
    summary: '핵심역량 차트와 학습 현황을 보여주는 역량관리 사이트 퍼블리싱, 모바일 화면 대응.',
    roles: ['퍼블리싱', '역량관리', '반응형'],
    images: img('khu-aladdin', '경희대학교 역량관리 시스템', ['pc', 'mobile']),
    note: PRIVATE_NOTE,
  },
  {
    id: 'dankook',
    title: '단국대학교 영웅포트폴리오',
    summary: '역량, 마일리지, 인증 달성률을 한 화면에 보여주는 대시보드형 포트폴리오 사이트 퍼블리싱.',
    roles: ['퍼블리싱', '역량관리', '대시보드'],
    images: img('dankook', '단국대학교 영웅포트폴리오', ['pc']),
    note: PRIVATE_NOTE,
  },
  {
    id: 'gachon',
    title: '가천대학교 교원 채용 사이트',
    summary: '교원 채용 지원 사이트 퍼블리싱.',
    roles: ['퍼블리싱', '대학'],
    links: [{ label: '사이트 보기', href: 'https://ipp.gachon.ac.kr/pool/index.do' }],
    images: img('gachon', '가천대학교 교원 채용 사이트', ['pc']),
  },
  {
    id: 'samsung',
    title: '삼성서울병원 eIRB',
    summary: '기관윤리심의위원회 사이트 메인과 서브 화면 퍼블리싱.',
    roles: ['퍼블리싱', '의료'],
    images: img('samsung', '삼성서울병원 eIRB', ['pc', 'pc2', 'pc3']),
  },
  {
    id: 'ddck',
    title: '디디치킨',
    summary: '브랜드 사이트 반응형 퍼블리싱.',
    roles: ['퍼블리싱', '반응형', '프랜차이즈'],
    links: [{ label: '사이트 보기', href: 'http://www.ddck.co.kr/' }],
    images: img('ddck', '디디치킨', ['pc', 'mobile']),
  },
  {
    id: 'manoffin',
    title: '마노핀',
    summary: '브랜드 사이트 반응형 퍼블리싱.',
    roles: ['퍼블리싱', '반응형', '프랜차이즈'],
    links: [{ label: '사이트 보기', href: 'http://www.manoffin.co.kr/main.jsp' }],
    images: img('manoffin', '마노핀', ['pc', 'mobile']),
  },
  {
    id: 'goobne',
    title: '굽네치킨 온라인 주문',
    summary: '온라인 주문 사이트 퍼블리싱, PC와 모바일 화면 제작.',
    roles: ['퍼블리싱', '주문 시스템', '프랜차이즈'],
    links: [{ label: '사이트 보기', href: 'https://order.goobne.co.kr:8481/login/login.aspx' }],
    images: img('goobne', '굽네치킨 온라인 주문', ['pc', 'mobile']),
  },
]

// 화면 이미지가 없는 그 밖의 작업 (이력서 경력기술서·주요 project 내역 기준)
export const otherWorkProjects: WorkProject[] = [
  {
    id: 'gs-cert',
    year: '2026',
    title: 'CUBE-i Works v1.0 GS인증 1등급',
    client: '유큐브',
    summary:
      '소프트웨어 품질 테스트와 결함 조치를 주도해 GS인증 1등급 획득. 제품 매뉴얼, 점검 체크리스트, 결함 조치 보고서 등 심사 산출물 작성을 총괄하고 프로그램 저작권 등록까지 완료',
    roles: ['QA', 'GS인증', '산출물'],
  },
  {
    id: 'procurement',
    year: '2026',
    title: '조달청 디지털서비스몰 등록',
    client: '유큐브',
    summary: '공공조달 카탈로그 등록을 맡아 서비스 규격서, 제품 브로셔, 라이선스 과금 모델을 정의하고 관련 문서를 구축',
    roles: ['공공조달', '문서화'],
  },
  {
    id: 'accessibility',
    title: '공공·기업 웹 접근성 개선',
    summary: '지방법원 홈페이지 웹 접근성 개선 3단계 사업, LG.com 웹 접근성 작업과 마이크로사이트 QA',
    roles: ['웹접근성', 'QA'],
  },
  {
    id: 'public-systems',
    title: '공공 업무 시스템 구축',
    summary: '중소기업지원사업 통합관리시스템 구축, 지능형 업무관리 플랫폼 구축 사업 퍼블리싱',
    roles: ['퍼블리싱', '공공'],
  },
  {
    id: 'service-sites',
    title: '레이지몬스트, 아이라이크엘엠 등 서비스 사이트',
    summary: 'React·Vue 프로젝트 안에서 컴포넌트 마크업과 반응형 퍼블리싱. 레저메타버스, 더문엔터 사이트 포함',
    roles: ['React', 'Vue', '컴포넌트 마크업'],
  },
  {
    id: 'universities',
    title: '대학 포털과 역량관리 시스템',
    summary: '국민대학교 포털, 건국대·서울과기대·한국산업기술대·인천대 역량관리 사이트 퍼블리싱',
    roles: ['퍼블리싱', '대학 포털'],
  },
  {
    id: 'franchise',
    title: '프랜차이즈 사이트 유지보수',
    summary: '미스터피자, 피자알볼로, 티바두마리치킨, 페리카나, 피자헛 모바일, 버거킹 모바일 유지보수와 피자헤븐 사이트 제작',
    roles: ['유지보수', '모바일', '프랜차이즈'],
  },
]

export const sideProjects: SideProject[] = [
  {
    id: 'portfolio',
    title: '포트폴리오 사이트',
    summary: '지금 보고 계신 사이트입니다. React와 TypeScript, FSD 아키텍처로 구조를 나눴습니다.',
    stack: ['React', 'TypeScript', 'FSD', 'Vite'],
    aiNote: 'Claude Code로 구조와 화면 초안을 만들고, 내용과 접근성, 디자인은 직접 검수했습니다.',
    thumbnail: '/images/projects/portfolio.jpg',
    repo: 'https://github.com/pmsmbc/pmsmbc.github.io',
  },
  {
    id: 'nowyeogi',
    title: '지금 여기는 (nowyeogi.com)',
    summary: '처음 가는 도시의 숙소, 맛집, 관광 정보를 정리하는 여행 정보 블로그. 한국어·영어·일본어를 지원합니다.',
    stack: ['Astro', 'TypeScript', 'i18n', 'GitHub Actions'],
    // TODO: 실제로 AI를 어떻게 썼는지에 맞게 고쳐 주세요.
    aiNote: '메모 파일을 넣으면 글과 반응형 이미지가 만들어지는 작업 흐름을 AI와 함께 자동화했습니다.',
    thumbnail: '/images/projects/nowyeogi.jpg',
    link: 'https://nowyeogi.com',
  },
]
