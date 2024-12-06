import { useInView } from "react-intersection-observer";
import { Cta } from "../../cta/Cta";

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

const CorporateInsurance = () => {
  return (
    <div className="bg-gradient-to-br min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-700 bg-blue-200 py-4 px-6 rounded-lg shadow-md mb-16 animate-bounce-in">
          Corporate Insurance: Safeguarding Your Business Assets
        </h1>

        <Cta
          heading="Tailored Solutions for Your Business"
          message="Corporate insurance offers a range of solutions to meet diverse business needs. Secure your company’s future with plans that provide robust protection and peace of mind."
        />

        {/* Introduction */}
        <AnimatedSection animationClass="animate-slide-in-left">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              What is Corporate Insurance?
            </h2>
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0">
              <img
                src="/images/corporate insurance/01.jpg"
                alt="Corporate Insurance Overview"
                className="w-full max-w-2xl h-auto mb-4 md:mb-0 md:mr-6 rounded-lg shadow-xl"
              />
              <p className="text-gray-700 text-lg leading-relaxed mt-4">
                <strong className="text-blue-700">Corporate Insurance</strong>{" "}
                is a comprehensive insurance solution designed to protect
                businesses from potential financial losses caused by property
                damage, liability, employee risks, and other unforeseen events.
                Tailored policies help companies mitigate risks and ensure
                business continuity.
              </p>
            </div>
          </section>
        </AnimatedSection>

        {/* Why Corporate Insurance? */}
        <AnimatedSection animationClass="animate-slide-in-right">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 mb-10">
              Why is Corporate Insurance Important?
            </h2>
            <div className="flex flex-col md:flex-row-reverse items-center md:items-start space-y-6 md:space-y-0">
              <ul className="text-gray-700 text-lg leading-relaxed list-disc pl-5">
                <li>
                  <strong className="text-blue-700">
                    Business Continuity:
                  </strong>{" "}
                  Protects against operational disruptions caused by natural
                  disasters, accidents, or theft.
                </li>
                <li>
                  <strong className="text-blue-700">
                    Employee Protection:
                  </strong>{" "}
                  Covers employee-related risks, such as health issues or
                  workplace accidents.
                </li>
                <li>
                  <strong className="text-blue-700">Legal Liability:</strong>{" "}
                  Safeguards against lawsuits related to product liability,
                  professional errors, or public liability.
                </li>
                <li>
                  <strong className="text-blue-700">Asset Protection:</strong>{" "}
                  Ensures compensation for damage to physical assets like
                  buildings, equipment, or inventory.
                </li>
              </ul>
            </div>
          </section>
        </AnimatedSection>

        {/* Types of Corporate Insurance */}
        <AnimatedSection animationClass="animate-fade-in">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              Types of Corporate Insurance Policies
            </h2>
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0">
              <img
                src="/images/corporate insurance/02.jpg"
                alt="Corporate Insurance Types"
                className="w-full max-w-xs h-auto mr-5 mb-4 md:mb-0 md:ml-6 rounded-lg shadow-xl"
              />
              <ul className="text-lg text-gray-700 leading-relaxed space-y-4 mt-4">
                <li>
                  <strong className="text-blue-700">Property Insurance:</strong>{" "}
                  Covers damage to physical assets like buildings, equipment,
                  and inventory.
                </li>
                <li>
                  <strong className="text-blue-700">
                    Liability Insurance:
                  </strong>{" "}
                  Protects against claims arising from negligence or harm caused
                  to third parties.
                </li>
                <li>
                  <strong className="text-blue-700">Employee Benefits:</strong>{" "}
                  Offers health insurance, retirement plans, and other benefits
                  for employees.
                </li>
                <li>
                  <strong className="text-blue-700">Cyber Insurance:</strong>{" "}
                  Provides coverage for data breaches and cyberattacks.
                </li>
                <li>
                  <strong className="text-blue-700">
                    Business Interruption:
                  </strong>{" "}
                  Compensates for lost income due to disruptions caused by
                  insured events.
                </li>
              </ul>
            </div>
          </section>
        </AnimatedSection>

        {/* Steps to Choose a Policy */}
        <AnimatedSection animationClass="animate-slide-in-left">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              Steps to Select the Right Policy
            </h2>
            <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0">
              <ol className="list-decimal list-inside text-lg text-gray-700 leading-relaxed mt-4 md:mr-6">
                <li>Evaluate your business’s specific risks and needs.</li>
                <li>
                  Compare different insurance policies to identify the best
                  coverage.
                </li>
                <li>
                  Check the claim settlement ratio and reputation of the
                  insurer.
                </li>
                <li>
                  Ensure the policy includes adequate coverage for liability,
                  assets, and employee welfare.
                </li>
                <li>
                  Consult with experts or brokers for tailored advice and
                  recommendations.
                </li>
              </ol>
            </div>
          </section>
        </AnimatedSection>

        {/* Leading Providers */}
        <AnimatedSection animationClass="animate-fade-in">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              Top Corporate Insurance Providers in India
            </h2>
            <div className="flex flex-col items-center space-y-6">
              <img
                src="/images/corporate insurance/03.jpg"
                alt="Top Providers"
                className="w-full h-auto rounded-lg shadow-xl max-w-xl"
              />
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed mt-4">
                <li>
                  <strong className="text-blue-700">Tata AIG:</strong> Known for
                  comprehensive corporate insurance solutions and excellent
                  service.
                </li>
                <li>
                  <strong className="text-blue-700">ICICI Lombard:</strong>{" "}
                  Provides a range of tailored plans for businesses of all
                  sizes.
                </li>
                <li>
                  <strong className="text-blue-700">
                    New India Assurance:
                  </strong>{" "}
                  Offers reliable policies for property, liability, and employee
                  coverage.
                </li>
                <li>
                  <strong className="text-blue-700">HDFC ERGO:</strong> Known
                  for innovative corporate insurance products and competitive
                  premiums.
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
              Corporate insurance is a vital investment for safeguarding your
              business against potential risks and financial losses. Choose the
              right policy to ensure your company’s long-term growth and
              stability. Get started today to secure your business’s future!
            </p>
          </section>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default CorporateInsurance;
