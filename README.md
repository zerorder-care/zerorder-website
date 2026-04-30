# Zerorder Website

Zerorder 웹사이트 - 영아 사경 재활 솔루션 '바로도리' 소개 사이트

## 기술 스택

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Analytics**: Vercel Analytics
- **Theme**: next-themes

## 시작하기

### 설치

```bash
pnpm install
```

### 개발 서버 실행

```bash
pnpm dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 빌드

```bash
pnpm build
```

### 프로덕션 실행

```bash
pnpm start
```

## 프로젝트 구조

```
zerorder-website/
├── app/                      # Next.js App Router
│   ├── layout.tsx            # 루트 레이아웃 (Analytics 포함)
│   ├── page.tsx              # 홈 페이지
│   ├── not-found.tsx         # 404 페이지
│   ├── globals.css           # 전역 스타일
│   ├── team/
│   │   └── page.tsx          # 팀 소개 페이지
│   └── contact/
│       └── page.tsx          # 연락처 & FAQ 페이지
├── components/               # React 컴포넌트
│   ├── Header.tsx            # 네비게이션 헤더
│   ├── Footer.tsx            # 푸터
│   ├── ThemeProvider.tsx     # 테마 프로바이더
│   └── ui/                   # UI 컴포넌트 (Radix 기반)
│       ├── sonner.tsx        # 토스트 알림
│       └── tooltip.tsx       # 툴팁
├── lib/                      # 유틸리티 함수
│   └── utils.ts              # 공통 유틸리티 (cn 함수 등)
├── public/                   # 정적 파일
│   └── images/               # 이미지 에셋
│       └── team/             # 팀원 프로필 이미지
├── shared/                   # 공유 상수
│   └── const.ts
├── content.md                # 콘텐츠 기획 문서
├── next.config.js            # Next.js 설정
├── tailwind.config.js        # Tailwind CSS 설정
├── postcss.config.js         # PostCSS 설정
└── tsconfig.json             # TypeScript 설정
```

## 페이지

| 경로 | 설명 |
|------|------|
| `/` | 홈 - 서비스 소개, 주요 기능, CTA |
| `/team` | 팀 소개 - 팀원 프로필 |
| `/contact` | 연락처 - 이메일, LinkedIn, 주소, FAQ |

## 주요 기능

- 반응형 디자인 (모바일/태블릿/데스크톱)
- SEO 최적화
- Vercel Analytics 통합
- 빠른 페이지 로딩 (Next.js 최적화)
- 모던한 UI/UX

## 배포

Vercel에 자동 배포됩니다. `main` 브랜치에 푸시하면 프로덕션에 반영됩니다.

## 라이선스

MIT
