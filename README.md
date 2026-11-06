# 박진우 포트폴리오

https://pmsmbc.github.io/

React + TypeScript + Vite, Feature-Sliced Design(FSD) 구조.

```bash
npm install
npm run dev     # 개발 서버
npm run build   # 배포용 빌드 (dist/)
```

## 내용 수정 위치

| 바꿀 내용 | 파일 |
|---|---|
| 이름, 이메일, 외부 링크, 메뉴 | `src/shared/config/site.ts` |
| 경력, 교육 | `src/entities/career/model/data.ts` |
| 기술 스택 | `src/entities/skill/model/data.ts` |
| 실무 작업, 개인 프로젝트 | `src/entities/project/model/data.ts` |
| AI 활용 단계, 성과 수치, 원칙 | `src/widgets/ai-workflow/model/content.ts` |
| 실무 작업 화면 이미지 | `public/images/work/` (`{id}-pc.jpg`, `{id}-m.jpg`) |
| 첫 화면 작업 기록 | `src/widgets/hero/ui/WorkLog.tsx` |
| 색상, 글꼴 | `src/app/styles/tokens.css` |

`TODO` 주석이 붙은 곳은 모두 임시 내용입니다.

## FSD 구조

```
src/
  app/        진입점, 전역 스타일, 디자인 토큰
  pages/      home (섹션 조합)
  widgets/    header, hero, about, ai-workflow, work-list, project-grid, contact, footer
  features/   theme-toggle, copy-email, scroll-to-top
  entities/   career, skill, project (타입, 데이터, 표시 컴포넌트)
  shared/     ui(Container, Section, Tag, ButtonLink), lib(hooks), config
```

상위 레이어는 하위 레이어만 가져다 쓰고, 각 슬라이스는 `index.ts`로만 외부에 공개합니다.

## 배포

`main` 브랜치에 push 하면 GitHub Actions(`.github/workflows/deploy.yml`)가 린트와 빌드를 거쳐 GitHub Pages에 자동 배포합니다.
