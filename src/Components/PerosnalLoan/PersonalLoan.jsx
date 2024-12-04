import { useInView } from "react-intersection-observer";
import { Cta } from "../cta/Cta";

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

const PersonalLoan = () => {
  return (
    <div className="bg-gradient-to-br min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center text-blue-700 bg-blue-200 py-4 px-6 rounded-lg shadow-md mb-16 animate-bounce-in">
          Personal Loan: Your Financial Freedom, Simplified
        </h1>

        <Cta
          heading=" Your Financial Companion for Every Need"
          message="With minimal documentation, flexible repayment options, and quick disbursement, personal loans are ideal for meeting short-term or urgent financial requirements."
        />

        {/* Introduction */}
        <AnimatedSection animationClass="animate-slide-in-left">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              Introduction
            </h2>
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0">
              <img
                src="/images/personal loan/01.jpg"
                alt="Personal Loan Introduction"
                className="w-full max-w-xs h-auto mb-4 md:mb-0 md:mr-6 rounded-lg shadow-xl"
              />
              <p className="text-gray-700 text-lg leading-relaxed mt-4">
                A personal loan is a versatile financial tool designed to meet
                your immediate monetary needs. Whether it's for a wedding,
                travel, medical emergencies, or debt consolidation, personal
                loans provide quick access to funds without requiring
                collateral. With competitive interest rates and flexible
                repayment options, personal loans are an ideal choice for
                fulfilling short-term financial goals.
              </p>
            </div>
          </section>
        </AnimatedSection>

        {/* Why Choose a Personal Loan? */}
        <AnimatedSection animationClass="animate-slide-in-right">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 mb-10">
              Why Choose a Personal Loan?
            </h2>
            <ul className="space-y-4 text-lg text-gray-700 leading-relaxed mt-4 md:mr-6">
              <li>
                <strong className="text-blue-700">
                  1. Quick and Easy Access:
                </strong>{" "}
                Enjoy hassle-free processing with minimal documentation.
              </li>
              <li>
                <strong className="text-blue-700">
                  2. No Collateral Needed:
                </strong>{" "}
                Avail of loans without pledging any assets or property.
              </li>
              <li>
                <strong className="text-blue-700">
                  3. Multi-Purpose Usage:
                </strong>{" "}
                Use funds for weddings, education, vacations, or any other
                personal needs.
              </li>
              <li>
                <strong className="text-blue-700">4. Flexible Tenures:</strong>{" "}
                Choose repayment periods ranging from 1 to 5 years as per your
                convenience.
              </li>
            </ul>
          </section>
        </AnimatedSection>

        {/* Types of Personal Loans */}
        <AnimatedSection animationClass="animate-fade-in">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              Types of Personal Loans
            </h2>
            <div className="flex flex-col md:flex-row-reverse items-center md:items-start space-y-6 md:space-y-0">
              <img
                src="/images/personal loan/02.jpg"
                alt="Types of Personal Loans"
                className="w-full max-w-xs h-auto mb-4 md:mb-0 md:ml-6 rounded-lg shadow-xl"
              />
              <ul className="space-y-4 text-lg text-gray-700 leading-relaxed mt-4 md:mr-6">
                <li>
                  <strong className="text-blue-700">1. Wedding Loan:</strong>{" "}
                  Fund your dream wedding without financial constraints.
                </li>
                <li>
                  <strong className="text-blue-700">
                    2. Medical Emergency Loan:
                  </strong>{" "}
                  Cover unexpected healthcare expenses promptly.
                </li>
                <li>
                  <strong className="text-blue-700">3. Travel Loan:</strong>{" "}
                  Plan your dream vacation without breaking the bank.
                </li>
                <li>
                  <strong className="text-blue-700">
                    4. Debt Consolidation Loan:
                  </strong>{" "}
                  Combine multiple debts into a single, manageable loan.
                </li>
              </ul>
            </div>
          </section>
        </AnimatedSection>

        {/* Steps to Apply */}
        <AnimatedSection animationClass="animate-slide-in-left">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              Steps to Apply for a Personal Loan
            </h2>
            <ol className="list-decimal list-inside text-lg text-gray-700 leading-relaxed mt-4 md:mr-6">
              <li>Compare lenders for the best offers.</li>
              <li>Check your eligibility and loan amount.</li>
              <li>
                Submit the application form with required documents such as ID,
                address, and income proof.
              </li>
              <li>
                Wait for approval and receive disbursal directly in your
                account.
              </li>
            </ol>
          </section>
        </AnimatedSection>

        {/* Tips for Best Deal */}
        <AnimatedSection animationClass="animate-fade-in">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              Tips to Get the Best Deal
            </h2>
            <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed">
              <li>
                <strong className="text-blue-700">
                  Improve Your CIBIL Score:
                </strong>{" "}
                A score above 750 ensures better offers.
              </li>
              <li>
                <strong className="text-blue-700">Compare Offers:</strong> Use
                online tools to find the best interest rates.
              </li>
              <li>
                <strong className="text-blue-700">Borrow Responsibly:</strong>{" "}
                Only borrow what you can repay comfortably.
              </li>
            </ul>
          </section>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default PersonalLoan;
