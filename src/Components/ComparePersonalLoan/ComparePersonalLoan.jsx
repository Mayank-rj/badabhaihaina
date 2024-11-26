import { useInView } from "react-intersection-observer";
// import "./ComparePersonalLoan.css";

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

const ComparePersonalLoan = () => {
  return (
    <div className="bg-gradient-to-br min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-700 bg-blue-200 py-4 px-6 rounded-lg shadow-md mb-16 animate-bounce-in">
          Compare Personal Loan Rates: Choose the Best Option for Your Needs
        </h1>

        {/* Introduction */}
        <AnimatedSection animationClass="animate-slide-in-left">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              Introduction
            </h2>
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0">
              <img
                src="/images/compare personal loan/01.jpg"
                alt="Personal Loan Guide"
                className="w-full max-w-2xl h-auto mb-4 md:mb-0 md:mr-6 rounded-lg shadow-xl"
              />
              <p className="text-gray-700 text-lg leading-relaxed mt-4">
                Personal loans are versatile financial tools for meeting
                unexpected expenses, debt consolidation, or funding big-ticket
                purchases. With numerous lenders offering varying interest
                rates, fees, and features, comparing personal loan rates is
                essential to find the most affordable and beneficial option.
              </p>
            </div>
          </section>
        </AnimatedSection>

        {/* Why Compare Personal Loan Rates */}
        <AnimatedSection animationClass="animate-slide-in-right">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 mb-10">
              Why Compare Personal Loan Rates?
            </h2>
            <div className="flex flex-col md:flex-row-reverse items-center md:items-start space-y-6 md:space-y-0">
              <ul className="text-gray-700 text-lg leading-relaxed list-disc pl-5">
                <li>
                  <strong>Lower Your EMI:</strong> A small difference in
                  interest rates can significantly reduce your monthly EMI
                  payments, making the loan more affordable.
                </li>
                <li>
                  <strong>Minimize Hidden Costs:</strong> Compare fees like
                  processing charges, prepayment penalties, and late payment
                  fees to avoid unpleasant surprises.
                </li>
                <li>
                  <strong>Identify Flexible Features:</strong> Some lenders
                  offer features like zero foreclosure charges or flexible
                  repayment options. Comparing helps you choose loans with
                  favorable terms.
                </li>
                <li>
                  <strong>Maximize Benefits:</strong> Some loans come with perks
                  like cashback, free insurance, or balance transfer options.
                  Comparing ensures you don’t miss out on these advantages.
                </li>
              </ul>
            </div>
          </section>
        </AnimatedSection>

        {/* Key Factors */}
        <AnimatedSection animationClass="animate-fade-in">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              Key Factors to Compare
            </h2>
            <div className="flex flex-col md:flex-row-reverse items-center md:items-start space-y-6 md:space-y-0">
              <img
                src="/images/compare personal loan/02.jpg"
                alt="Key Factors"
                className="w-full max-w-xs h-auto mb-4 md:mb-0 md:ml-6 rounded-lg shadow-xl"
              />
              <ul className="space-y-4 text-lg text-gray-700 leading-relaxed mt-4 md:mr-6">
                <li>
                  <strong className="text-blue-700">Interest Rates:</strong> Opt
                  for loans with lower rates to reduce total interest costs.
                </li>
                <li>
                  <strong className="text-blue-700">Loan Tenure:</strong> Choose
                  a tenure that offers a comfortable balance between EMI and
                  overall cost.
                </li>
                <li>
                  <strong className="text-blue-700">Processing Fees:</strong>{" "}
                  Compare processing fees, which may vary from 1% to 3% of the
                  loan amount.
                </li>
                <li>
                  <strong className="text-blue-700">Prepayment Terms:</strong>{" "}
                  Ensure the lender allows prepayment with minimal or no
                  penalties.
                </li>
                <li>
                  <strong className="text-blue-700">
                    Eligibility Criteria:
                  </strong>{" "}
                  Verify requirements such as income, employment, and credit
                  score to identify suitable options.
                </li>
              </ul>
            </div>
          </section>
        </AnimatedSection>

        {/* Steps to Compare */}
        <AnimatedSection animationClass="animate-slide-in-left">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              Steps to Compare Personal Loans
            </h2>
            <ol className="list-decimal list-inside text-lg text-gray-700 leading-relaxed mt-4 md:mr-6">
              <li>
                Research Lenders: Gather information on various lenders, their
                interest rates, and features.
              </li>
              <li>
                Use Loan Calculators: Check EMI affordability and interest
                impact using online tools.
              </li>
              <li>
                Assess Repayment Options: Look for flexible repayment plans that
                fit your budget.
              </li>
              <li>
                Review Customer Feedback: Read reviews and testimonials to
                ensure lender reliability.
              </li>
            </ol>
          </section>
        </AnimatedSection>

        {/* Popular Schemes */}
        <AnimatedSection animationClass="animate-fade-in">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              Popular Personal Loan Schemes in India
            </h2>
            <div className="flex flex-col items-center space-y-6">
              <img
                src="/images/compare personal loan/03.jpg"
                alt="Popular Schemes"
                className="w-full h-auto rounded-lg shadow-xl max-w-xl"
              />
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed mt-4">
                <li>
                  <strong>SBI Xpress Credit:</strong> Competitive interest rates
                  with minimal documentation.
                </li>
                <li>
                  <strong>HDFC Personal Loan:</strong> Flexible tenure options
                  and instant approvals.
                </li>
                <li>
                  <strong>ICICI Personal Loan:</strong> Loans for salaried and
                  self-employed individuals with attractive rates.
                </li>
                <li>
                  <strong>Axis Bank Personal Loan:</strong> Quick disbursal and
                  zero foreclosure charges on select plans.
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
              Comparing personal loans ensures you secure the best deal tailored
              to your financial needs. Take time to analyze your options and
              make informed decisions for a stress-free borrowing experience.
              Contact us for expert advice on finding the perfect loan for you!
            </p>
          </section>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default ComparePersonalLoan;
