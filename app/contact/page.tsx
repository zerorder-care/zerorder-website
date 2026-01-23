"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, HelpCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Contact Page
 * Design: Modern Medical Minimalism
 * - Contact form with validation
 * - Contact information display
 * - FAQ section
 */

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const faqs = [
    {
      question: "도리도리는 언제부터 사용할 수 있나요?",
      answer: "생후 3-4개월 이내 사용을 권장합니다. 사경 진단을 받은 후 가능한 빨리 시작하는 것이 좋습니다.",
    },
    {
      question: "앱은 어디서 다운로드할 수 있나요?",
      answer: "iOS App Store와 Google Play Store에서 도리도리를 검색하여 다운로드할 수 있습니다.",
    },
    {
      question: "비용은 얼마인가요?",
      answer: "가격 정보는 앱 내에서 확인할 수 있습니다. 무료 체험판도 제공하고 있습니다.",
    },
    {
      question: "의료 전문가의 상담을 받을 수 있나요?",
      answer: "커뮤니티와 RAG 챗봇을 통해 정보를 제공하고 있습니다. 의료 전문가 상담은 별도로 문의하시기 바랍니다.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="section-padding bg-gradient-to-b from-primary/5 to-white border-b border-border">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              연락하기
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              질문이나 제안이 있으신가요? 언제든지 연락주세요.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="section-padding bg-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Email */}
              <div className="bg-card p-8 rounded-2xl border border-border text-center hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  이메일
                </h3>
                <a
                  href="mailto:contact@zerorder.com"
                  className="text-primary hover:underline"
                >
                  contact@zerorder.com
                </a>
              </div>

              {/* Phone */}
              <div className="bg-card p-8 rounded-2xl border border-border text-center hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  전화
                </h3>
                <a
                  href="tel:+82-2-1234-5678"
                  className="text-secondary hover:underline"
                >
                  +82-2-1234-5678
                </a>
              </div>

              {/* Address */}
              <div className="bg-card p-8 rounded-2xl border border-border text-center hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  주소
                </h3>
                <p className="text-muted-foreground">
                  서울시 강남구 테헤란로 123<br />
                  Zerorder 빌딩
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="section-padding bg-gradient-to-b from-white to-card">
          <div className="container mx-auto max-w-2xl">
            <h2 className="section-title text-center">문의 폼</h2>

            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl border border-border">
              {/* Name */}
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                  이름 *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                  placeholder="이름을 입력하세요"
                />
              </div>

              {/* Email */}
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                  이메일 *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                  placeholder="이메일을 입력하세요"
                />
              </div>

              {/* Subject */}
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                  제목 *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                  placeholder="제목을 입력하세요"
                />
              </div>

              {/* Message */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  메시지 *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200 resize-none"
                  placeholder="메시지를 입력하세요"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full button-primary flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                전송하기
              </button>

              {/* Success Message */}
              {submitted && (
                <div className="mt-4 p-4 bg-accent/10 border border-accent rounded-lg text-accent font-semibold text-center">
                  메시지가 성공적으로 전송되었습니다!
                </div>
              )}
            </form>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-white">
          <div className="container mx-auto max-w-3xl">
            <h2 className="section-title text-center mb-12">자주 묻는 질문</h2>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-card p-6 rounded-2xl border border-border cursor-pointer hover:shadow-lg transition-all duration-300"
                >
                  <summary className="flex items-center gap-4 font-semibold text-foreground">
                    <HelpCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{faq.question}</span>
                    <span className="ml-auto text-muted-foreground group-open:rotate-180 transition-transform duration-300">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-4 ml-9 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
