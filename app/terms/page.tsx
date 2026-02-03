import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Terms of Service Page (Korean)
 * Design: Modern Medical Minimalism
 * - Legal document layout with clear sections
 * - Responsive typography
 * - Easy to read and navigate
 */

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="section-padding bg-gradient-to-b from-primary/5 to-white border-b border-border">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              이용약관
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              도리도리 서비스 이용 약관
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
                  본 약관은 (주)제로더(이하 "회사")가 제공하는 도리도리 서비스(이하 "서비스")의 이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
                </p>
                <p className="text-sm text-muted-foreground mt-4">
                  최종 업데이트: 2026년 2월 3일
                </p>
              </div>

              {/* Section 1 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  제1조 (목적 및 적용)
                </h2>
                <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
                  <li>
                    본 약관은 회사가 제공하는 도리도리 서비스의 이용조건 및 절차, 회사와 이용자 간의 권리, 의무 및 책임사항 기타 필요한 사항을 규정함을 목적으로 합니다.
                  </li>
                  <li>
                    본 약관은 서비스를 이용하고자 하는 모든 이용자에게 적용됩니다.
                  </li>
                  <li>
                    본 약관에 명시되지 않은 사항은 관련 법령 및 상관례에 따릅니다.
                  </li>
                </ol>
              </div>

              {/* Section 2 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  제2조 (용어의 정의)
                </h2>
                <p className="text-muted-foreground mb-4">
                  본 약관에서 사용하는 용어의 정의는 다음과 같습니다:
                </p>
                <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                  <li>
                    <strong>"서비스"</strong>란 회사가 제공하는 도리도리 모바일 애플리케이션 및 웹사이트를 통해 제공되는 영아 사경 재활 지원 서비스를 의미합니다.
                  </li>
                  <li>
                    <strong>"이용자"</strong>란 본 약관에 따라 회사가 제공하는 서비스를 이용하는 회원 및 비회원을 말합니다.
                  </li>
                  <li>
                    <strong>"회원"</strong>이란 회사와 서비스 이용계약을 체결하고 회원 아이디를 부여받은 이용자를 말합니다.
                  </li>
                  <li>
                    <strong>"콘텐츠"</strong>란 서비스를 통해 제공되는 재활 프로그램, AI 분석 결과, 커뮤니티 게시물 등 모든 정보와 자료를 의미합니다.
                  </li>
                </ul>
              </div>

              {/* Section 3 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  제3조 (서비스의 목적 및 범위)
                </h2>
                <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
                  <li>
                    본 서비스는 영아 사경 재활을 돕기 위한 보조 도구로서, <strong>의료기기 또는 의료 서비스가 아닙니다.</strong>
                  </li>
                  <li>
                    본 서비스는 전문의의 진단, 처방, 치료를 대체할 수 없으며, 의학적 조언을 제공하지 않습니다.
                  </li>
                  <li>
                    이용자는 아기의 건강과 관련된 중요한 결정을 내리기 전에 반드시 소아과 전문의, 재활의학과 전문의 등 의료 전문가와 상담해야 합니다.
                  </li>
                  <li>
                    본 서비스가 제공하는 주요 기능은 다음과 같습니다:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>AI 기반 머리 모양 및 고개 기울기 분석</li>
                      <li>Home-Based 재활 스트레칭 프로그램 제공</li>
                      <li>재활 진행 상황 추적 및 기록</li>
                      <li>AI 챗봇을 통한 정보 제공</li>
                      <li>커뮤니티 기능을 통한 사용자 간 정보 공유</li>
                    </ul>
                  </li>
                </ol>
              </div>

              {/* Section 4 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  제4조 (회원가입 및 계정 관리)
                </h2>
                <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
                  <li>
                    서비스를 이용하고자 하는 자는 회사가 정한 가입 양식에 따라 회원정보를 기입한 후 본 약관에 동의한다는 의사표시를 함으로써 회원가입을 신청합니다.
                  </li>
                  <li>
                    회사는 제1항과 같이 회원으로 가입할 것을 신청한 자 중 다음 각 호에 해당하지 않는 한 회원으로 등록합니다:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>등록 내용에 허위, 기재누락, 오기가 있는 경우</li>
                      <li>기타 회원으로 등록하는 것이 회사의 기술상 현저히 지장이 있다고 판단되는 경우</li>
                      <li>만 14세 미만인 경우 (법정대리인 동의 없이)</li>
                    </ul>
                  </li>
                  <li>
                    회원은 회원가입 시 등록한 사항에 변경이 있는 경우, 즉시 전자우편 및 기타 방법으로 회사에 그 변경사항을 알려야 합니다.
                  </li>
                  <li>
                    회원의 아이디와 비밀번호에 관한 관리책임은 회원에게 있으며, 이를 제3자가 이용하도록 하여서는 안 됩니다.
                  </li>
                  <li>
                    회원은 아이디 및 비밀번호가 도용되거나 제3자가 사용하고 있음을 인지한 경우, 즉시 회사에 통보하고 회사의 안내에 따라야 합니다.
                  </li>
                </ol>
              </div>

              {/* Section 5 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  제5조 (서비스의 제공 및 변경)
                </h2>
                <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
                  <li>
                    회사는 회원에게 아래와 같은 서비스를 제공합니다:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>AI 기반 영아 사경 분석 서비스</li>
                      <li>맞춤형 재활 프로그램 제공</li>
                      <li>재활 진행 상황 추적 및 기록</li>
                      <li>커뮤니티 서비스</li>
                      <li>AI 챗봇 상담 서비스</li>
                      <li>기타 회사가 추가 개발하거나 다른 회사와의 제휴 계약 등을 통해 제공하는 일체의 서비스</li>
                    </ul>
                  </li>
                  <li>
                    회사는 서비스의 내용을 변경할 경우, 변경사항을 서비스 화면에 공지하거나 회원에게 통지합니다.
                  </li>
                  <li>
                    회사는 상당한 이유가 있는 경우 운영상, 기술상의 필요에 따라 제공하고 있는 서비스의 전부 또는 일부를 변경할 수 있습니다.
                  </li>
                </ol>
              </div>

              {/* Section 6 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  제6조 (서비스의 중단)
                </h2>
                <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
                  <li>
                    회사는 컴퓨터 등 정보통신설비의 보수점검, 교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다.
                  </li>
                  <li>
                    회사는 제1항의 사유로 서비스의 제공이 일시적으로 중단됨으로 인하여 이용자 또는 제3자가 입은 손해에 대하여 배상합니다. 단, 회사가 고의 또는 과실이 없음을 입증하는 경우에는 그러하지 아니합니다.
                  </li>
                  <li>
                    사업종목의 전환, 사업의 포기, 업체 간의 통합 등의 이유로 서비스를 제공할 수 없게 되는 경우, 회사는 제8조에 정한 방법으로 이용자에게 통지하고 당초 회사에서 제시한 조건에 따라 소비자에게 보상합니다.
                  </li>
                </ol>
              </div>

              {/* Section 7 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  제7조 (회원의 의무)
                </h2>
                <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
                  <li>
                    회원은 다음 행위를 하여서는 안 됩니다:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>신청 또는 변경 시 허위내용의 등록</li>
                      <li>타인의 정보 도용</li>
                      <li>회사가 게시한 정보의 변경</li>
                      <li>회사가 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의 송신 또는 게시</li>
                      <li>회사 및 기타 제3자의 저작권 등 지적재산권에 대한 침해</li>
                      <li>회사 및 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위</li>
                      <li>외설 또는 폭력적인 메시지, 화상, 음성, 기타 공서양속에 반하는 정보를 서비스에 공개 또는 게시하는 행위</li>
                      <li>서비스를 영리 목적으로 이용하는 행위</li>
                      <li>의료 행위를 사칭하거나 전문의 상담을 대체하는 정보를 제공하는 행위</li>
                    </ul>
                  </li>
                  <li>
                    회원은 관계법령, 본 약관의 규정, 이용안내 및 서비스와 관련하여 공지한 주의사항, 회사가 통지하는 사항 등을 준수하여야 하며, 기타 회사의 업무에 방해되는 행위를 하여서는 안 됩니다.
                  </li>
                </ol>
              </div>

              {/* Section 8 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  제8조 (공지사항)
                </h2>
                <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
                  <li>
                    회사가 회원에게 통지하는 경우, 회원이 지정한 전자우편 주소로 할 수 있습니다.
                  </li>
                  <li>
                    회사는 불특정다수 회원에게 통지하는 경우 1주일 이상 서비스 화면에 게시함으로써 개별 통지에 갈음할 수 있습니다.
                  </li>
                </ol>
              </div>

              {/* Section 9 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  제9조 (저작권의 귀속 및 이용 제한)
                </h2>
                <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
                  <li>
                    회사가 작성한 저작물에 대한 저작권 기타 지적재산권은 회사에 귀속합니다.
                  </li>
                  <li>
                    이용자는 서비스를 이용함으로써 얻은 정보 중 회사에게 지적재산권이 귀속된 정보를 회사의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안 됩니다.
                  </li>
                  <li>
                    회원이 서비스 내에 게시한 게시물의 저작권은 해당 게시물의 저작자에게 귀속됩니다.
                  </li>
                  <li>
                    회원은 서비스에 게시물을 게시함으로써 회사에게 해당 게시물을 서비스 운영, 개선, 홍보 목적으로 사용할 수 있는 권리를 부여합니다.
                  </li>
                </ol>
              </div>

              {/* Section 10 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  제10조 (계약 해제, 해지 등)
                </h2>
                <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
                  <li>
                    회원은 언제든지 서비스 내 설정 메뉴 또는 고객센터를 통하여 이용계약 해지 신청을 할 수 있으며, 회사는 관련법 등이 정하는 바에 따라 이를 즉시 처리합니다.
                  </li>
                  <li>
                    회원이 계약을 해지할 경우, 관련법 및 개인정보처리방침에 따라 회사가 회원정보를 보유하는 경우를 제외하고는 해지 즉시 회원의 모든 데이터는 소멸됩니다.
                  </li>
                  <li>
                    회사는 회원이 본 약관의 의무를 위반하거나 서비스의 정상적인 운영을 방해한 경우, 경고, 일시정지, 영구이용정지 등으로 서비스 이용을 단계적으로 제한할 수 있습니다.
                  </li>
                </ol>
              </div>

              {/* Section 11 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  제11조 (책임의 제한)
                </h2>
                <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
                  <li>
                    회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.
                  </li>
                  <li>
                    회사는 회원의 귀책사유로 인한 서비스 이용의 장애에 대하여는 책임을 지지 않습니다.
                  </li>
                  <li>
                    회사는 회원이 서비스와 관련하여 게재한 정보, 자료, 사실의 신뢰도, 정확성 등의 내용에 관하여는 책임을 지지 않습니다.
                  </li>
                  <li>
                    <strong>회사는 본 서비스가 의료 행위를 대체하거나 의학적 조언을 제공한다고 보증하지 않으며, 서비스 이용으로 인한 의료적 결과에 대해 책임을 지지 않습니다.</strong>
                  </li>
                  <li>
                    회사는 AI 분석 결과의 정확성을 보장하지 않으며, 해당 결과는 참고 자료로만 활용되어야 합니다.
                  </li>
                  <li>
                    회사는 회원 간 또는 회원과 제3자 상호간에 서비스를 매개로 하여 거래 등을 한 경우에는 책임이 면제됩니다.
                  </li>
                </ol>
              </div>

              {/* Section 12 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  제12조 (분쟁 해결)
                </h2>
                <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
                  <li>
                    회사는 이용자로부터 제출되는 불만사항 및 의견을 우선적으로 처리합니다. 다만, 신속한 처리가 곤란한 경우에는 이용자에게 그 사유와 처리일정을 즉시 통보합니다.
                  </li>
                  <li>
                    회사와 이용자 간에 발생한 분쟁은 전자문서 및 전자거래 기본법 제32조 및 동 시행령 제21조에 의해 설치된 전자문서·전자거래분쟁조정위원회의 조정에 따를 수 있습니다.
                  </li>
                </ol>
              </div>

              {/* Section 13 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  제13조 (재판권 및 준거법)
                </h2>
                <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
                  <li>
                    회사와 이용자 간에 발생한 전자거래 분쟁에 관한 소송은 민사소송법상의 관할법원에 제기합니다.
                  </li>
                  <li>
                    회사와 이용자 간에 제기된 소송에는 대한민국 법을 적용합니다.
                  </li>
                </ol>
              </div>

              {/* Section 14 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  제14조 (약관의 개정)
                </h2>
                <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
                  <li>
                    회사는 약관의 규제에 관한 법률, 전자거래기본법, 전자서명법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률 등 관련 법령을 위배하지 않는 범위에서 본 약관을 개정할 수 있습니다.
                  </li>
                  <li>
                    회사가 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행 약관과 함께 서비스 초기화면에 그 적용일자 7일 이전부터 적용일자 전일까지 공지합니다. 다만, 이용자에게 불리하게 약관내용을 변경하는 경우에는 최소한 30일 이상의 사전 유예기간을 두고 공지합니다.
                  </li>
                  <li>
                    회원은 변경된 약관에 대해 거부할 권리가 있습니다. 회원은 변경된 약관이 공지된 지 15일 이내에 거부의사를 표명할 수 있습니다. 회원이 거부하는 경우 회사는 해당 회원과의 계약을 해지할 수 있습니다. 만약 회원이 약관 변경 공지 후 거부의사를 표시하지 않고 서비스를 계속 이용하는 경우 약관의 변경 사항에 동의한 것으로 간주됩니다.
                  </li>
                </ol>
              </div>

              {/* Important Notice */}
              <div className="mb-12 bg-secondary/10 p-8 rounded-2xl border border-secondary/20">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  부칙
                </h2>
                <p className="text-muted-foreground">
                  본 약관은 2026년 2월 3일부터 적용됩니다.
                </p>
              </div>

              {/* Contact */}
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-2xl border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  약관 관련 문의
                </h2>
                <p className="text-muted-foreground mb-4">
                  이용약관과 관련하여 문의사항이 있으시면 아래로 연락주시기 바랍니다.
                </p>
                <div className="space-y-2">
                  <p className="text-foreground">
                    <strong>회사명:</strong> (주)제로더
                  </p>
                  <p className="text-foreground">
                    <strong>대표자:</strong> 심예준
                  </p>
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
