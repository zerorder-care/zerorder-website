import { ArrowRight, CheckCircle, Users, Zap, Brain } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

/**
 * English Home Page
 */

export default function HomeEN() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header locale="en" />

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
                Infant Torticollis<br/>
                <span className="gradient-text">We&apos;re Here to Help</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                DoriDori is an AI-powered home-based therapy solution for infant torticollis rehabilitation. We help families manage rehabilitation comfortably at home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#about" className="button-primary flex items-center justify-center gap-2">
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href="/en/contact" className="button-outline flex items-center justify-center gap-2">
                  Contact Us
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
                Home-Based Torticollis Rehabilitation
              </h2>
              <p className="section-subtitle text-center">
                As awareness of infant torticollis grows, more families are seeking effective ways to support rehabilitation at home.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {/* Stat Card 1 */}
                <div className="bg-card p-8 rounded-2xl border border-border hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl font-bold text-primary mb-2">20%</div>
                  <p className="text-muted-foreground">
                    Increase in cases over 10 years
                  </p>
                </div>

                {/* Stat Card 2 */}
                <div className="bg-card p-8 rounded-2xl border border-border hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl font-bold text-secondary mb-2">3-4 mo</div>
                  <p className="text-muted-foreground">
                    Recommended start for therapy
                  </p>
                </div>

                {/* Stat Card 3 */}
                <div className="bg-card p-8 rounded-2xl border border-border hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl font-bold text-accent mb-2">Home</div>
                  <p className="text-muted-foreground">
                    Based rehabilitation support
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-secondary/10 to-accent/10 p-8 rounded-2xl border border-secondary/20">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Challenges of Home Rehabilitation
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <span className="text-foreground">
                      Difficulty finding reliable rehabilitation methods and tracking progress objectively
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <span className="text-foreground">
                      Lack of structured guidance and information for parents managing therapy at home
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <span className="text-foreground">
                      Need for tools that accurately measure and track rehabilitation progress
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
              Three Pillars of AI-Powered Home Therapy
            </h2>
            <p className="section-subtitle text-center">
              Our solution helps families manage rehabilitation comfortably at home with AI technology
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
                  Home-Based Exercise Program
                </h3>
                <p className="text-muted-foreground mb-4">
                  Easy-to-follow rehabilitation exercises designed for infants 3-4 months and older, allowing families to start therapy in a comfortable environment.
                </p>
                <div className="flex items-center gap-2 text-primary font-semibold">
                  <Zap className="w-5 h-5" />
                  <span>Convenient home therapy</span>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="bg-white p-8 rounded-2xl border border-border hover:shadow-lg transition-all duration-300 card-hover">
                <div className="mb-6 overflow-hidden rounded-xl h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Brain className="w-24 h-24 text-primary/50" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  AI-Powered Measurement & Tracking
                </h3>
                <p className="text-muted-foreground mb-4">
                  Using advanced AI, measure head shape and tilt angle with just a smartphone camera, and track rehabilitation progress in real-time.
                </p>
                <div className="flex items-center gap-2 text-primary font-semibold">
                  <Brain className="w-5 h-5" />
                  <span>Precision through AI</span>
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
                  AI Chatbot & Community
                </h3>
                <p className="text-muted-foreground mb-4">
                  Get personalized rehabilitation information through our AI-powered chatbot, and connect with other parents on the same journey.
                </p>
                <div className="flex items-center gap-2 text-primary font-semibold">
                  <Users className="w-5 h-5" />
                  <span>AI-assisted rehabilitation</span>
                </div>
              </div>
            </div>

            {/* Technology Section */}
            <div className="bg-white rounded-2xl overflow-hidden border border-border">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-foreground mb-6">
                    AI Technology for Comfortable Home Rehabilitation
                  </h3>
                  <p className="text-lg text-muted-foreground mb-8">
                    DoriDori leverages cutting-edge AI to support infant torticollis rehabilitation. Our goal is not to replace medical care, but to make home-based therapy more accessible and effective.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground">AI-based head shape and tilt analysis</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground">Personalized rehabilitation programs powered by AI</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground">Home-based therapy support</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground">Real-time progress tracking with AI</span>
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
              Your Journey with DoriDori
            </h2>
            <p className="section-subtitle text-center">
              We support you at every step of the rehabilitation process
            </p>

            <div className="max-w-4xl mx-auto">
              {/* Timeline */}
              <div className="space-y-8">
                {[
                  {
                    step: 1,
                    title: "Diagnosis",
                    description: "Receive torticollis diagnosis from your healthcare provider",
                  },
                  {
                    step: 2,
                    title: "Onboarding",
                    description: "Set up DoriDori and configure initial settings",
                  },
                  {
                    step: 3,
                    title: "Personalized Program",
                    description: "Start AI-recommended home-based rehabilitation program",
                  },
                  {
                    step: 4,
                    title: "Progress Tracking",
                    description: "Weekly AI-powered measurements and feedback on your baby's progress",
                  },
                  {
                    step: 5,
                    title: "Community",
                    description: "Share experiences with other parents",
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
                Let&apos;s Build Together
              </h2>
              <p className="section-subtitle">
                Interested in DoriDori or looking to collaborate? We&apos;d love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/en/contact" className="button-primary flex items-center justify-center gap-2">
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href="/en/team" className="button-outline flex items-center justify-center gap-2">
                  Meet the Team
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer locale="en" />
    </div>
  );
}
