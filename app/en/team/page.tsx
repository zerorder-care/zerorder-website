import { Mail, Linkedin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * English Team Page
 */

interface TeamMember {
  id: number;
  name: string;
  englishName: string;
  role: string;
  team?: string;
  bio: string;
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
    bio: "Leading Zerorder to realize our vision of solving infant torticollis.",
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
    bio: "Designing intuitive, user-centered experiences for DoriDori.",
    image: "/images/team/Zerorder_Theo.JPG",
    email: "theo@zerorder.kr",
    linkedin: "https://www.linkedin.com/in/aum-taeyun-엄태윤-2aa420256",
  },
  {
    id: 3,
    name: "송고은",
    englishName: "Liv",
    role: "UI/UX Designer",
    bio: "Creating warm, accessible designs that serve both parents and babies.",
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
    bio: "Leading Zerorder Tech Team to build a solid technical foundation.",
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
    bio: "Developing core features of DoriDori to enhance user experience.",
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
    bio: "Building robust and scalable software solutions.",
    image: "/images/team/Zerorder_Max.JPG",
    email: "max@zerorder.kr",
    linkedin: "https://www.linkedin.com/in/jinwoohan0122",
  },
];

export default function TeamEN() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header locale="en" />

      <main className="flex-1">
        {/* Page Header */}
        <section className="section-padding bg-gradient-to-b from-primary/5 to-white border-b border-border">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              Our Team
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A team of experts bridging medicine and technology to protect your baby&apos;s health
            </p>
          </div>
        </section>

        {/* Team Introduction */}
        <section className="section-padding bg-white">
          <div className="container mx-auto max-w-3xl">
            <div className="text-center mb-16">
              <h2 className="section-title">Meet the Zerorder Team</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team brings together medical professionals, software engineers, and designers working to solve the infant torticollis problem.
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
                  {/* Member Photo */}
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={`${member.englishName} (${member.name})`}
                        className={`w-full h-full ${member.imagePosition === "contain" ? "object-contain p-4" : "object-cover"}`}
                        style={member.imagePosition && member.imagePosition !== "contain" ? { objectPosition: member.imagePosition } : undefined}
                      />
                    ) : (
                      <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-3xl font-bold">
                        {member.englishName.charAt(0)}
                      </div>
                    )}
                  </div>

                  {/* Member Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {member.englishName}
                      <span className="text-muted-foreground font-normal text-base ml-2">
                        {member.name}
                      </span>
                    </h3>
                    <p className="text-primary font-semibold text-sm mb-2">
                      {member.team && <span className="text-muted-foreground">{member.team} · </span>}
                      {member.role}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {member.bio}
                    </p>

                    {/* Social Links */}
                    <div className="flex gap-3">
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
                <h3 className="text-3xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To make effective and affordable treatment accessible to every infant with torticollis
                </p>
              </div>

              {/* Vision */}
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Protecting infant health worldwide through AI-powered medical technology
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="section-padding bg-gradient-to-b from-white to-card">
          <div className="container mx-auto">
            <h2 className="section-title text-center">Our Core Values</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                {
                  title: "Reliability",
                  description: "Science-based solutions developed in collaboration with medical professionals",
                },
                {
                  title: "Accessibility",
                  description: "Affordable pricing and user-friendly design for every family",
                },
                {
                  title: "Innovation",
                  description: "Continuous improvement leveraging the latest AI technology",
                },
                {
                  title: "Transparency",
                  description: "Clear communication of treatment processes and outcomes",
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

      <Footer locale="en" />
    </div>
  );
}
