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

const HealthInsurance = () => {
  return (
    <div className="bg-gradient-to-br min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-700 bg-blue-200 py-4 px-6 rounded-lg shadow-md mb-16 animate-bounce-in">
          Health Insurance: Protecting Your Health and Well-Being
        </h1>

        <Cta
          heading="Your Health is Your Wealth"
          message="Health insurance offers peace of mind by covering medical expenses and providing access to healthcare. Choose a plan that suits your health needs and financial goals."
        />

        {/* Introduction */}
        <AnimatedSection animationClass="animate-slide-in-left">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              What is Health Insurance?
            </h2>
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0">
              <img
                src="/images/health-insurance/01.jpg"
                alt="Health Insurance Overview"
                className="w-full max-w-2xl h-auto mb-4 md:mb-0 md:mr-6 rounded-lg shadow-xl"
              />
              <p className="text-gray-700 text-lg leading-relaxed mt-4">
                <strong className="text-blue-700">Health Insurance</strong> is a
                type of insurance coverage that pays for medical,
                hospitalization, and surgical expenses incurred by the insured.
                It also covers a wide range of health-related services, ensuring
                you receive proper care without worrying about the financial
                burden.
              </p>
            </div>
          </section>
        </AnimatedSection>

        {/* Why Health Insurance? */}
        <AnimatedSection animationClass="animate-slide-in-right">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 mb-10">
              Why is Health Insurance Important?
            </h2>
            <div className="flex flex-col md:flex-row-reverse items-center md:items-start space-y-6 md:space-y-0">
              <ul className="text-gray-700 text-lg leading-relaxed list-disc pl-5">
                <li>
                  <strong className="text-blue-700">Financial Security:</strong>{" "}
                  Health insurance provides financial protection in case of
                  unexpected medical expenses, making healthcare more
                  affordable.
                </li>
                <li>
                  <strong className="text-blue-700">Preventive Care:</strong>{" "}
                  Many health insurance policies cover preventive services like
                  vaccinations, health screenings, and check-ups, ensuring early
                  detection and better health outcomes.
                </li>
                <li>
                  <strong className="text-blue-700">
                    Access to Quality Healthcare:
                  </strong>{" "}
                  Health insurance ensures that you can access high-quality
                  healthcare services and treatments when needed.
                </li>
                <li>
                  <strong className="text-blue-700">
                    Cashless Hospitalization:
                  </strong>{" "}
                  With many insurance providers, you can avail of cashless
                  hospitalization services, reducing the need to pay
                  out-of-pocket at the time of treatment.
                </li>
              </ul>
            </div>
          </section>
        </AnimatedSection>

        {/* Types of Health Insurance */}
        <AnimatedSection animationClass="animate-fade-in">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              Types of Health Insurance Policies
            </h2>
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0">
              <img
                src="/images/health-insurance/02.jpg"
                alt="Types of Health Insurance"
                className="w-full max-w-xs h-auto mb-4 md:mb-0 md:ml-6 rounded-lg shadow-xl"
              />
              <ul className="text-lg text-gray-700 leading-relaxed space-y-4 mt-4">
                <li>
                  <strong className="text-blue-700">
                    Individual Health Insurance:
                  </strong>{" "}
                  This policy covers medical expenses for an individual and can
                  be customized according to specific health needs.
                </li>
                <li>
                  <strong className="text-blue-700">
                    Family Health Insurance:
                  </strong>{" "}
                  A family floater policy provides coverage for the entire
                  family under one sum insured amount.
                </li>
                <li>
                  <strong className="text-blue-700">
                    Critical Illness Insurance:
                  </strong>{" "}
                  Covers the cost of treatment for specific critical illnesses
                  such as cancer, heart attack, or stroke.
                </li>
                <li>
                  <strong className="text-blue-700">
                    Top-up Health Plans:
                  </strong>{" "}
                  Additional coverage over and above a basic health insurance
                  plan, providing more extensive financial protection.
                </li>
                <li>
                  <strong className="text-blue-700">
                    Maternity Insurance:
                  </strong>{" "}
                  Covers medical expenses related to pregnancy, childbirth, and
                  post-natal care.
                </li>
              </ul>
            </div>
          </section>
        </AnimatedSection>

        {/* Steps to Choose the Right Health Insurance */}
        <AnimatedSection animationClass="animate-slide-in-left">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              Steps to Choose the Right Health Insurance
            </h2>
            <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0">
              <ol className="list-decimal list-inside text-lg text-gray-700 leading-relaxed mt-4 md:mr-6">
                <li>Assess your health needs and financial situation.</li>
                <li>
                  Compare different plans and benefits provided by various
                  insurers.
                </li>
                <li>Check the network of hospitals for cashless treatments.</li>
                <li>
                  Review the coverage limits, exclusions, and waiting periods.
                </li>
                <li>
                  Look for a plan that provides flexibility and comprehensive
                  coverage.
                </li>
              </ol>
            </div>
          </section>
        </AnimatedSection>

        {/* Leading Health Insurance Providers */}
        <AnimatedSection animationClass="animate-fade-in">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              Top Health Insurance Providers in India
            </h2>
            <div className="flex flex-col items-center space-y-6">
              <img
                src="/images/health-insurance/03.jpg"
                alt="Top Providers"
                className="w-full h-auto rounded-lg shadow-xl max-w-xl"
              />
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed mt-4">
                <li>
                  <strong className="text-blue-700">
                    Star Health & Allied Insurance:
                  </strong>{" "}
                  Offers comprehensive health insurance plans for individuals
                  and families.
                </li>
                <li>
                  <strong className="text-blue-700">
                    Religare Health Insurance:
                  </strong>{" "}
                  Known for its extensive network of hospitals and wide coverage
                  options.
                </li>
                <li>
                  <strong className="text-blue-700">
                    Max Bupa Health Insurance:
                  </strong>{" "}
                  Provides a variety of policies with options for maternity and
                  critical illness coverage.
                </li>
                <li>
                  <strong className="text-blue-700">
                    HDFC ERGO Health Insurance:
                  </strong>{" "}
                  A well-known provider offering affordable and flexible plans.
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
              Health insurance is a critical component of managing healthcare
              expenses and ensuring timely medical attention. By choosing the
              right plan, you can safeguard yourself and your family from
              financial hardship due to health emergencies. Start today by
              comparing policies to find the perfect fit for your needs!
            </p>
          </section>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default HealthInsurance;
