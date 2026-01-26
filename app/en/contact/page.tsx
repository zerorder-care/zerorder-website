"use client";

import { useState } from "react";
import { Mail, MapPin, Linkedin, HelpCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * English Contact Page
 */

export default function ContactEN() {
  const faqs = [
    {
      question: "When will DoriDori be available?",
      answer: "We're planning to launch a beta version in early March, with the official release scheduled for early May.",
    },
    {
      question: "Where can I download the app?",
      answer: "The app will be available on both the iOS App Store and Google Play Store.",
    },
    {
      question: "How much does the service cost?",
      answer: "Detailed pricing information will be available within the app upon launch.",
    },
    {
      question: "Where can I get more information?",
      answer: "We will provide reliable rehabilitation information through our community features and RAG-based AI chatbot.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header locale="en" />

      <main className="flex-1">
        {/* Page Header */}
        <section className="section-padding bg-gradient-to-b from-primary/5 to-white border-b border-border">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions or suggestions? We&apos;d love to hear from you.
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
                  Email
                </h3>
                <a
                  href="mailto:ceo@zerorder.kr"
                  className="text-primary hover:underline"
                >
                  ceo@zerorder.kr
                </a>
              </div>

              {/* LinkedIn */}
              <div className="bg-card p-8 rounded-2xl border border-border text-center hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Linkedin className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  LinkedIn
                </h3>
                <a
                  href="https://www.linkedin.com/company/zerorder/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  zerorder
                </a>
              </div>

              {/* Address */}
              <div className="bg-card p-8 rounded-2xl border border-border text-center hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Address
                </h3>
                <p className="text-muted-foreground">
                  Seoul Bio Hub, Room 405<br />
                  117-3 Hoegi-ro, Dongdaemun-gu<br />
                  Seoul, Korea
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-white">
          <div className="container mx-auto max-w-3xl">
            <h2 className="section-title text-center mb-12">Frequently Asked Questions</h2>

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

      <Footer locale="en" />
    </div>
  );
}
