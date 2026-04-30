import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Privacy Policy Page (Korean)
 * Design: Modern Medical Minimalism
 * - Legal document layout with clear sections
 * - Responsive typography
 * - Easy to read and navigate
 */

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="section-padding bg-gradient-to-b from-primary/5 to-white border-b border-border">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              개인정보처리방침
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              제로더는 고객의 개인정보를 소중히 보호합니다
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
                  (주)제로더(이하 "회사")는 정보주체의 자유와 권리 보호를 위해 「개인정보 보호법」 및 관계 법령이 정한 바를 준수하여, 적법하게 개인정보를 처리하고 안전하게 관리하고 있습니다. 이에 「개인정보 보호법」 제30조에 따라 정보주체에게 개인정보 처리에 관한 절차 및 기준을 안내하고, 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.
                </p>
                <p className="text-sm text-muted-foreground mt-4">
                  최종 업데이트: 2026년 2월 3일
                </p>
              </div>

              {/* Section 1 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  1. 개인정보의 수집 항목 및 수집 방법
                </h2>

                <h3 className="text-2xl font-semibold text-foreground mb-4 mt-8">
                  1.1 수집하는 개인정보의 항목
                </h3>
                <p className="text-muted-foreground mb-4">
                  회사는 바로도리 서비스 제공을 위해 다음과 같은 개인정보를 수집합니다:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                  <li><strong>필수 항목:</strong> 이름, 이메일 주소, 비밀번호, 휴대전화번호</li>
                  <li><strong>아기 정보:</strong> 생년월일, 성별, 사경 진단 정보</li>
                  <li><strong>카메라 데이터:</strong> 아기의 머리 모양 및 자세 촬영 사진/영상 (AI 분석용)</li>
                  <li><strong>서비스 이용 정보:</strong> 재활 프로그램 수행 기록, 진행 상황 데이터</li>
                  <li><strong>커뮤니티 활동:</strong> 게시글, 댓글 내용</li>
                  <li><strong>자동 수집 정보:</strong> IP 주소, 쿠키, 접속 기록, 기기 정보, 앱 버전</li>
                </ul>

                <h3 className="text-2xl font-semibold text-foreground mb-4 mt-8">
                  1.2 개인정보 수집 방법
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>회원가입 및 서비스 이용 과정에서 이용자의 직접 입력</li>
                  <li>모바일 앱 카메라 기능을 통한 사진/영상 촬영</li>
                  <li>서비스 이용 과정에서 자동으로 생성되는 정보 수집</li>
                  <li>고객센터 문의 및 이메일을 통한 수집</li>
                </ul>
              </div>

              {/* Section 2 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  2. 개인정보의 수집 및 이용 목적
                </h2>
                <p className="text-muted-foreground mb-4">
                  회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다:
                </p>
                <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                  <li>
                    <strong>서비스 제공:</strong> AI 기반 영아 사경 분석, 맞춤형 재활 프로그램 제공, 재활 진행 상황 추적
                  </li>
                  <li>
                    <strong>회원 관리:</strong> 본인 확인, 회원제 서비스 이용에 따른 본인확인, 불량회원 부정 이용 방지
                  </li>
                  <li>
                    <strong>AI 기술 개선:</strong> 사진/영상 데이터를 활용한 AI 모델 학습 및 개선 (익명화 처리 후 사용)
                  </li>
                  <li>
                    <strong>커뮤니티 운영:</strong> 사용자 간 정보 공유 및 소통 지원
                  </li>
                  <li>
                    <strong>고객 지원:</strong> AI 챗봇 및 고객센터를 통한 문의 응대
                  </li>
                  <li>
                    <strong>서비스 개선:</strong> 신규 서비스 개발, 통계 분석, 맞춤형 서비스 제공
                  </li>
                  <li>
                    <strong>마케팅 및 광고:</strong> 이벤트 정보 제공, 서비스 안내 (선택 동의 시)
                  </li>
                </ul>
              </div>

              {/* Section 3 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  3. 개인정보의 보유 및 이용 기간
                </h2>
                <p className="text-muted-foreground mb-4">
                  회사는 원칙적으로 개인정보 수집 및 이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 다음의 경우에는 각각 명시한 기간 동안 보존합니다:
                </p>
                <ul className="list-disc pl-6 space-y-3 text-muted-foreground mb-6">
                  <li>
                    <strong>회원 탈퇴 시:</strong> 회원 정보는 즉시 파기됩니다. 단, 관련 법령에 따라 일부 정보는 보존될 수 있습니다.
                  </li>
                  <li>
                    <strong>서비스 미이용 시:</strong> 1년간 서비스 미이용 회원의 개인정보는 별도 분리 보관 후 파기될 수 있습니다.
                  </li>
                </ul>

                <h3 className="text-2xl font-semibold text-foreground mb-4 mt-8">
                  관련 법령에 따른 보존
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>계약 또는 청약철회 등에 관한 기록: 5년 (전자상거래법)</li>
                  <li>대금결제 및 재화 등의 공급에 관한 기록: 5년 (전자상거래법)</li>
                  <li>소비자의 불만 또는 분쟁처리에 관한 기록: 3년 (전자상거래법)</li>
                  <li>표시/광고에 관한 기록: 6개월 (전자상거래법)</li>
                  <li>서비스 이용 기록, 접속 로그: 3개월 (통신비밀보호법)</li>
                </ul>
              </div>

              {/* Section 4 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  4. 개인정보의 제3자 제공
                </h2>
                <p className="text-muted-foreground">
                  회사는 원칙적으로 이용자의 개인정보를 제3자에게 제공하지 않습니다. 다만, 다음의 경우에는 예외로 합니다:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                  <li>이용자가 사전에 동의한 경우</li>
                  <li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
                </ul>
              </div>

              {/* Section 5 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  5. 개인정보 처리 위탁
                </h2>
                <p className="text-muted-foreground mb-4">
                  회사는 서비스 제공을 위해 다음과 같이 개인정보 처리 업무를 외부 전문업체에 위탁하고 있습니다:
                </p>
                <div className="bg-card p-6 rounded-2xl border border-border">
                  <table className="w-full text-sm text-muted-foreground">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 font-semibold text-foreground">수탁업체</th>
                        <th className="text-left py-2 font-semibold text-foreground">위탁 업무 내용</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="py-3">클라우드 서비스 제공업체</td>
                        <td className="py-3">서버 호스팅, 데이터 저장 및 관리</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3">AI 분석 서비스 제공업체</td>
                        <td className="py-3">이미지/영상 AI 분석 처리</td>
                      </tr>
                      <tr>
                        <td className="py-3">고객센터 운영업체</td>
                        <td className="py-3">고객 문의 응대 및 지원</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-muted-foreground mt-4">
                  * 위탁 업체는 서비스 개선에 따라 변경될 수 있으며, 변경 시 본 개인정보처리방침을 통해 공지합니다.
                </p>
              </div>

              {/* Section 6 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  6. 정보주체의 권리·의무 및 행사 방법
                </h2>
                <p className="text-muted-foreground mb-4">
                  정보주체(이용자)는 언제든지 다음과 같은 권리를 행사할 수 있습니다:
                </p>
                <ul className="list-disc pl-6 space-y-3 text-muted-foreground mb-6">
                  <li>개인정보 열람 요구</li>
                  <li>개인정보 오류 등이 있을 경우 정정 요구</li>
                  <li>개인정보 삭제 요구</li>
                  <li>개인정보 처리 정지 요구</li>
                </ul>
                <p className="text-muted-foreground mb-4">
                  위 권리 행사는 회사에 대해 서면, 전화, 이메일 등을 통하여 하실 수 있으며, 회사는 이에 대해 지체 없이 조치하겠습니다.
                </p>
                <p className="text-muted-foreground">
                  권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수도 있습니다. 이 경우 개인정보 보호법 시행규칙 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.
                </p>
              </div>

              {/* Section 7 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  7. 개인정보의 파기 절차 및 방법
                </h2>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  7.1 파기 절차
                </h3>
                <p className="text-muted-foreground mb-6">
                  이용자가 입력한 정보는 목적이 달성된 후 별도의 DB로 옮겨져(종이의 경우 별도의 서류함) 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라(보유 및 이용기간 참조) 일정 기간 저장된 후 파기됩니다.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  7.2 파기 방법
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>전자적 파일:</strong> 복구 및 재생이 불가능한 기술적 방법을 사용하여 완전하게 삭제</li>
                  <li><strong>종이 문서:</strong> 분쇄기로 분쇄하거나 소각하여 파기</li>
                </ul>
              </div>

              {/* Section 8 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  8. 개인정보 자동 수집 장치의 설치·운영 및 거부
                </h2>
                <p className="text-muted-foreground mb-4">
                  회사는 이용자에게 개별적인 맞춤 서비스를 제공하기 위해 이용 정보를 저장하고 수시로 불러오는 '쿠키(cookie)'를 사용합니다.
                </p>
                <h3 className="text-2xl font-semibold text-foreground mb-4 mt-6">
                  8.1 쿠키란?
                </h3>
                <p className="text-muted-foreground mb-6">
                  쿠키는 웹사이트를 운영하는데 이용되는 서버가 이용자의 브라우저에 보내는 작은 텍스트 파일로, 이용자의 기기 저장공간에 저장됩니다.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  8.2 쿠키의 사용 목적
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                  <li>로그인 세션 유지</li>
                  <li>이용자 맞춤 서비스 제공</li>
                  <li>서비스 이용 통계 분석</li>
                  <li>보안 강화</li>
                </ul>

                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  8.3 쿠키의 설치·운영 및 거부
                </h3>
                <p className="text-muted-foreground">
                  이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다. 웹 브라우저 옵션을 통해 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 모든 쿠키의 저장을 거부할 수 있습니다. 단, 쿠키 설치를 거부할 경우 서비스 제공에 어려움이 있을 수 있습니다.
                </p>
              </div>

              {/* Section 9 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  9. 개인정보 보호책임자
                </h2>
                <p className="text-muted-foreground mb-4">
                  회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
                </p>
                <div className="bg-card p-6 rounded-2xl border border-border">
                  <h3 className="text-xl font-semibold text-foreground mb-4">개인정보 보호책임자</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li><strong>성명:</strong> 심예준</li>
                    <li><strong>직책:</strong> 대표이사</li>
                    <li><strong>이메일:</strong> ceo@zerorder.kr</li>
                    <li><strong>연락처:</strong> 이메일로 문의 바랍니다</li>
                  </ul>
                </div>
                <p className="text-muted-foreground mt-6">
                  정보주체는 회사의 서비스를 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자에게 문의하실 수 있습니다. 회사는 정보주체의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.
                </p>
              </div>

              {/* Section 10 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  10. 개인정보 처리방침의 변경
                </h2>
                <p className="text-muted-foreground mb-4">
                  이 개인정보처리방침은 법령·정책 또는 보안기술의 변경에 따라 내용의 추가·삭제 및 수정이 있을 시에는 변경되는 개인정보처리방침을 시행하기 최소 7일 전에 웹사이트를 통해 변경사유 및 내용 등을 공지하도록 하겠습니다.
                </p>
                <p className="text-muted-foreground">
                  다만, 수집하는 개인정보의 항목, 이용목적의 변경 등과 같이 이용자 권리의 중대한 변경이 발생할 때에는 최소 30일 전에 공지하며, 필요 시 이용자 동의를 다시 받을 수 있습니다.
                </p>
              </div>

              {/* Section 11 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  11. 개인정보의 안전성 확보 조치
                </h2>
                <p className="text-muted-foreground mb-4">
                  회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>관리적 조치:</strong> 내부관리계획 수립·시행, 정기적 직원 교육</li>
                  <li><strong>기술적 조치:</strong> 개인정보처리시스템 등의 접근권한 관리, 접근통제시스템 설치, 고유식별정보 등의 암호화, 보안프로그램 설치</li>
                  <li><strong>물리적 조치:</strong> 전산실, 자료보관실 등의 접근통제</li>
                </ul>
              </div>

              {/* Section 12 */}
              <div className="mb-12 bg-secondary/10 p-8 rounded-2xl border border-secondary/20">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  12. 중요 안내 사항
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">의료 서비스 아님:</strong> 바로도리는 의료기기 또는 의료 서비스가 아닙니다. 본 서비스는 영아 사경 재활을 돕는 보조 도구이며, 전문의의 진단과 처방을 대체할 수 없습니다.
                  </p>
                  <p>
                    <strong className="text-foreground">전문의 상담 권장:</strong> 아기의 건강과 관련된 중요한 결정은 반드시 소아과 전문의, 재활의학과 전문의 등 의료 전문가와 상담하시기 바랍니다.
                  </p>
                  <p>
                    <strong className="text-foreground">AI 분석의 한계:</strong> AI 기반 분석 결과는 참고 자료이며, 의학적 진단이 아닙니다. 정확한 진단과 치료는 의료기관을 방문하시기 바랍니다.
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-2xl border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  개인정보 관련 문의
                </h2>
                <p className="text-muted-foreground mb-4">
                  개인정보 보호와 관련하여 문의사항이 있으시면 아래로 연락주시기 바랍니다.
                </p>
                <div className="space-y-2">
                  <p className="text-foreground">
                    <strong>이메일:</strong> <a href="mailto:ceo@zerorder.kr" className="text-primary hover:underline">ceo@zerorder.kr</a>
                  </p>
                  <p className="text-foreground">
                    <strong>주소:</strong> 서울특별시 동대문구 회기로 117-3 서울바이오허브 산업지원동 405호
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
