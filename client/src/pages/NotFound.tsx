import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * NotFound Page (404)
 * Design: Modern Medical Minimalism
 * - Clean 404 error page
 * - Navigation back to home
 */

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 flex items-center justify-center section-padding">
        <div className="container mx-auto text-center max-w-2xl">
          <div className="mb-8">
            <div className="text-8xl font-bold text-primary mb-4">404</div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              페이지를 찾을 수 없습니다
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              죄송합니다. 찾으시는 페이지가 존재하지 않습니다. 홈페이지로 돌아가세요.
            </p>
          </div>

          <Link href="/">
            <a className="inline-flex items-center gap-2 button-primary">
              <ArrowLeft className="w-5 h-5" />
              홈으로 돌아가기
            </a>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
