import { useInView } from "react-intersection-observer";
// import "./CompareLoanAgainstProperty.css";

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

const CompareLoanAgainstProp = () => {
  return (
    <div className="bg-gradient-to-br min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-700 bg-blue-200 py-4 px-6 rounded-lg shadow-md mb-16 animate-bounce-in">
          Compare Loan Against Property Rates: Unlock the Value of Your Assets
        </h1>

        {/* Introduction */}
        <AnimatedSection animationClass="animate-slide-in-left">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              Introduction
            </h2>
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0">
              <img
                src="/images/compare loan against property Rate/01.jpg"
                alt="Loan Against Property Guide"
                className="w-full max-w-2xl h-auto mb-4 md:mb-0 md:mr-6 rounded-lg shadow-xl"
              />
              <p className="text-gray-700 text-lg leading-relaxed mt-4">
                A Loan Against Property (LAP) is a secured loan where you
                leverage the value of your property to meet financial
                requirements. This option often comes with lower interest rates
                compared to unsecured loans. Comparing LAP rates ensures you
                unlock the best deal while keeping your repayment manageable.
              </p>
            </div>
          </section>
        </AnimatedSection>

        {/* Why Compare Loan Against Property Rates? */}
        <AnimatedSection animationClass="animate-slide-in-right">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 mb-10">
              Why Compare Loan Against Property Rates?
            </h2>
            <div className="flex flex-col md:flex-row-reverse items-center md:items-start space-y-6 md:space-y-0">
              <ul className="text-gray-700 text-lg leading-relaxed list-disc pl-5">
                <li>
                  Secure Competitive Rates: Lower interest rates mean smaller
                  EMIs and reduced total interest paid over the loan tenure.
                </li>
                <li>
                  Understand Terms and Conditions: Comparing helps you
                  understand prepayment penalties, tenure flexibility, and
                  hidden charges.
                </li>
                <li>
                  Maximize Loan-to-Value Ratio: Choose lenders offering the
                  highest percentage of your property value as a loan.
                </li>
                <li>
                  Identify Additional Benefits: Some lenders offer top-up loans,
                  balance transfers, and other perks for borrowers.
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
                src="/images/compare loan against property Rate/02.jpg"
                alt="Key Factors for Loan Against Property"
                className="w-full max-w-xs h-auto mb-4 md:mb-0 md:ml-6 rounded-lg shadow-xl"
              />
              <ul className="space-y-4 text-lg text-gray-700 leading-relaxed mt-4 md:mr-6">
                <li>
                  <strong className="text-blue-700">Interest Rates:</strong> LAP
                  rates vary between lenders. Choose between fixed or floating
                  rates based on your financial goals.
                </li>
                <li>
                  <strong className="text-blue-700">
                    Loan-to-Value (LTV):
                  </strong>
                  Check the maximum loan amount you can secure based on your
                  property value.
                </li>
                <li>
                  <strong className="text-blue-700">
                    Processing Fees and Charges:
                  </strong>
                  Look for lenders offering low or waived processing fees.
                </li>
                <li>
                  <strong className="text-blue-700">
                    Repayment Flexibility:
                  </strong>
                  Evaluate loan tenures and prepayment options for added
                  convenience.
                </li>
                <li>
                  <strong className="text-blue-700">
                    Eligibility Criteria:
                  </strong>
                  Check income, credit score, and property ownership
                  requirements for different lenders.
                </li>
              </ul>
            </div>
          </section>
        </AnimatedSection>

        {/* Steps to Compare */}
        <AnimatedSection animationClass="animate-slide-in-left">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              Steps to Compare Loan Against Property Rates
            </h2>
            <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0">
              <ol className="list-decimal list-inside text-lg text-gray-700 leading-relaxed mt-4 md:mr-6">
                <li>
                  Use Comparison Tools: Evaluate LAP options side-by-side using
                  online calculators.
                </li>
                <li>
                  Check Lender Policies: Review foreclosure terms, processing
                  charges, and penalties for prepayment.
                </li>
                <li>
                  Assess EMI Affordability: Ensure the EMI fits comfortably
                  within your monthly budget.
                </li>
                <li>
                  Review Customer Feedback: Check reviews and experiences of
                  borrowers with various lenders.
                </li>
              </ol>
            </div>
          </section>
        </AnimatedSection>

        {/* Popular LAP Schemes */}
        <AnimatedSection animationClass="animate-fade-in">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              Popular Loan Against Property Schemes
            </h2>
            <div className="flex flex-col items-center space-y-6">
              <img
                src="/images/compare loan against property Rate/03.jpg"
                alt="Popular LAP Schemes"
                className="w-full h-auto rounded-lg shadow-xl max-w-xl"
              />
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed mt-4">
                <li>
                  <strong className="text-blue-700">SBI LAP:</strong>
                  Competitive rates with flexible repayment options.
                </li>
                <li>
                  <strong className="text-blue-700">
                    HDFC Property Loans:
                  </strong>
                  Tailored solutions for self-employed and salaried individuals.
                </li>
                <li>
                  <strong className="text-blue-700">Axis Bank LAP:</strong>
                  Attractive rates with top-up loan options.
                </li>
                <li>
                  <strong className="text-blue-700">ICICI Bank LAP:</strong> Low
                  processing fees and hassle-free approval process.
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
              Comparing Loan Against Property rates is vital to secure the most
              affordable deal. By exploring your options and assessing key
              factors, you can unlock the maximum value of your property while
              maintaining manageable repayments. For expert assistance in
              finding the best LAP option, reach out to us today!
            </p>
          </section>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default CompareLoanAgainstProp;
