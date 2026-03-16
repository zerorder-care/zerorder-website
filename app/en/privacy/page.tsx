import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Privacy Policy Page (English)
 * Design: Modern Medical Minimalism
 * - Legal document layout with clear sections
 * - Responsive typography
 * - Easy to read and navigate
 */

export default function PrivacyEN() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header locale="en" />

      <main className="flex-1">
        {/* Page Header */}
        <section className="section-padding bg-gradient-to-b from-primary/5 to-white border-b border-border">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Zerorder values and protects your personal information
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding bg-white">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg max-w-none">
              {/* Introduction */}
              <div className="mb-12">
                <p className="text-muted-foreground leading-relaxed">
                  Zerorder Co., Ltd. (hereinafter "Company") complies with the Personal Information Protection Act and related laws to lawfully process and securely manage personal information in order to protect the freedom and rights of data subjects. In accordance with Article 30 of the Personal Information Protection Act, we establish and disclose this Privacy Policy to guide data subjects through the procedures and standards of personal information processing and to promptly and smoothly handle related grievances.
                </p>
                <p className="text-sm text-muted-foreground mt-4">
                  Last Updated: February 3, 2026
                </p>
              </div>

              {/* Section 1 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  1. Collection of Personal Information
                </h2>
                
                <h3 className="text-2xl font-semibold text-foreground mb-4 mt-8">
                  1.1 Personal Information We Collect
                </h3>
                <p className="text-muted-foreground mb-4">
                  The Company collects the following personal information to provide DoriDori services:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                  <li><strong>Required Information:</strong> Name, email address, password, mobile phone number</li>
                  <li><strong>Baby Information:</strong> Date of birth, gender, torticollis diagnosis information</li>
                  <li><strong>Camera Data:</strong> Photos/videos of baby&apos;s head shape and posture (for AI analysis)</li>
                  <li><strong>Service Usage Information:</strong> Rehabilitation program performance records, progress data</li>
                  <li><strong>Community Activity:</strong> Posts and comment contents</li>
                  <li><strong>Automatically Collected Information:</strong> IP address, cookies, access logs, device information, app version</li>
                </ul>

                <h3 className="text-2xl font-semibold text-foreground mb-4 mt-8">
                  1.2 Collection Methods
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Direct input by users during registration and service usage</li>
                  <li>Photo/video capture through mobile app camera function</li>
                  <li>Automatic collection of information generated during service usage</li>
                  <li>Collection through customer center inquiries and emails</li>
                </ul>
              </div>

              {/* Section 2 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  2. Purpose of Collecting and Using Personal Information
                </h2>
                <p className="text-muted-foreground mb-4">
                  The Company uses collected personal information for the following purposes:
                </p>
                <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                  <li>
                    <strong>Service Provision:</strong> AI-based infant torticollis analysis, customized rehabilitation programs, progress tracking
                  </li>
                  <li>
                    <strong>Member Management:</strong> Identity verification, membership service access, prevention of fraudulent use
                  </li>
                  <li>
                    <strong>AI Technology Improvement:</strong> AI model training and improvement using photo/video data (anonymized)
                  </li>
                  <li>
                    <strong>Community Operation:</strong> Supporting information sharing and communication among users
                  </li>
                  <li>
                    <strong>Customer Support:</strong> Responding to inquiries through AI chatbot and customer center
                  </li>
                  <li>
                    <strong>Service Improvement:</strong> New service development, statistical analysis, personalized service provision
                  </li>
                  <li>
                    <strong>Marketing and Advertising:</strong> Event information, service announcements (with consent)
                  </li>
                </ul>
              </div>

              {/* Section 3 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  3. Retention and Use Period of Personal Information
                </h2>
                <p className="text-muted-foreground mb-4">
                  In principle, the Company destroys personal information without delay after the purpose of collection and use has been achieved. However, information will be retained for the periods specified below:
                </p>
                <ul className="list-disc pl-6 space-y-3 text-muted-foreground mb-6">
                  <li>
                    <strong>Upon Member Withdrawal:</strong> Member information is immediately destroyed. However, some information may be retained in accordance with relevant laws.
                  </li>
                  <li>
                    <strong>Service Inactivity:</strong> Personal information of members who have not used the service for one year may be separately stored and destroyed.
                  </li>
                </ul>

                <h3 className="text-2xl font-semibold text-foreground mb-4 mt-8">
                  Retention According to Related Laws
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Records on contracts or withdrawal of subscription: 5 years (E-Commerce Act)</li>
                  <li>Records on payment and supply of goods: 5 years (E-Commerce Act)</li>
                  <li>Records on consumer complaints or dispute resolution: 3 years (E-Commerce Act)</li>
                  <li>Records on labeling/advertising: 6 months (E-Commerce Act)</li>
                  <li>Service usage records, access logs: 3 months (Communications Secrets Protection Act)</li>
                </ul>
              </div>

              {/* Section 4 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  4. Provision of Personal Information to Third Parties
                </h2>
                <p className="text-muted-foreground">
                  In principle, the Company does not provide users&apos; personal information to third parties. However, exceptions are made in the following cases:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                  <li>When users have given prior consent</li>
                  <li>When required by law or requested by investigative agencies according to procedures and methods defined by law</li>
                </ul>
              </div>

              {/* Section 5 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  5. Outsourcing of Personal Information Processing
                </h2>
                <p className="text-muted-foreground mb-4">
                  The Company outsources personal information processing tasks to external specialized companies as follows:
                </p>
                <div className="bg-card p-6 rounded-2xl border border-border">
                  <table className="w-full text-sm text-muted-foreground">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 font-semibold text-foreground">Service Provider</th>
                        <th className="text-left py-2 font-semibold text-foreground">Outsourced Tasks</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="py-3">Cloud Service Providers</td>
                        <td className="py-3">Server hosting, data storage and management</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3">AI Analysis Service Providers</td>
                        <td className="py-3">Image/video AI analysis processing</td>
                      </tr>
                      <tr>
                        <td className="py-3">Customer Center Operations</td>
                        <td className="py-3">Customer inquiry response and support</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-muted-foreground mt-4">
                  * Outsourcing companies may change as services improve, and changes will be announced through this Privacy Policy.
                </p>
              </div>

              {/* Section 6 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  6. Rights and Obligations of Data Subjects
                </h2>
                <p className="text-muted-foreground mb-4">
                  Data subjects (users) may exercise the following rights at any time:
                </p>
                <ul className="list-disc pl-6 space-y-3 text-muted-foreground mb-6">
                  <li>Request to access personal information</li>
                  <li>Request to correct errors in personal information</li>
                  <li>Request to delete personal information</li>
                  <li>Request to stop processing personal information</li>
                </ul>
                <p className="text-muted-foreground mb-4">
                  The exercise of these rights can be made to the Company in writing, by phone, email, etc., and the Company will take action without delay.
                </p>
                <p className="text-muted-foreground">
                  Rights may be exercised through a legal representative or an authorized agent. In this case, a power of attorney in accordance with Form No. 11 of the Enforcement Rules of the Personal Information Protection Act must be submitted.
                </p>
              </div>

              {/* Section 7 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  7. Procedures and Methods for Destroying Personal Information
                </h2>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  7.1 Destruction Procedures
                </h3>
                <p className="text-muted-foreground mb-6">
                  Information entered by users is transferred to a separate DB (a separate file cabinet in the case of paper) after the purpose is achieved and stored for a certain period according to internal policies and reasons for information protection under other relevant laws (see retention and use period) before being destroyed.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  7.2 Destruction Methods
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Electronic Files:</strong> Completely deleted using technical methods that make recovery and reproduction impossible</li>
                  <li><strong>Paper Documents:</strong> Destroyed by shredding or incineration</li>
                </ul>
              </div>

              {/* Section 8 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  8. Installation, Operation, and Rejection of Automatic Personal Information Collection Devices
                </h2>
                <p className="text-muted-foreground mb-4">
                  The Company uses &apos;cookies&apos; that store and retrieve usage information from time to time to provide individualized customized services to users.
                </p>
                <h3 className="text-2xl font-semibold text-foreground mb-4 mt-6">
                  8.1 What are Cookies?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Cookies are small text files sent by servers used to operate websites to users&apos; browsers and stored in users&apos; device storage.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  8.2 Purpose of Using Cookies
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                  <li>Maintaining login sessions</li>
                  <li>Providing user-customized services</li>
                  <li>Analyzing service usage statistics</li>
                  <li>Enhancing security</li>
                </ul>

                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  8.3 Installation, Operation, and Rejection of Cookies
                </h3>
                <p className="text-muted-foreground">
                  Users have the choice regarding cookie installation. Through web browser options, you can allow all cookies, go through confirmation each time a cookie is saved, or refuse to save all cookies. However, refusing to install cookies may cause difficulties in service provision.
                </p>
              </div>

              {/* Section 9 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  9. Personal Information Protection Officer
                </h2>
                <p className="text-muted-foreground mb-4">
                  The Company designates a Personal Information Protection Officer to oversee personal information processing and handle complaints and remedy damages related to personal information processing for data subjects.
                </p>
                <div className="bg-card p-6 rounded-2xl border border-border">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Personal Information Protection Officer</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li><strong>Name:</strong> Yejoon Sim</li>
                    <li><strong>Position:</strong> CEO</li>
                    <li><strong>Email:</strong> ceo@zerorder.kr</li>
                    <li><strong>Contact:</strong> Please contact via email</li>
                  </ul>
                </div>
                <p className="text-muted-foreground mt-6">
                  Data subjects may contact the Personal Information Protection Officer regarding any personal information protection-related inquiries, complaint handling, or damage remedy arising from the use of the Company&apos;s services. The Company will respond to and process data subject inquiries without delay.
                </p>
              </div>

              {/* Section 10 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  10. Changes to Privacy Policy
                </h2>
                <p className="text-muted-foreground mb-4">
                  When this Privacy Policy is added, deleted, or modified due to changes in laws, policies, or security technologies, we will notify the reasons and details of changes through the website at least 7 days before implementing the changed Privacy Policy.
                </p>
                <p className="text-muted-foreground">
                  However, for significant changes in user rights such as changes in collected personal information items or purposes of use, we will notify at least 30 days in advance and may obtain user consent again if necessary.
                </p>
              </div>

              {/* Section 11 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  11. Measures to Ensure Safety of Personal Information
                </h2>
                <p className="text-muted-foreground mb-4">
                  The Company takes the following measures to ensure the safety of personal information:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Administrative Measures:</strong> Establishment and implementation of internal management plans, regular employee training</li>
                  <li><strong>Technical Measures:</strong> Access control to personal information processing systems, installation of access control systems, encryption of unique identification information, installation of security programs</li>
                  <li><strong>Physical Measures:</strong> Access control to computer rooms and document storage rooms</li>
                </ul>
              </div>

              {/* Section 12 */}
              <div className="mb-12 bg-secondary/10 p-8 rounded-2xl border border-secondary/20">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  12. Important Notices
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Not a Medical Service:</strong> DoriDori is not a medical device or medical service. This service is an assistive tool to help with infant torticollis rehabilitation and cannot replace professional medical diagnosis and prescription.
                  </p>
                  <p>
                    <strong className="text-foreground">Consult Medical Professionals:</strong> Important decisions related to your baby&apos;s health should always be made in consultation with medical professionals such as pediatricians and rehabilitation medicine specialists.
                  </p>
                  <p>
                    <strong className="text-foreground">Limitations of AI Analysis:</strong> AI-based analysis results are for reference only and are not medical diagnoses. For accurate diagnosis and treatment, please visit a medical institution.
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-2xl border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Privacy-Related Inquiries
                </h2>
                <p className="text-muted-foreground mb-4">
                  If you have any questions regarding privacy protection, please contact us at:
                </p>
                <div className="space-y-2">
                  <p className="text-foreground">
                    <strong>Email:</strong> <a href="mailto:ceo@zerorder.kr" className="text-primary hover:underline">ceo@zerorder.kr</a>
                  </p>
                  <p className="text-foreground">
                    <strong>Address:</strong> Seoul Bio Hub, 117-3 Hoegi-ro, Dongdaemun-gu, Seoul, Korea
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer locale="en" />
    </div>
  );
}
