import type { Metadata } from "next";

const faqKeywords = [
  "근성사경",
  "자세성사경",
  "사경사두",
  "사두증",
  "사경운동",
  "사경재활",
  "두상 비대칭",
  "왼쪽사경",
  "오른쪽사경",
  "아기 고개 기울어짐",
  "아기 한쪽만 봄",
  "아기발달",
  "아기건강",
  "신생아건강",
  "소아재활",
  "영유아재활",
  "아기재활",
  "소아물리치료",
];

const faqDescription =
  "근성사경, 자세성사경, 사경사두, 사두증, 두상 비대칭 등 보호자가 자주 찾는 정보와 바로도리 문의 안내를 확인하세요.";

export const metadata: Metadata = {
  title: "FAQ 및 문의 | 사경사두 · 사두증 정보",
  description: faqDescription,
  keywords: faqKeywords,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://zerorder.kr/contact",
    siteName: "제로더",
    title: "FAQ 및 문의 | 사경사두 · 사두증 정보",
    description: faqDescription,
    images: [
      {
        url: "/images/contact-connection.jpg",
        width: 1200,
        height: 630,
        alt: "바로도리 FAQ 및 문의",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ 및 문의 | 사경사두 · 사두증 정보",
    description: faqDescription,
    images: ["/images/contact-connection.jpg"],
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
