import Link from "next/link";

/**
 * Footer Component
 * Design: Modern Medical Minimalism
 * - Clean footer with company info and links
 * - Responsive layout
 */

interface FooterProps {
  locale?: "ko" | "en";
}

export default function Footer({ locale = "ko" }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const basePath = locale === "en" ? "/en" : "";

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-8">
        {/* Copyright */}
        <p className="text-muted-foreground text-sm font-medium mb-4">
          © {currentYear} Zerorder. All rights reserved.
        </p>

        {/* Legal Links */}
        <div className="flex flex-wrap gap-4 mb-4 text-sm">
          <Link
            href={`${basePath}/privacy`}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            {locale === "ko" ? "개인정보처리방침" : "Privacy Policy"}
          </Link>
          <span className="text-muted-foreground">|</span>
          <Link
            href={`${basePath}/terms`}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            {locale === "ko" ? "이용약관" : "Terms of Service"}
          </Link>
        </div>

        {/* Company Legal Info */}
        <div className="text-muted-foreground text-xs leading-relaxed opacity-70">
          {locale === "ko" ? (
            <>
              <p>
                (주)제로더 | 서울 동대문구 회기로 117-3 서울바이오허브 산업지원동 | 대표자 : 심예준
              </p>
              <p className="mt-1">
                사업자등록번호 764-88-02890 | 통신판매업신고번호 2024-서울동대문-2011
              </p>
            </>
          ) : (
            <>
              <p>
                Zerorder Inc. | Seoul Bio Hub, 117-3 Hoegi-ro, Dongdaemun-gu, Seoul, Korea | CEO: Yejoon Sim
              </p>
              <p className="mt-1">
                Business Registration No. 764-88-02890
              </p>
            </>
          )}
        </div>
      </div>
    </footer>
  );
}
