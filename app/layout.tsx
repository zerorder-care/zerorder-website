import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://zerorder.kr'),
  title: {
    default: "Zerorder - Infant Torticollis Rehabilitation Solution",
    template: "%s | Zerorder"
  },
  description: "바로도리는 부모와 아기를 위한 AI 기반 영아 사경 재활 솔루션입니다",
  keywords: [
    "제로더",
    "Zerorder",
    "사경",
    "영아 사경",
    "사경 치료",
    "사경 재활",
    "torticollis",
    "infant torticollis",
    "torticollis treatment",
    "사경 운동",
    "사경 스트레칭",
    "AI 사경 분석",
    "홈케어",
    "재활 프로그램",
    "아기 사경",
    "신생아 사경"
  ],
  authors: [{ name: "Zerorder Co., Ltd." }],
  creator: "Zerorder Co., Ltd.",
  publisher: "Zerorder Co., Ltd.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://zerorder.kr",
    siteName: "제로더",
    title: "제로더 - 영아 사경 재활 솔루션 | AI 기반 사경 치료 지원",
    description: "AI 기술을 활용한 영아 사경 재활 솔루션. 집에서 편하게 사경 치료를 시작하고, 전문적인 재활 프로그램으로 아기의 건강을 지키세요.",
    images: [
      {
        url: "/images/hero-baby-parent.jpg",
        width: 1200,
        height: 630,
        alt: "제로더 - 영아 사경 재활 솔루션",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "제로더 - 영아 사경 재활 솔루션",
    description: "AI 기반 영아 사경 재활 솔루션. 집에서 편하게 사경 치료를 시작하세요.",
    images: ["/images/hero-baby-parent.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code', // Google Search Console에서 받은 코드로 교체
    other: {
      'naver-site-verification': 'naverf67f8a7cacdf210f48a0891040f7bc66',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-body`}>
        <NextThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <TooltipProvider>
            {children}
            <Toaster />
          </TooltipProvider>
        </NextThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
