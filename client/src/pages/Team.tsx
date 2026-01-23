import { Mail, Linkedin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Team Page
 * Design: Modern Medical Minimalism
 * - Team member cards with professional layout
 * - Mission and values showcase
 * - Recruitment section
 */

interface TeamMember {
  id: number;
  name: string;
  role: string;
  expertise: string;
  bio: string;
  linkedin?: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "김준호",
    role: "CEO & Founder",
    expertise: "의료 기술, 사업 전략",
    bio: "의료 배경의 기업가로서 영아 사경 문제 해결을 위해 Zerorder를 창립했습니다.",
    linkedin: "#",
  },
  {
    id: 2,
    name: "이소연",
    role: "CTO",
    expertise: "소프트웨어 엔지니어링, AI/ML",
    bio: "10년 이상의 소프트웨어 개발 경험으로 도리도리의 기술 기반을 구축했습니다.",
    linkedin: "#",
  },
  {
    id: 3,
    name: "박의준",
    role: "Medical Advisor",
    expertise: "소아과, 임상 연구",
    bio: "대학병원 소아과 전문의로서 도리도리의 의료 신뢰성을 보장합니다.",
    linkedin: "#",
  },
  {
    id: 4,
    name: "정민준",
    role: "AI/ML Engineer",
    expertise: "머신러닝, 컴퓨터 비전",
    bio: "컴퓨터 비전 기술로 아기의 머리 모양을 정확하게 분석합니다.",
    linkedin: "#",
  },
  {
    id: 5,
    name: "최지은",
    role: "Product Manager",
    expertise: "제품 관리, 사용자 경험",
    bio: "부모들의 니즈를 중심으로 도리도리의 제품을 지속적으로 개선합니다.",
    linkedin: "#",
  },
  {
    id: 6,
    name: "이현지",
    role: "UI/UX Designer",
    expertise: "디자인, 사용성",
    bio: "따뜻하고 직관적인 디자인으로 사용자 경험을 최우선으로 합니다.",
    linkedin: "#",
  },
];

export default function Team() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="section-padding bg-gradient-to-b from-primary/5 to-white border-b border-border">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              우리 팀
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              의료와 기술을 연결하는 전문가들이 함께 아기의 건강을 지킵니다
            </p>
          </div>
        </section>

        {/* Team Introduction */}
        <section className="section-padding bg-white">
          <div className="container mx-auto max-w-3xl">
            <div className="text-center mb-16">
              <h2 className="section-title">Zerorder 팀을 만나보세요</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                의료 전문가, 소프트웨어 엔지니어, 디자이너 등 다양한 분야의 전문가들이 함께 일하고 있습니다. 우리는 영아 사경 문제를 해결하기 위해 최선을 다하고 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* Team Members Grid */}
        <section className="section-padding bg-card">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 card-hover"
                >
                  {/* Avatar Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-3xl font-bold">
                      {member.name.charAt(0)}
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary font-semibold text-sm mb-2">
                      {member.role}
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      {member.expertise}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {member.bio}
                    </p>

                    {/* Social Links */}
                    <div className="flex gap-3">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                          aria-label="LinkedIn"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                      <a
                        href="#"
                        className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                        aria-label="Email"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="section-padding bg-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Mission */}
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-4">우리의 미션</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  모든 영아 사경 환자가 효과적이고 경제적인 치료를 받을 수 있는 세상을 만들기
                </p>
              </div>

              {/* Vision */}
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-4">우리의 비전</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  AI 기반 의료 기술로 전 세계 아기들의 건강을 지키기
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="section-padding bg-gradient-to-b from-white to-card">
          <div className="container mx-auto">
            <h2 className="section-title text-center">우리의 핵심 가치</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                {
                  title: "신뢰성",
                  description: "의료 전문가와 협력하여 과학 기반의 솔루션 제공",
                },
                {
                  title: "접근성",
                  description: "모든 가정에서 쉽게 접근할 수 있는 가격과 사용성",
                },
                {
                  title: "혁신",
                  description: "최신 AI 기술을 활용한 지속적인 개선",
                },
                {
                  title: "투명성",
                  description: "치료 과정과 결과를 명확하게 공개",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl border border-border hover:shadow-lg transition-all duration-300"
                >
                  <h4 className="text-xl font-bold text-primary mb-3">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recruitment */}
        <section className="section-padding bg-white">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="section-title">함께 일할 인재를 찾고 있습니다</h2>
            <p className="section-subtitle">
              Zerorder와 함께 영아 사경 문제를 해결하고 싶으신 분들을 기다립니다
            </p>

            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-12 rounded-2xl border border-primary/20 mb-8">
              <p className="text-lg text-foreground mb-6">
                현재 채용 공고는 준비 중입니다. 관심이 있으신 분은 아래 이메일로 연락주세요.
              </p>
              <a
                href="mailto:careers@zerorder.com"
                className="inline-flex items-center gap-2 button-primary"
              >
                <Mail className="w-5 h-5" />
                careers@zerorder.com
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
