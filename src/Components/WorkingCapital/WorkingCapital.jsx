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

const WorkingCapital = () => {
  return (
    <div className="bg-gradient-to-br min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-700 bg-blue-200 py-4 px-6 rounded-lg shadow-md mb-16 animate-bounce-in">
          Working Capital Loans: Powering Your Business Growth
        </h1>

        {/* Introduction */}
        <AnimatedSection animationClass="animate-slide-in-left">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              What Are Working Capital Loans?
            </h2>
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0">
              <img
                src="/images/working-capital/01.jpg"
                alt="Working Capital Overview"
                className="w-full max-w-2xl h-auto mb-4 md:mb-0 md:mr-6 rounded-lg shadow-xl"
              />
              <p className="text-gray-700 text-lg leading-relaxed mt-4">
                A <strong className="text-blue-700">Working Capital Loan</strong> is designed to help businesses cover their day-to-day operational expenses. These loans are ideal for managing cash flow, purchasing inventory, or bridging gaps during financial crunches. With flexible repayment options, working capital loans ensure that your business continues running smoothly even in challenging times.
              </p>
            </div>
          </section>
        </AnimatedSection>

        {/* Benefits of Working Capital Loans */}
        <AnimatedSection animationClass="animate-slide-in-right">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 mb-10">
              Why Consider a Working Capital Loan?
            </h2>
            <div className="flex flex-col md:flex-row-reverse items-center md:items-start space-y-6 md:space-y-0">
              <ul className="text-gray-700 text-lg leading-relaxed list-disc pl-5">
                <li>
                  <strong className="text-blue-700">
                    Maintain Business Continuity
                  </strong>
                  : Helps bridge short-term gaps in cash flow and ensures smooth operations.
                </li>
                <li>
                  <strong className="text-blue-700">
                    Quick Access to Funds
                  </strong>
                  : Offers rapid disbursal to address urgent business needs.
                </li>
                <li>
                  <strong className="text-blue-700">
                    No Collateral Required
                  </strong>
                  : Many working capital loans are unsecured, removing the need for collateral.
                </li>
                <li>
                  <strong className="text-blue-700">
                    Flexible Usage
                  </strong>
                  : Funds can be used for diverse purposes, including payroll, inventory, and vendor payments.
                </li>
              </ul>
            </div>
          </section>
        </AnimatedSection>

        <Cta
          heading="Tailored Solutions for Growing Businesses"
          message="Working capital loans are tailored to support businesses of all sizes. With flexible terms and competitive interest rates, they provide the financial cushion you need to navigate business challenges effectively."
        />

        {/* How to Use Working Capital Loans */}
        <AnimatedSection animationClass="animate-fade-in">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              How Can You Use a Working Capital Loan?
            </h2>
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0">
              <img
                src="/images/working-capital/02.jpg"
                alt="Uses of Working Capital Loan"
                className="w-full max-w-xs h-auto mb-4 md:mb-0 md:ml-6 rounded-lg shadow-xl"
              />
              <ul className="text-lg text-gray-700 leading-relaxed space-y-4 mt-4">
                <li>
                  <strong className="text-blue-700">Inventory Management:</strong>{" "}
                  Purchase raw materials or stock up on inventory during peak demand periods.
                </li>
                <li>
                  <strong className="text-blue-700">Payroll Support:</strong>{" "}
                  Ensure timely payment of employee salaries without disruption.
                </li>
                <li>
                  <strong className="text-blue-700">Seasonal Expenses:</strong>{" "}
                  Cover the additional expenses that arise during festive or peak seasons.
                </li>
                <li>
                  <strong className="text-blue-700">Operational Costs:</strong>{" "}
                  Pay for utilities, rent, and other day-to-day expenses.
                </li>
              </ul>
            </div>
          </section>
        </AnimatedSection>

        {/* Eligibility and Tips */}
        <AnimatedSection animationClass="animate-slide-in-left">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              Eligibility Criteria & Tips for Approval
            </h2>
            <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0">
              <ol className="list-decimal list-inside text-lg text-gray-700 leading-relaxed mt-4 md:mr-6">
                <li>
                  Maintain a strong credit score to enhance your chances of approval.
                </li>
                <li>
                  Ensure your business has consistent cash flow and financial stability.
                </li>
                <li>
                  Prepare essential documents such as business registration, income tax returns, and bank statements.
                </li>
                <li>
                  Compare lenders to find competitive interest rates and repayment terms.
                </li>
              </ol>
            </div>
          </section>
        </AnimatedSection>

        {/* Popular Providers */}
        <AnimatedSection animationClass="animate-fade-in">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              Top Working Capital Loan Providers in India
            </h2>
            <div className="flex flex-col items-center space-y-6">
              <img
                src="/images/working-capital/03.jpg"
                alt="Top Providers"
                className="w-full h-auto rounded-lg shadow-xl max-w-xl"
              />
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed mt-4">
                <li>
                  <strong className="text-blue-700">HDFC Bank:</strong> Known for fast processing and attractive rates.
                </li>
                <li>
                  <strong className="text-blue-700">ICICI Bank:</strong> Offers customizable repayment options for businesses.
                </li>
                <li>
                  <strong className="text-blue-700">SBI:</strong> Provides working capital solutions with long tenures.
                </li>
                <li>
                  <strong className="text-blue-700">Bajaj Finserv:</strong> Focuses on quick approval and minimal documentation.
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
              A <strong className="text-blue-700">Working Capital Loan</strong>{" "}
              can empower your business to thrive even in uncertain times. By
              addressing short-term financial needs, you can focus on strategic
              growth and long-term success. Contact us today to discover the best working capital solutions tailored to your needs.
            </p>
          </section>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default WorkingCapital;
