# Zerorder Website

Zerorder 웹사이트 - 영아 사경 재활 솔루션 '도리도리' 소개 사이트

## 기술 스택

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Icons**: Lucide React

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
├── app/                    # Next.js App Router
│   ├── layout.tsx          # 루트 레이아웃
│   ├── page.tsx            # 홈 페이지
│   ├── team/               # 팀 페이지
│   ├── contact/            # 연락처 페이지
│   └── globals.css         # 전역 스타일
├── components/             # React 컴포넌트
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── ui/                 # UI 컴포넌트
├── public/                  # 정적 파일
│   └── images/            # 이미지 에셋
└── lib/                    # 유틸리티 함수
```

## 주요 기능

- 반응형 디자인
- SEO 최적화
- 빠른 페이지 로딩
- 모던한 UI/UX

## 라이선스

MIT
