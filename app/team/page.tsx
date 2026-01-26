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

interface CareerItem {
  company: string;
  period: string;
}

interface TeamMember {
  id: number;
  name: string;
  englishName: string;
  role: string;
  team?: string;
  bio: string;
  career?: CareerItem[];
  image?: string;
  imagePosition?: string;
  email: string;
  linkedin?: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "심예준",
    englishName: "David",
    role: "CEO",
    bio: "Zerorder를 이끌며 영아 사경 문제 해결을 위한 비전을 실현합니다.",
    career: [
      { company: "Zerorder", period: "2023.09 - 현재" },
      { company: "Samsung Medison", period: "2021.05 - 2021.09" },
      { company: "Johnson & Johnson (CERENOVUS)", period: "2019.01 - 2021.02" },
      { company: "CJ CheilJedang", period: "2013.12 - 2017.12" },
    ],
    image: "/images/team/Zerorder_David.png",
    imagePosition: "center 30%",
    email: "ceo@zerorder.kr",
    linkedin: "https://www.linkedin.com/in/yejoonsim",
  },
  {
    id: 2,
    name: "엄태윤",
    englishName: "Theo",
    role: "UI/UX Designer",
    bio: "사용자 중심의 직관적인 디자인으로 도리도리의 경험을 설계합니다.",
    image: "/images/team/Zerorder_Theo.JPG",
    email: "theo@zerorder.kr",
    linkedin: "https://www.linkedin.com/in/aum-taeyun-엄태윤-2aa420256",
  },
  {
    id: 3,
    name: "송고은",
    englishName: "Liv",
    role: "UI/UX Designer",
    bio: "따뜻하고 접근성 높은 디자인으로 부모와 아기 모두를 위한 경험을 만듭니다.",
    image: "/images/team/placeholder-user.png",
    imagePosition: "contain",
    email: "liv@zerorder.kr",
    linkedin: "#",
  },
  {
    id: 4,
    name: "김진욱",
    englishName: "Louis",
    role: "Tech Lead",
    team: "Tech Team",
    bio: "Zerorder Tech Team을 이끌며 안정적인 기술 기반을 구축합니다.",
    image: "/images/team/Zerorder_Lois.JPG",
    email: "louis@zerorder.kr",
    linkedin: "https://www.linkedin.com/in/glazedbream",
  },
  {
    id: 5,
    name: "윤유상",
    englishName: "Bob",
    role: "Software Engineer",
    team: "Tech Team",
    bio: "도리도리의 핵심 기능을 개발하며 사용자 경험을 향상시킵니다.",
    image: "/images/team/Zerorder_Bob.JPG",
    email: "bob@zerorder.kr",
    linkedin: "https://www.linkedin.com/in/yoosang-yoon-04945427a/",
  },
  {
    id: 6,
    name: "한진우",
    englishName: "Max",
    role: "Software Engineer",
    team: "Tech Team",
    bio: "견고하고 확장 가능한 소프트웨어를 개발합니다.",
    image: "/images/team/Zerorder_Max.JPG",
    email: "max@zerorder.kr",
    linkedin: "https://www.linkedin.com/in/jinwoohan0122",
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
                소프트웨어 엔지니어, 디자이너 등 다양한 분야의 전문가들이 함께 일하고 있습니다. 우리는 영아 사경 문제를 해결하기 위해 최선을 다하고 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* Team Members Grid */}
        {/* 
          [디자인 옵션 메모]
          
          옵션 1: CEO 별도 섹션 분리
          - CEO를 팀 소개 바로 아래에 별도로 크게 표시
          - 좌측에 사진, 우측에 정보 + 경력 (가로 레이아웃)
          - 나머지 팀원들은 동일한 카드 그리드로 표시
          - 구현: teamMembers를 CEO와 나머지로 분리하여 두 섹션으로 렌더링
          
          옵션 4: 매거진 스타일 2열 레이아웃
          - CEO를 좌측에 크게 (전체 높이 차지)
          - 나머지 팀원들을 우측에 2x3 또는 3x2 그리드로 배치
          - CSS Grid의 grid-row-span 활용
        */}
        <section className="section-padding bg-card">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 card-hover flex flex-col"
                >
                  {/* Member Photo */}
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={`${member.name} (${member.englishName})`}
                        className={`w-full h-full ${member.imagePosition === "contain" ? "object-contain p-4" : "object-cover"}`}
                        style={member.imagePosition && member.imagePosition !== "contain" ? { objectPosition: member.imagePosition } : undefined}
                      />
                    ) : (
                      <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-3xl font-bold">
                        {member.name.charAt(0)}
                      </div>
                    )}
                  </div>

                  {/* Member Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {member.name}
                      <span className="text-muted-foreground font-normal text-base ml-2">
                        {member.englishName}
                      </span>
                    </h3>
                    <p className="text-primary font-semibold text-sm mb-2">
                      {member.team && <span className="text-muted-foreground">{member.team} · </span>}
                      {member.role}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {member.bio}
                    </p>

                    {/* Career History - hover 시에만 표시 */}
                    {member.career && (
                      <div className="mb-4 max-h-0 overflow-hidden opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                        <p className="text-xs font-semibold text-foreground mb-2">경력</p>
                        <ul className="space-y-1">
                          {member.career.map((item, idx) => (
                            <li key={idx} className="text-xs text-muted-foreground">
                              <span className="font-medium">{item.company}</span>
                              <span className="block text-[10px] opacity-70">{item.period}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Social Links */}
                    <div className="flex gap-3 pt-2">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                          aria-label="LinkedIn"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                      <a
                        href={`mailto:${member.email}`}
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
                  description: "과학적 연구에 기반한 솔루션 제공",
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

      </main>

      <Footer />
    </div>
  );
}
