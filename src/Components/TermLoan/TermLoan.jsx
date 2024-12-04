import { useInView } from "react-intersection-observer";
import { Cta } from "../cta/Cta";
// import "./TermLoanPage.css";

const AnimatedSection = ({ children, animationClass }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-in-out ${
        inView ? animationClass : "opacity-0 translate-y-20"
      }`}
    >
      {children}
    </div>
  );
};

const TermLoan = () => {
  return (
    <div className="bg-gradient-to-br min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-700 bg-blue-200 py-4 px-6 rounded-lg shadow-md mb-16 animate-bounce-in">
          Understanding Term Loans: Your Guide to Unsecured Financing
        </h1>

        {/* Introduction */}
        <AnimatedSection animationClass="animate-slide-in-left">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              Introduction to Term Loans
            </h2>
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0">
              <img
                src="/images/term loan/01.jpg"
                alt="Term Loan Introduction"
                className="w-full max-w-2xl h-auto mb-4 md:mb-0 md:mr-6 rounded-lg shadow-xl"
              />
              <p className="text-gray-700 text-lg leading-relaxed mt-4">
                A <strong className="text-blue-700">Term Loan</strong> is a type
                of unsecured loan where borrowers receive a lump sum of money
                from a lender and agree to pay it back in installments over a
                specified term. Unlike secured loans, Term Loans do not require
                collateral. In India, term loans are typically used for business
                expansion, asset purchases, or personal use.
              </p>
            </div>
          </section>
        </AnimatedSection>

        {/* Why Compare Term Loan Rates? */}
        <AnimatedSection animationClass="animate-slide-in-right">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 mb-10">
              Why Compare Term Loan Rates?
            </h2>
            <div className="flex flex-col md:flex-row-reverse items-center md:items-start space-y-6 md:space-y-0">
              <ul className="text-gray-700 text-lg leading-relaxed list-disc pl-5">
                <li>
                  <strong className="text-blue-700">
                    Lower Interest Rates
                  </strong>
                  : Comparing rates helps you secure the most competitive
                  interest rates, potentially saving you thousands over the term
                  of the loan.
                </li>
                <li>
                  <strong className="text-blue-700">
                    Flexible Repayment Options
                  </strong>
                  : By comparing various lenders, you can choose one that offers
                  flexible repayment options that suit your financial situation.
                </li>
                <li>
                  <strong className="text-blue-700">
                    Understand Loan Terms
                  </strong>
                  : Comparing different lenders helps you understand the terms
                  of the loan, including processing fees, prepayment penalties,
                  and loan tenure.
                </li>
                <li>
                  <strong className="text-blue-700">
                    Quick Approval Process
                  </strong>
                  : Some lenders may offer faster approval processes or more
                  lenient eligibility criteria, which can be critical for urgent
                  financial needs.
                </li>
              </ul>
            </div>
          </section>
        </AnimatedSection>

        <Cta
          heading="A Flexible Financing Solution"
          message="Term loans are ideal for purchasing equipment, expanding businesses, or managing large personal expenses. With flexible repayment options and competitive interest rates, they offer a reliable way to achieve your financial goals."
        />

        {/* Key Factors to Compare */}
        <AnimatedSection animationClass="animate-fade-in">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              Key Factors to Compare When Choosing a Term Loan
            </h2>
            <div className="flex flex-col md:flex-row-reverse items-center md:items-start space-y-6 md:space-y-0">
              <img
                src="/images/term loan/02.jpg"
                alt="Key Factors for Term Loan"
                className="w-full max-w-xs h-auto mb-4 md:mb-0 md:ml-6 rounded-lg shadow-xl"
              />
              <ul className="space-y-4 text-lg text-gray-700 leading-relaxed mt-4 md:mr-6">
                <li>
                  <strong className="text-blue-700">Interest Rates:</strong>{" "}
                  Term loan interest rates vary between lenders. Compare fixed
                  and floating rates for the best deal.
                </li>
                <li>
                  <strong className="text-blue-700">Repayment Tenure:</strong>{" "}
                  Check the repayment period (usually 1-10 years) and ensure it
                  aligns with your financial goals.
                </li>
                <li>
                  <strong className="text-blue-700">Loan Amount:</strong>{" "}
                  Determine the amount of financing you require and ensure that
                  the lender provides enough funds.
                </li>
                <li>
                  <strong className="text-blue-700">
                    Processing Fees and Charges:
                  </strong>{" "}
                  Some lenders charge processing fees, late payment charges, and
                  other hidden fees, so be sure to compare these costs.
                </li>
                <li>
                  <strong className="text-blue-700">
                    Eligibility Criteria:
                  </strong>{" "}
                  Verify the eligibility requirements, including credit score,
                  income, and employment status, before applying.
                </li>
              </ul>
            </div>
          </section>
        </AnimatedSection>

        {/* Steps to Compare Term Loan Rates */}
        <AnimatedSection animationClass="animate-slide-in-left">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              Steps to Compare Term Loan Rates
            </h2>
            <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0">
              <ol className="list-decimal list-inside text-lg text-gray-700 leading-relaxed mt-4 md:mr-6">
                <li>
                  Use online comparison tools to compare term loan options from
                  different lenders.
                </li>
                <li>
                  Review the lender's eligibility requirements and make sure you
                  meet them.
                </li>
                <li>
                  Assess the total cost of the loan, including interest rates
                  and fees, to determine affordability.
                </li>
                <li>
                  Check for prepayment penalties or any hidden charges that
                  could affect your loan cost.
                </li>
                <li>
                  Consult customer feedback and reviews to get an idea of the
                  lender's reputation and customer service.
                </li>
              </ol>
            </div>
          </section>
        </AnimatedSection>

        {/* Popular Term Loan Providers */}
        <AnimatedSection animationClass="animate-fade-in">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              Popular Term Loan Providers in India
            </h2>
            <div className="flex flex-col items-center space-y-6">
              <img
                src="/images/term loan/03.jpg"
                alt="Popular Term Loan Providers"
                className="w-full h-auto rounded-lg shadow-xl max-w-xl"
              />
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed mt-4">
                <li>
                  <strong className="text-blue-700">HDFC Bank:</strong> Offers
                  term loans with competitive interest rates and quick
                  disbursal.
                </li>
                <li>
                  <strong className="text-blue-700">ICICI Bank:</strong> Known
                  for flexible loan tenure and easy eligibility requirements.
                </li>
                <li>
                  <strong className="text-blue-700">SBI Term Loan:</strong>{" "}
                  Offers attractive interest rates with longer repayment
                  periods.
                </li>
                <li>
                  <strong className="text-blue-700">Axis Bank:</strong> Provides
                  personal and business term loans with attractive features for
                  various needs.
                </li>
              </ul>
            </div>
          </section>
        </AnimatedSection>

        {/* Conclusion */}
        <AnimatedSection animationClass="animate-slide-in-left">
          <section className="w-full text-center animate-fadeIn mb-10">
            <h2 className="text-3xl text-blue-600 font-semibold mb-4">
              Conclusion
            </h2>
            <p className="text-black-300 leading-relaxed mb-6">
              Comparing <strong className="text-blue-700">Term Loans</strong>{" "}
              across different lenders can help you secure the best interest
              rates and terms suited to your needs. By understanding key factors
              such as eligibility, loan amount, and repayment flexibility, you
              can make a well-informed decision and manage your finances better.
              For expert assistance, reach out to us today to find the ideal
              term loan option for you!
            </p>
          </section>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default TermLoan;
