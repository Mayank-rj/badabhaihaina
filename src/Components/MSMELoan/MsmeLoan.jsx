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

const MsmeLoan = () => {
  return (
    <div className="bg-gradient-to-br min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-700 bg-blue-200 py-4 px-6 rounded-lg shadow-md mb-16 animate-bounce-in">
          MSME Loans: Empowering Small and Medium Enterprises
        </h1>

        <Cta
          heading="Tailored Financial Support for MSMEs"
          message="With MSME loans, small businesses can access the funds needed for growth, innovation, and sustainability. Take the next step toward achieving your business dreams with customized financing solutions."
        />

        {/* Introduction */}
        <AnimatedSection animationClass="animate-slide-in-left">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              What is an MSME Loan?
            </h2>
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0">
              <img
                src="/images/msme-loan/01.jpg"
                alt="MSME Loan Overview"
                className="w-full max-w-2xl h-auto mb-4 md:mb-0 md:mr-6 rounded-lg shadow-xl"
              />
              <p className="text-gray-700 text-lg leading-relaxed mt-4">
                <strong className="text-blue-700">MSME Loans</strong> are
                specifically designed to provide financial support to Micro,
                Small, and Medium Enterprises (MSMEs). These loans are tailored
                to meet the unique requirements of businesses, such as
                purchasing machinery, expanding operations, or managing working
                capital. MSME loans aim to promote entrepreneurship and boost
                economic growth.
              </p>
            </div>
          </section>
        </AnimatedSection>

        {/* Benefits of MSME Loans */}
        <AnimatedSection animationClass="animate-slide-in-right">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 mb-10">
              Why Choose an MSME Loan?
            </h2>
            <div className="flex flex-col md:flex-row-reverse items-center md:items-start space-y-6 md:space-y-0">
              <ul className="text-gray-700 text-lg leading-relaxed list-disc pl-5">
                <li>
                  <strong className="text-blue-700">
                    Affordable Interest Rates
                  </strong>
                  : MSME loans often have lower interest rates compared to other
                  types of loans.
                </li>
                <li>
                  <strong className="text-blue-700">Easy Accessibility</strong>:
                  Financial institutions provide customized schemes to make
                  loans accessible to small businesses.
                </li>
                <li>
                  <strong className="text-blue-700">
                    Collateral-Free Options
                  </strong>
                  : Many MSME loans are unsecured, requiring no collateral.
                </li>
                <li>
                  <strong className="text-blue-700">Government Support</strong>:
                  Various government initiatives and subsidies are available to
                  support MSMEs.
                </li>
              </ul>
            </div>
          </section>
        </AnimatedSection>

        {/* How MSME Loans Help Businesses */}
        <AnimatedSection animationClass="animate-fade-in">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              How Do MSME Loans Benefit Your Business?
            </h2>
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0">
              <img
                src="/images/msme-loan/02.jpg"
                alt="MSME Loan Benefits"
                className="w-full max-w-xs h-auto mb-4 md:mb-0 md:ml-6 rounded-lg shadow-xl"
              />
              <ul className="text-lg text-gray-700 leading-relaxed space-y-4 mt-4">
                <li>
                  <strong className="text-blue-700">Business Expansion:</strong>{" "}
                  Use funds to open new branches, hire more staff, or enter new
                  markets.
                </li>
                <li>
                  <strong className="text-blue-700">
                    Infrastructure Development:
                  </strong>{" "}
                  Invest in modern infrastructure or upgrade existing
                  facilities.
                </li>
                <li>
                  <strong className="text-blue-700">Machinery Purchase:</strong>{" "}
                  Acquire advanced machinery or technology to boost
                  productivity.
                </li>
                <li>
                  <strong className="text-blue-700">Working Capital:</strong>{" "}
                  Ensure smooth day-to-day operations without financial strain.
                </li>
              </ul>
            </div>
          </section>
        </AnimatedSection>

        {/* Eligibility Criteria */}
        <AnimatedSection animationClass="animate-slide-in-left">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              Who Can Apply for an MSME Loan?
            </h2>
            <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0">
              <ol className="list-decimal list-inside text-lg text-gray-700 leading-relaxed mt-4 md:mr-6">
                <li>
                  Businesses registered as Micro, Small, or Medium Enterprises.
                </li>
                <li>Startups and entrepreneurs with a clear business plan.</li>
                <li>
                  Organizations with a valid business license and registration.
                </li>
                <li>
                  Applicants with a good credit score and financial track
                  record.
                </li>
              </ol>
            </div>
          </section>
        </AnimatedSection>

        {/* Popular Providers */}
        <AnimatedSection animationClass="animate-fade-in">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              Leading MSME Loan Providers in India
            </h2>
            <div className="flex flex-col items-center space-y-6">
              <img
                src="/images/msme-loan/03.jpg"
                alt="Leading MSME Providers"
                className="w-full h-auto rounded-lg shadow-xl max-w-xl"
              />
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed mt-4">
                <li>
                  <strong className="text-blue-700">SIDBI:</strong> Specialized
                  financial institution for MSMEs.
                </li>
                <li>
                  <strong className="text-blue-700">HDFC Bank:</strong> Offers
                  tailored solutions for small businesses.
                </li>
                <li>
                  <strong className="text-blue-700">ICICI Bank:</strong>{" "}
                  Provides flexible loan terms and quick disbursal.
                </li>
                <li>
                  <strong className="text-blue-700">
                    State Bank of India (SBI):
                  </strong>{" "}
                  Known for government-supported MSME schemes.
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
              <strong className="text-blue-700">MSME Loans</strong> are a
              lifeline for small businesses seeking to grow, innovate, and
              succeed. With tailored loan options, flexible repayment terms, and
              support from financial institutions, MSMEs can achieve their goals
              and make a lasting impact. Start your journey today by exploring
              the best MSME loan options for your business.
            </p>
          </section>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default MsmeLoan;
