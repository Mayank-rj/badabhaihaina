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

const TwoWheelerInsurance = () => {
  return (
    <div className="bg-gradient-to-br min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-700 bg-blue-200 py-4 px-6 rounded-lg shadow-md mb-16 animate-bounce-in">
          Two-Wheeler Insurance: Protect Your Ride
        </h1>

        <Cta
          heading="Ride with Confidence"
          message="Ensure your two-wheeler is protected from accidents, theft, and damages. Choose the right two-wheeler insurance policy today and enjoy a worry-free ride!"
        />

        {/* Introduction */}
        <AnimatedSection animationClass="animate-slide-in-left">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              What is Two-Wheeler Insurance?
            </h2>
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0">
              <img
                src="/images/two-wheeler-insurance/01.jpg"
                alt="Two-Wheeler Insurance Overview"
                className="w-full max-w-2xl h-auto mb-4 md:mb-0 md:mr-6 rounded-lg shadow-xl"
              />
              <p className="text-gray-700 text-lg leading-relaxed mt-4">
                <strong className="text-blue-700">Two-Wheeler Insurance</strong>{" "}
                is a policy designed to protect your motorcycle or scooter from
                damages, accidents, and theft. It provides financial coverage
                for both third-party liabilities and own damages. In India, it
                is mandatory by law to have at least third-party liability
                coverage for your two-wheeler.
              </p>
            </div>
          </section>
        </AnimatedSection>

        {/* Why Two-Wheeler Insurance? */}
        <AnimatedSection animationClass="animate-slide-in-right">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 mb-10">
              Why Do You Need Two-Wheeler Insurance?
            </h2>
            <div className="flex flex-col md:flex-row-reverse items-center md:items-start space-y-6 md:space-y-0">
              <ul className="text-gray-700 text-lg leading-relaxed list-disc pl-5">
                <li>
                  <strong className="text-blue-700">Legal Requirement:</strong>{" "}
                  As per Indian law, it is mandatory to have at least
                  third-party liability insurance for your two-wheeler.
                </li>
                <li>
                  <strong className="text-blue-700">
                    Protection Against Accidents:
                  </strong>{" "}
                  Two-wheeler insurance provides coverage for accidental damages
                  to your vehicle and injuries to yourself or third parties.
                </li>
                <li>
                  <strong className="text-blue-700">Theft Coverage:</strong>{" "}
                  Protects against theft, offering compensation if your bike or
                  scooter is stolen.
                </li>
                <li>
                  <strong className="text-blue-700">Financial Security:</strong>{" "}
                  Helps manage the financial burden caused by repairs or
                  replacement after an accident or damage to your two-wheeler.
                </li>
              </ul>
            </div>
          </section>
        </AnimatedSection>

        {/* Types of Two-Wheeler Insurance */}
        <AnimatedSection animationClass="animate-fade-in">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              Types of Two-Wheeler Insurance
            </h2>
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0">
              <img
                src="/images/two-wheeler-insurance/02.jpg"
                alt="Types of Two-Wheeler Insurance"
                className="w-full max-w-xs h-auto mb-4 md:mb-0 md:ml-6 rounded-lg shadow-xl"
              />
              <ul className="text-lg text-gray-700 leading-relaxed space-y-4 mt-4">
                <li>
                  <strong className="text-blue-700">
                    Third-Party Liability Insurance:
                  </strong>{" "}
                  Covers damages to third parties involved in an accident with
                  your two-wheeler, including injury, death, and property
                  damage.
                </li>
                <li>
                  <strong className="text-blue-700">
                    Comprehensive Insurance:
                  </strong>{" "}
                  Offers both third-party liability and own damage coverage,
                  including repairs to your vehicle in case of accidents,
                  natural disasters, or vandalism.
                </li>
                <li>
                  <strong className="text-blue-700">
                    Own Damage Insurance:
                  </strong>{" "}
                  Provides protection for damages to your own two-wheeler caused
                  by accidents, fire, or natural disasters, without third-party
                  coverage.
                </li>
                <li>
                  <strong className="text-blue-700">
                    Standalone Own Damage Cover:
                  </strong>{" "}
                  A standalone plan offering coverage for damages to your
                  vehicle without third-party liability.
                </li>
              </ul>
            </div>
          </section>
        </AnimatedSection>

        {/* How to Choose the Right Two-Wheeler Insurance */}
        <AnimatedSection animationClass="animate-slide-in-left">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              How to Choose the Right Two-Wheeler Insurance
            </h2>
            <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0">
              <ol className="list-decimal list-inside text-lg text-gray-700 leading-relaxed mt-4 md:mr-6">
                <li>
                  Assess the level of coverage you need based on your
                  two-wheeler’s value and usage.
                </li>
                <li>
                  Compare premiums, deductibles, and coverage limits across
                  different insurance providers.
                </li>
                <li>
                  Check for additional benefits such as roadside assistance,
                  engine protection, and key replacement.
                </li>
                <li>
                  Review customer support and claim settlement ratios to ensure
                  prompt assistance when needed.
                </li>
                <li>
                  Consider opting for a long-term policy for discounts and
                  hassle-free renewal.
                </li>
              </ol>
            </div>
          </section>
        </AnimatedSection>

        {/* Leading Two-Wheeler Insurance Providers */}
        <AnimatedSection animationClass="animate-fade-in">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              Leading Two-Wheeler Insurance Providers
            </h2>
            <div className="flex flex-col items-center space-y-6">
              <img
                src="/images/two-wheeler-insurance/03.jpg"
                alt="Top Two-Wheeler Insurance Providers"
                className="w-full h-auto rounded-lg shadow-xl max-w-xl"
              />
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed mt-4">
                <li>
                  <strong className="text-blue-700">
                    Bajaj Allianz Two-Wheeler Insurance:
                  </strong>{" "}
                  Known for its comprehensive coverage and prompt claim
                  settlement.
                </li>
                <li>
                  <strong className="text-blue-700">
                    HDFC ERGO Two-Wheeler Insurance:
                  </strong>{" "}
                  Offers competitive premiums with a wide range of add-ons like
                  zero depreciation and personal accident coverage.
                </li>
                <li>
                  <strong className="text-blue-700">
                    ICICI Lombard Two-Wheeler Insurance:
                  </strong>{" "}
                  Provides extensive coverage, including protection against
                  theft, natural calamities, and man-made damages.
                </li>
                <li>
                  <strong className="text-blue-700">
                    New India Assurance Two-Wheeler Insurance:
                  </strong>{" "}
                  Offers affordable premiums with multiple coverage options and
                  customer-friendly services.
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
              Two-wheeler insurance is essential for ensuring the safety and
              security of your bike or scooter. Whether you're looking for basic
              third-party coverage or a comprehensive policy, it is important to
              compare options to get the best deal. Protect yourself, your
              vehicle, and your wallet by choosing the right two-wheeler
              insurance today.
            </p>
          </section>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default TwoWheelerInsurance;
