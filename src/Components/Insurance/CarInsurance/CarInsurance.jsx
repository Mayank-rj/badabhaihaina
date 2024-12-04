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

const CarInsurance = () => {
  return (
    <div className="bg-gradient-to-br min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-700 bg-blue-200 py-4 px-6 rounded-lg shadow-md mb-16 animate-bounce-in">
          Car Insurance: Protecting Your Vehicle and Your Peace of Mind
        </h1>
        <Cta
          heading="Comprehensive Coverage for Your Car"
          message="With a range of plans to suit your needs, car insurance provides financial security and peace of mind. Choose a plan that offers robust coverage, competitive premiums, and reliable support."
        />
        {/* Introduction */}
        <AnimatedSection animationClass="animate-slide-in-left">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              What is Car Insurance?
            </h2>
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0">
              <img
                src="/images/car-insurance/01.jpg"
                alt="Car Insurance Overview"
                className="w-full max-w-2xl h-auto mb-4 md:mb-0 md:mr-6 rounded-lg shadow-xl"
              />
              <p className="text-gray-700 text-lg leading-relaxed mt-4">
                <strong className="text-blue-700">Car Insurance</strong> is a
                financial safety net that provides coverage against damage to
                your vehicle, third-party liabilities, and personal accident
                risks. Whether it’s a fender bender or a major accident, car
                insurance ensures you’re financially protected from unexpected
                costs.
              </p>
            </div>
          </section>
        </AnimatedSection>

        {/* Benefits of Car Insurance */}
        <AnimatedSection animationClass="animate-slide-in-right">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 mb-10">
              Why is Car Insurance Important?
            </h2>
            <div className="flex flex-col md:flex-row-reverse items-center md:items-start space-y-6 md:space-y-0">
              <ul className="text-gray-700 text-lg leading-relaxed list-disc pl-5">
                <li>
                  <strong className="text-blue-700">
                    Financial Protection:
                  </strong>{" "}
                  Covers the costs of repair or replacement in case of damage.
                </li>
                <li>
                  <strong className="text-blue-700">
                    Third-Party Liability:
                  </strong>{" "}
                  Protects you from legal and financial liability arising from
                  accidents involving other people or property.
                </li>
                <li>
                  <strong className="text-blue-700">
                    Personal Accident Cover:
                  </strong>{" "}
                  Provides coverage for medical expenses and accidental death or
                  disability.
                </li>
                <li>
                  <strong className="text-blue-700">Peace of Mind:</strong>{" "}
                  Drive confidently knowing you’re covered against unforeseen
                  events.
                </li>
              </ul>
            </div>
          </section>
        </AnimatedSection>

        {/* Types of Car Insurance */}
        <AnimatedSection animationClass="animate-fade-in">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              Types of Car Insurance Plans
            </h2>
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0">
              <img
                src="/images/car-insurance/02.jpg"
                alt="Car Insurance Types"
                className="w-full max-w-xs h-auto mb-4 md:mb-0 md:ml-6 rounded-lg shadow-xl"
              />
              <ul className="text-lg text-gray-700 leading-relaxed space-y-4 mt-4">
                <li>
                  <strong className="text-blue-700">
                    Third-Party Liability:
                  </strong>{" "}
                  Mandatory coverage for damages caused to another person or
                  their property.
                </li>
                <li>
                  <strong className="text-blue-700">
                    Comprehensive Coverage:
                  </strong>{" "}
                  Includes third-party liability as well as protection against
                  damages to your own vehicle.
                </li>
                <li>
                  <strong className="text-blue-700">Pay-As-You-Drive:</strong> A
                  flexible policy where premiums are based on your driving
                  habits and mileage.
                </li>
                <li>
                  <strong className="text-blue-700">
                    Zero Depreciation Add-On:
                  </strong>{" "}
                  Ensures full claim on the cost of car parts without factoring
                  in depreciation.
                </li>
              </ul>
            </div>
          </section>
        </AnimatedSection>

        {/* Steps to Choose a Policy */}
        <AnimatedSection animationClass="animate-slide-in-left">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              How to Choose the Right Car Insurance
            </h2>
            <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0">
              <ol className="list-decimal list-inside text-lg text-gray-700 leading-relaxed mt-4 md:mr-6">
                <li>Compare policies from different insurers online.</li>
                <li>
                  Assess your requirements, such as comprehensive coverage or
                  add-ons like roadside assistance.
                </li>
                <li>
                  Check for affordable premiums and the claim settlement ratio
                  of the insurer.
                </li>
                <li>
                  Read reviews to understand the quality of customer service.
                </li>
                <li>
                  Opt for a policy that offers easy renewal and flexible payment
                  options.
                </li>
              </ol>
            </div>
          </section>
        </AnimatedSection>

        {/* Leading Car Insurance Providers */}
        <AnimatedSection animationClass="animate-fade-in">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              Top Car Insurance Providers in India
            </h2>
            <div className="flex flex-col items-center space-y-6">
              <img
                src="/images/car-insurance/03.jpg"
                alt="Top Providers"
                className="w-full h-auto rounded-lg shadow-xl max-w-xl"
              />
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed mt-4">
                <li>
                  <strong className="text-blue-700">ICICI Lombard:</strong>{" "}
                  Known for hassle-free claims and extensive coverage options.
                </li>
                <li>
                  <strong className="text-blue-700">Bajaj Allianz:</strong>{" "}
                  Offers a wide range of add-ons and efficient customer service.
                </li>
                <li>
                  <strong className="text-blue-700">HDFC ERGO:</strong> Features
                  affordable premiums and a high claim settlement ratio.
                </li>
                <li>
                  <strong className="text-blue-700">
                    New India Assurance:
                  </strong>{" "}
                  A trusted provider with competitive rates and broad coverage.
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
              Car insurance is essential for protecting your vehicle and
              ensuring peace of mind while driving. By choosing the right
              policy, you can safeguard yourself against financial risks and
              enjoy stress-free journeys. Start comparing plans today to find
              the best car insurance solution for you!
            </p>
          </section>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default CarInsurance;
