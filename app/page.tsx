import { ArrowRight, CheckCircle, Users, Zap, Brain } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

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
            <Image
              src="/images/hero-baby-parent.jpg"
              alt="Baby and parent care"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
                영아 사경<br/>
                <span className="gradient-text">저희가 함께해요</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                도리도리는 AI 기반 Home-Based 테라피로 영아 사경 재활을 돕는 솔루션입니다. 의료를 대신하기보다, 집에서 편하게 재활할 수 있도록 돕는 프로덕트를 만들고 있습니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#about" className="button-primary flex items-center justify-center gap-2">
                  자세히 알아보기
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href="/contact" className="button-outline flex items-center justify-center gap-2">
                  문의하기
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
                영아 사경 재활, 집에서 시작할 수 있습니다
              </h2>
              <p className="section-subtitle text-center">
                사경에 대한 인지도가 높아지면서, 집에서도 체계적으로 재활할 수 있는 방법에 대한 관심이 증가하고 있습니다.
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
                    재활 시작 권장 시기
                  </p>
                </div>

                {/* Stat Card 3 */}
                <div className="bg-card p-8 rounded-2xl border border-border hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl font-bold text-accent mb-2">Home</div>
                  <p className="text-muted-foreground">
                    Based 재활 지원
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-secondary/10 to-accent/10 p-8 rounded-2xl border border-secondary/20">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  집에서 재활할 때의 어려움
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <span className="text-foreground">
                      집에서 재활 방법을 찾기 어렵고, 진행 상황을 객관적으로 확인하기 어려움
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <span className="text-foreground">
                      부모들이 집에서 체계적으로 재활을 진행하는 데 필요한 정보와 가이드 부족
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <span className="text-foreground">
                      재활 진행 상황을 정확하게 측정하고 추적할 수 있는 도구의 필요성
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
              AI 기반 Home-Based 테라피의 3가지 핵심
            </h2>
            <p className="section-subtitle text-center">
              AI 기술로 집에서 편하게 재활할 수 있도록 돕는 솔루션입니다
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Feature 1 */}
              <div className="bg-white p-8 rounded-2xl border border-border hover:shadow-lg transition-all duration-300 card-hover">
                <div className="mb-6 overflow-hidden rounded-xl h-48 relative">
                  <Image
                    src="/images/doridori_rehab.png"
                    alt="Stretching exercises"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Home-Based 스트레칭 프로그램
                </h3>
                <p className="text-muted-foreground mb-4">
                  생후 3-4개월 이내 집에서 쉽게 따라할 수 있는 재활 스트레칭 프로그램으로, 편안한 환경에서 재활을 시작할 수 있습니다.
                </p>
                <div className="flex items-center gap-2 text-primary font-semibold">
                  <Zap className="w-5 h-5" />
                  <span>집에서 편하게 재활</span>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="bg-white p-8 rounded-2xl border border-border hover:shadow-lg transition-all duration-300 card-hover">
                <div className="mb-6 overflow-hidden rounded-xl h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Brain className="w-24 h-24 text-primary/50" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  AI 기반 정확한 측정 및 추적
                </h3>
                <p className="text-muted-foreground mb-4">
                  최신 AI 기술로 스마트폰 카메라만으로 아기의 머리 모양과 고개 기울기를 정확하게 측정하고, 재활 진행 상황을 실시간으로 추적합니다.
                </p>
                <div className="flex items-center gap-2 text-primary font-semibold">
                  <Brain className="w-5 h-5" />
                  <span>AI 기술로 정확하게</span>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="bg-white p-8 rounded-2xl border border-border hover:shadow-lg transition-all duration-300 card-hover">
                <div className="mb-6 overflow-hidden rounded-xl h-48 relative">
                  <Image
                    src="/images/feature-community.jpg"
                    alt="Community connection"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  AI 챗봇 & 커뮤니티
                </h3>
                <p className="text-muted-foreground mb-4">
                  AI 기반 RAG 챗봇으로 개인화된 재활 정보를 제공하고, 보호자들과 경험을 공유하며 함께 재활 여정을 이어갑니다.
                </p>
                <div className="flex items-center gap-2 text-primary font-semibold">
                  <Users className="w-5 h-5" />
                  <span>AI와 함께하는 재활</span>
                </div>
              </div>
            </div>

            {/* Technology Section */}
            <div className="bg-white rounded-2xl overflow-hidden border border-border">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-foreground mb-6">
                    AI 기술로 집에서 편하게 재활할 수 있도록
                  </h3>
                  <p className="text-lg text-muted-foreground mb-8">
                    도리도리는 최신 AI 기술을 활용하여 영아 사경 재활을 돕는 프로덕트입니다. 의료를 대신하기보다, 집에서 편하게 재활할 수 있도록 돕는 것이 우리의 목표입니다.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground">AI 기반 머리 모양 및 고개 기울기 분석</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground">AI가 추천하는 개인화된 재활 프로그램</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground">Home-Based 테라피 지원</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground">AI로 실시간 재활 진행 상황 추적</span>
                    </li>
                  </ul>
                </div>
                <div className="h-96 md:h-auto relative">
                  <Image
                    src="/images/about-technology.jpg"
                    alt="Technology innovation"
                    fill
                    className="object-cover"
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
              도리도리와 함께하는 재활 여정
            </h2>
            <p className="section-subtitle text-center">
              집에서 편하게 재활할 수 있도록, 모든 단계에서 함께합니다
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
                    title: "AI 맞춤형 프로그램",
                    description: "AI가 추천하는 Home-Based 재활 프로그램 시작",
                  },
                  {
                    step: 4,
                    title: "AI 진행 추적",
                    description: "AI로 매주 아기의 재활 진행 상황을 측정하고 피드백 제공",
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
        <section id="cta" className="section-padding bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="section-title">
                함께 만들어가요
              </h2>
              <p className="section-subtitle">
                도리도리에 관심이 있으시거나 협업을 원하시면 언제든 연락주세요
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="button-primary flex items-center justify-center gap-2">
                  문의하기
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href="/team" className="button-outline flex items-center justify-center gap-2">
                  팀 소개 보기
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
