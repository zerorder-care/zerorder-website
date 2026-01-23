import { ArrowRight, CheckCircle, Users, Zap, Brain } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Home Page
 * Design: Modern Medical Minimalism
 * - Hero section with warm imagery
 * - Problem-solution narrative
 * - Feature showcase with illustrations
 * - User journey visualization
 * - Clear CTAs throughout
 */

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/hero-baby-parent.jpg"
              alt="Baby and parent care"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
                영아 사경,{" "}
                <span className="gradient-text">집에서 치료하세요</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                도리도리는 부모와 아기를 위한 AI 기반 영아 사경 재활 솔루션입니다. 비싼 물리치료나 헬멧 없이 집에서 효과적으로 치료할 수 있습니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="button-primary flex items-center justify-center gap-2">
                  앱 다운로드
                  <ArrowRight className="w-5 h-5" />
                </button>
                <a href="#about" className="button-outline flex items-center justify-center gap-2">
                  자세히 알아보기
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section id="about" className="section-padding bg-white">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <h2 className="section-title text-center">
                영아 사경, 정말 심각한 문제인가요?
              </h2>
              <p className="section-subtitle text-center">
                저출산 현상에도 불구하고, 사경에 대한 인지도가 높아지면서 환자 수는 계속 증가하고 있습니다.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {/* Stat Card 1 */}
                <div className="bg-card p-8 rounded-2xl border border-border hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl font-bold text-primary mb-2">20%</div>
                  <p className="text-muted-foreground">
                    10년 전 대비 환자 수 증가율
                  </p>
                </div>

                {/* Stat Card 2 */}
                <div className="bg-card p-8 rounded-2xl border border-border hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl font-bold text-secondary mb-2">3-4개월</div>
                  <p className="text-muted-foreground">
                    치료 시작 권장 시기
                  </p>
                </div>

                {/* Stat Card 3 */}
                <div className="bg-card p-8 rounded-2xl border border-border hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl font-bold text-accent mb-2">100%</div>
                  <p className="text-muted-foreground">
                    가정 내 치료 가능
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-secondary/10 to-accent/10 p-8 rounded-2xl border border-secondary/20">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  현재의 문제점
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <span className="text-foreground">
                      고가의 치료용 헬멧은 임상 결과가 입증되지 않았음에도 불구하고 공포 마케팅으로 비싼 가격에 판매 중
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <span className="text-foreground">
                      부모들의 경제적 부담과 치료 효과에 대한 불안감 증가
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <span className="text-foreground">
                      신뢰할 수 있는 정보와 전문가 상담의 부족
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="section-padding bg-gradient-to-b from-white to-card">
          <div className="container mx-auto">
            <h2 className="section-title text-center">
              도리도리의 3가지 핵심 기능
            </h2>
            <p className="section-subtitle text-center">
              과학 기반의 솔루션으로 아기의 건강을 지킵니다
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Feature 1 */}
              <div className="bg-white p-8 rounded-2xl border border-border hover:shadow-lg transition-all duration-300 card-hover">
                <div className="mb-6 overflow-hidden rounded-xl h-48">
                  <img
                    src="/images/feature-stretching.jpg"
                    alt="Stretching exercises"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  가정 내 간편 스트레칭
                </h3>
                <p className="text-muted-foreground mb-4">
                  생후 3-4개월 이내 집에서 쉽게 따라할 수 있는 스트레칭 프로그램으로 효과적인 치료를 시작하세요.
                </p>
                <div className="flex items-center gap-2 text-primary font-semibold">
                  <Zap className="w-5 h-5" />
                  <span>효과적이고 간편함</span>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="bg-white p-8 rounded-2xl border border-border hover:shadow-lg transition-all duration-300 card-hover">
                <div className="mb-6 overflow-hidden rounded-xl h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Brain className="w-24 h-24 text-primary/50" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  AI 기반 정확한 측정
                </h3>
                <p className="text-muted-foreground mb-4">
                  스마트폰 카메라로 아기의 머리 모양과 고개 기울기를 정확하게 측정하고 실시간으로 추적합니다.
                </p>
                <div className="flex items-center gap-2 text-primary font-semibold">
                  <Brain className="w-5 h-5" />
                  <span>기술 기반 분석</span>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="bg-white p-8 rounded-2xl border border-border hover:shadow-lg transition-all duration-300 card-hover">
                <div className="mb-6 overflow-hidden rounded-xl h-48">
                  <img
                    src="/images/feature-community.jpg"
                    alt="Community connection"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  커뮤니티 & 정보 공유
                </h3>
                <p className="text-muted-foreground mb-4">
                  보호자들과 경험을 공유하고 RAG 기반 챗봇으로 개인화된 정보를 받으세요.
                </p>
                <div className="flex items-center gap-2 text-primary font-semibold">
                  <Users className="w-5 h-5" />
                  <span>함께 성장하기</span>
                </div>
              </div>
            </div>

            {/* Technology Section */}
            <div className="bg-white rounded-2xl overflow-hidden border border-border">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-foreground mb-6">
                    기술로 만드는 더 나은 치료
                  </h3>
                  <p className="text-lg text-muted-foreground mb-8">
                    도리도리는 최신 AI 기술과 의료 전문 지식을 결합하여 아기의 사경 치료를 혁신합니다.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground">AI 기반 머리 모양 분석</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground">개인화된 치료 프로그램</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground">의료 전문가와 협력</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground">실시간 진행 추적</span>
                    </li>
                  </ul>
                </div>
                <div className="h-96 md:h-auto">
                  <img
                    src="/images/about-technology.jpg"
                    alt="Technology innovation"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* User Journey Section */}
        <section className="section-padding bg-white">
          <div className="container mx-auto">
            <h2 className="section-title text-center">
              도리도리와 함께하는 치료 여정
            </h2>
            <p className="section-subtitle text-center">
              진단부터 회복까지, 모든 단계에서 함께합니다
            </p>

            <div className="max-w-4xl mx-auto">
              {/* Timeline */}
              <div className="space-y-8">
                {[
                  {
                    step: 1,
                    title: "진단",
                    description: "병원에서 사경 진단 받기",
                  },
                  {
                    step: 2,
                    title: "온보딩",
                    description: "도리도리 앱 설치 및 초기 설정",
                  },
                  {
                    step: 3,
                    title: "맞춤형 프로그램",
                    description: "AI가 추천하는 스트레칭 프로그램 시작",
                  },
                  {
                    step: 4,
                    title: "진행 추적",
                    description: "매주 아기의 진행 상황 측정 및 피드백",
                  },
                  {
                    step: 5,
                    title: "커뮤니티",
                    description: "다른 부모들과 경험 공유",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                        {item.step}
                      </div>
                      {index < 4 && (
                        <div className="w-1 h-16 bg-gradient-to-b from-primary to-accent mt-2"></div>
                      )}
                    </div>
                    <div className="pb-8">
                      <h4 className="text-xl font-bold text-foreground mb-2">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="download" className="section-padding bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="section-title">
                지금 바로 시작하세요
              </h2>
              <p className="section-subtitle">
                도리도리와 함께 아기의 건강한 성장을 응원합니다
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="button-primary flex items-center justify-center gap-2">
                  앱 다운로드
                  <ArrowRight className="w-5 h-5" />
                </button>
                <a href="/contact" className="button-outline flex items-center justify-center gap-2">
                  문의하기
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
