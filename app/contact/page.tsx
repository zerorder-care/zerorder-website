"use client";

import { useState } from "react";
import { Mail, MapPin, Linkedin, HelpCircle } from "lucide-react";
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
  const handleAddressClick = () => {
    const isKorean = navigator.language.startsWith("ko");
    const url = isKorean
      ? "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EB%8F%99%EB%8C%80%EB%AC%B8%EA%B5%AC%20%ED%9A%8C%EA%B8%B0%EB%A1%9C%20117-3"
      : "https://www.google.com/maps/search/?api=1&query=%EC%84%9C%EC%9A%B8+%EB%8F%99%EB%8C%80%EB%AC%B8%EA%B5%AC+%ED%9A%8C%EA%B8%B0%EB%A1%9C+117-3";
    window.open(url, "_blank", "noopener,noreferrer");
  };

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
      question: "바로도리는 언제부터 사용할 수 있나요?",
      answer: "5월 중 베타 버전을 시작으로, 6월 초에 정식 버전을 출시할 예정입니다.",
    },
    {
      question: "앱은 어디서 다운로드할 수 있나요?",
      answer: "iOS 앱스토어와 구글 플레이스토어에서 다운로드하실 수 있습니다.",
    },
    {
      question: "서비스 이용 비용은 얼마인가요?",
      answer: "구체적인 가격 정보는 앱 내에서 확인하실 수 있도록 준비 중입니다.",
    },
    {
      question: "관련 정보를 어디서 얻을 수 있나요?",
      answer: "커뮤니티와 RAG 기반 챗봇을 통해 재활에 도움이 되는 신뢰성 있는 정보들을 제공해 드릴 예정입니다.",
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
              <a
                href="mailto:ceo@zerorder.kr"
                className="bg-card p-8 rounded-2xl border border-border text-center hover:shadow-lg hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 block cursor-pointer"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">
                  이메일
                </h3>
                <span className="text-black">
                  ceo@zerorder.kr
                </span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/zerorder/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card p-8 rounded-2xl border border-border text-center hover:shadow-lg hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 block cursor-pointer"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Linkedin className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">
                  LinkedIn
                </h3>
                <span className="text-black">
                  zerorder
                </span>
              </a>

              {/* Address */}
              <button
                onClick={handleAddressClick}
                className="bg-card p-8 rounded-2xl border border-border text-center hover:shadow-lg hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 block cursor-pointer w-full"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">
                  주소
                </h3>
                <span className="text-black">
                  서울 동대문구 회기로 117-3<br />
                  서울바이오허브 산업지원동 405호
                </span>
              </button>
            </div>
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
