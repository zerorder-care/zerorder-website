import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Terms of Service Page (English)
 * Design: Modern Medical Minimalism
 * - Legal document layout with clear sections
 * - Responsive typography
 * - Easy to read and navigate
 */

export default function TermsEN() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header locale="en" />

      <main className="flex-1">
        {/* Page Header */}
        <section className="section-padding bg-gradient-to-b from-primary/5 to-white border-b border-border">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              Terms of Service
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              DoriDori Service Terms of Use
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
                  These Terms of Service (hereinafter "Terms") are intended to define the rights, obligations, responsibilities, and other necessary matters between Zerorder Co., Ltd. (hereinafter "Company") and users regarding the use of the DoriDori service (hereinafter "Service") provided by the Company.
                </p>
                <p className="text-sm text-muted-foreground mt-4">
                  Last Updated: February 3, 2026
                </p>
              </div>

              {/* Section 1 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Article 1 (Purpose and Application)
                </h2>
                <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
                  <li>
                    These Terms aim to define the terms and procedures for using the DoriDori service provided by the Company, and the rights, obligations, responsibilities, and other necessary matters between the Company and users.
                  </li>
                  <li>
                    These Terms apply to all users who wish to use the Service.
                  </li>
                  <li>
                    Matters not specified in these Terms shall be governed by relevant laws and customary practices.
                  </li>
                </ol>
              </div>

              {/* Section 2 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Article 2 (Definition of Terms)
                </h2>
                <p className="text-muted-foreground mb-4">
                  The definitions of terms used in these Terms are as follows:
                </p>
                <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                  <li>
                    <strong>&quot;Service&quot;</strong> refers to the infant torticollis rehabilitation support service provided through the DoriDori mobile application and website offered by the Company.
                  </li>
                  <li>
                    <strong>&quot;User&quot;</strong> refers to members and non-members who use the Service provided by the Company in accordance with these Terms.
                  </li>
                  <li>
                    <strong>&quot;Member&quot;</strong> refers to a user who has entered into a service use agreement with the Company and has been assigned a member ID.
                  </li>
                  <li>
                    <strong>&quot;Content&quot;</strong> refers to all information and materials provided through the Service, including rehabilitation programs, AI analysis results, and community posts.
                  </li>
                </ul>
              </div>

              {/* Section 3 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Article 3 (Purpose and Scope of Service)
                </h2>
                <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
                  <li>
                    This Service is an assistive tool to help with infant torticollis rehabilitation and <strong>is not a medical device or medical service.</strong>
                  </li>
                  <li>
                    This Service cannot replace professional medical diagnosis, prescription, or treatment, and does not provide medical advice.
                  </li>
                  <li>
                    Users must consult with medical professionals such as pediatricians or rehabilitation medicine specialists before making important decisions regarding their baby&apos;s health.
                  </li>
                  <li>
                    The main functions provided by this Service include:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>AI-based analysis of head shape and neck tilt</li>
                      <li>Home-based rehabilitation stretching programs</li>
                      <li>Tracking and recording rehabilitation progress</li>
                      <li>Information provision through AI chatbot</li>
                      <li>User-to-user information sharing through community features</li>
                    </ul>
                  </li>
                </ol>
              </div>

              {/* Section 4 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Article 4 (Membership Registration and Account Management)
                </h2>
                <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
                  <li>
                    Those who wish to use the Service apply for membership registration by filling in member information according to the registration form established by the Company and expressing their intention to agree to these Terms.
                  </li>
                  <li>
                    The Company registers as members those who apply for membership as described in Paragraph 1, except in the following cases:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>When registration content contains false information, omissions, or errors</li>
                      <li>When registering as a member is deemed to cause significant technical difficulties for the Company</li>
                      <li>When under 14 years of age (without legal guardian consent)</li>
                    </ul>
                  </li>
                  <li>
                    Members must immediately notify the Company of any changes to information registered at the time of membership registration via email or other means.
                  </li>
                  <li>
                    Members are responsible for managing their ID and password and must not allow third parties to use them.
                  </li>
                  <li>
                    If members recognize that their ID and password have been stolen or are being used by third parties, they must immediately notify the Company and follow the Company&apos;s guidance.
                  </li>
                </ol>
              </div>

              {/* Section 5 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Article 5 (Provision and Modification of Service)
                </h2>
                <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
                  <li>
                    The Company provides members with the following services:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>AI-based infant torticollis analysis service</li>
                      <li>Customized rehabilitation programs</li>
                      <li>Tracking and recording rehabilitation progress</li>
                      <li>Community service</li>
                      <li>AI chatbot consultation service</li>
                      <li>All other services developed by the Company or provided through partnership agreements with other companies</li>
                    </ul>
                  </li>
                  <li>
                    When changing the content of the Service, the Company notifies members by posting changes on the Service screen or notifying members.
                  </li>
                  <li>
                    The Company may change all or part of the Service being provided according to operational or technical needs when there are substantial reasons.
                  </li>
                </ol>
              </div>

              {/* Section 6 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Article 6 (Service Suspension)
                </h2>
                <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
                  <li>
                    The Company may temporarily suspend service provision when reasons such as maintenance, replacement, failure of information and communication facilities like computers, or disruption of communication occur.
                  </li>
                  <li>
                    The Company compensates for damages suffered by users or third parties due to temporary suspension of service provision for reasons stated in Paragraph 1. However, this does not apply when the Company proves no intent or negligence.
                  </li>
                  <li>
                    When the Service cannot be provided due to business conversion, business abandonment, or integration between companies, the Company notifies users by the method specified in Article 8 and compensates consumers according to the conditions originally presented by the Company.
                  </li>
                </ol>
              </div>

              {/* Section 7 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Article 7 (Member Obligations)
                </h2>
                <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
                  <li>
                    Members must not engage in the following acts:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Registering false information when applying or making changes</li>
                      <li>Stealing others&apos; information</li>
                      <li>Changing information posted by the Company</li>
                      <li>Sending or posting information other than that designated by the Company (such as computer programs)</li>
                      <li>Infringing on the copyright or other intellectual property rights of the Company and other third parties</li>
                      <li>Acts that damage the reputation of or interfere with the business of the Company and other third parties</li>
                      <li>Disclosing or posting obscene or violent messages, images, audio, or other information contrary to public order and morals on the Service</li>
                      <li>Using the Service for commercial purposes</li>
                      <li>Impersonating medical practice or providing information that replaces professional medical consultation</li>
                    </ul>
                  </li>
                  <li>
                    Members must comply with relevant laws, the provisions of these Terms, usage guidelines, precautions announced in relation to the Service, and matters notified by the Company, and must not engage in acts that interfere with the Company&apos;s business.
                  </li>
                </ol>
              </div>

              {/* Section 8 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Article 8 (Notices)
                </h2>
                <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
                  <li>
                    When the Company notifies members, it may do so to the email address designated by the member.
                  </li>
                  <li>
                    When notifying an unspecified number of members, the Company may substitute individual notification by posting on the Service screen for more than one week.
                  </li>
                </ol>
              </div>

              {/* Section 9 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Article 9 (Attribution of Copyright and Usage Restrictions)
                </h2>
                <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
                  <li>
                    Copyright and other intellectual property rights for works created by the Company belong to the Company.
                  </li>
                  <li>
                    Users must not use information obtained through using the Service for which intellectual property rights belong to the Company for commercial purposes by reproducing, transmitting, publishing, distributing, broadcasting, or other methods without the Company&apos;s prior consent, or allow third parties to use it.
                  </li>
                  <li>
                    Copyright for posts posted by members within the Service belongs to the author of the posts.
                  </li>
                  <li>
                    By posting content on the Service, members grant the Company the right to use the content for Service operation, improvement, and promotional purposes.
                  </li>
                </ol>
              </div>

              {/* Section 10 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Article 10 (Contract Cancellation, Termination, etc.)
                </h2>
                <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
                  <li>
                    Members may apply for contract termination at any time through the settings menu within the Service or customer center, and the Company immediately processes this in accordance with relevant laws.
                  </li>
                  <li>
                    When a member terminates the contract, all member data is destroyed immediately upon termination, except when the Company retains member information in accordance with relevant laws and the Privacy Policy.
                  </li>
                  <li>
                    The Company may gradually restrict service use through warnings, temporary suspension, or permanent suspension when members violate their obligations under these Terms or interfere with normal service operation.
                  </li>
                </ol>
              </div>

              {/* Section 11 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Article 11 (Limitation of Liability)
                </h2>
                <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
                  <li>
                    The Company is exempt from responsibility for service provision when unable to provide the Service due to natural disasters or equivalent force majeure.
                  </li>
                  <li>
                    The Company is not responsible for service use disruptions caused by reasons attributable to members.
                  </li>
                  <li>
                    The Company is not responsible for the reliability, accuracy, or other content of information, materials, and facts posted by members in relation to the Service.
                  </li>
                  <li>
                    <strong>The Company does not warrant that this Service replaces medical practice or provides medical advice, and is not responsible for medical outcomes resulting from Service use.</strong>
                  </li>
                  <li>
                    The Company does not guarantee the accuracy of AI analysis results, and such results should only be used as reference materials.
                  </li>
                  <li>
                    The Company is exempt from responsibility when transactions are conducted between members or between members and third parties through the Service as a medium.
                  </li>
                </ol>
              </div>

              {/* Section 12 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Article 12 (Dispute Resolution)
                </h2>
                <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
                  <li>
                    The Company gives priority to processing complaints and opinions submitted by users. However, when prompt processing is difficult, the Company immediately notifies users of the reasons and processing schedule.
                  </li>
                  <li>
                    Disputes arising between the Company and users may be resolved through mediation by the Electronic Document and Electronic Transaction Dispute Mediation Committee established under Article 32 of the Framework Act on Electronic Documents and Electronic Transactions and Article 21 of its Enforcement Decree.
                  </li>
                </ol>
              </div>

              {/* Section 13 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Article 13 (Jurisdiction and Governing Law)
                </h2>
                <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
                  <li>
                    Lawsuits regarding electronic transaction disputes arising between the Company and users shall be filed with the competent court under the Civil Procedure Act.
                  </li>
                  <li>
                    Korean law shall apply to lawsuits filed between the Company and users.
                  </li>
                </ol>
              </div>

              {/* Section 14 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Article 14 (Amendment of Terms)
                </h2>
                <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
                  <li>
                    The Company may amend these Terms within the scope that does not violate relevant laws such as the Act on the Regulation of Terms and Conditions, the Framework Act on Electronic Transactions, the Electronic Signature Act, and the Act on Promotion of Information and Communications Network Utilization and Information Protection.
                  </li>
                  <li>
                    When amending the Terms, the Company announces the effective date and reasons for amendment along with the current Terms on the Service initial screen from 7 days before the effective date until the day before the effective date. However, when changing Terms content unfavorably to users, the Company announces at least 30 days in advance.
                  </li>
                  <li>
                    Members have the right to refuse amended Terms. Members may express their refusal within 15 days after the amended Terms are announced. If a member refuses, the Company may terminate the contract with that member. If a member continues to use the Service without expressing refusal after the Terms amendment announcement, it is considered that the member has agreed to the amended Terms.
                  </li>
                </ol>
              </div>

              {/* Important Notice */}
              <div className="mb-12 bg-secondary/10 p-8 rounded-2xl border border-secondary/20">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Supplementary Provisions
                </h2>
                <p className="text-muted-foreground">
                  These Terms shall be effective from February 3, 2026.
                </p>
              </div>

              {/* Contact */}
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-2xl border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Terms-Related Inquiries
                </h2>
                <p className="text-muted-foreground mb-4">
                  If you have any questions regarding these Terms of Service, please contact us at:
                </p>
                <div className="space-y-2">
                  <p className="text-foreground">
                    <strong>Company Name:</strong> Zerorder Co., Ltd.
                  </p>
                  <p className="text-foreground">
                    <strong>CEO:</strong> Yejoon Sim
                  </p>
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
