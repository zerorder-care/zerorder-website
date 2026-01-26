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

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-8">
        {/* Copyright */}
        <p className="text-muted-foreground text-sm font-medium mb-4">
          © {currentYear} Zerorder. All rights reserved.
        </p>

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
