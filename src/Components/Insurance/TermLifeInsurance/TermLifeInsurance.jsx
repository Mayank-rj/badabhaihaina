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

const TermLifeInsurance = () => {
  return (
    <div className="bg-gradient-to-br min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-700 bg-blue-200 py-4 px-6 rounded-lg shadow-md mb-16 animate-bounce-in">
          Term Life Insurance: Affordable Coverage for Peace of Mind
        </h1>

        <Cta
          heading="Secure Your Family’s Future Today"
          message="Term life insurance offers financial security to your loved ones in your absence. It is an affordable and flexible way to ensure they have the support they need when it matters most."
        />

        {/* Introduction */}
        <AnimatedSection animationClass="animate-slide-in-left">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              What is Term Life Insurance?
            </h2>
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0">
              <img
                src="/images/life insurance/01.jpg"
                alt="Term Life Insurance Overview"
                className="w-full max-w-2xl h-auto mb-4 md:mb-0 md:mr-6 rounded-lg shadow-xl"
              />
              <p className="text-gray-700 text-lg leading-relaxed mt-4">
                <strong className="text-blue-700">Term Life Insurance</strong>{" "}
                is a type of life insurance that provides coverage for a
                specified term, such as 10, 20, or 30 years. If the policyholder
                passes away during the term, the beneficiary receives a lump sum
                death benefit. It is designed to provide financial protection
                for dependents in case of an untimely death, with affordable
                premiums and straightforward coverage.
              </p>
            </div>
          </section>
        </AnimatedSection>

        {/* Why Term Life Insurance? */}
        <AnimatedSection animationClass="animate-slide-in-right">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 mb-10">
              Why is Term Life Insurance Important?
            </h2>
            <div className="flex flex-col md:flex-row-reverse items-center md:items-start space-y-6 md:space-y-0">
              <ul className="text-gray-700 text-lg leading-relaxed list-disc pl-5">
                <li>
                  <strong className="text-blue-700">Family Protection:</strong>{" "}
                  Term life insurance ensures that your loved ones are
                  financially secure in the event of your untimely death,
                  covering their living expenses, education, and other financial
                  needs.
                </li>
                <li>
                  <strong className="text-blue-700">
                    Affordable Premiums:
                  </strong>{" "}
                  Compared to permanent life insurance, term life insurance is
                  more affordable, offering high coverage at a relatively low
                  cost.
                </li>
                <li>
                  <strong className="text-blue-700">Peace of Mind:</strong>{" "}
                  Knowing your family will be taken care of financially provides
                  peace of mind, allowing you to focus on other aspects of life.
                </li>
                <li>
                  <strong className="text-blue-700">
                    Flexible Term Lengths:
                  </strong>{" "}
                  You can choose the length of your coverage based on your
                  financial goals, whether it’s to cover your mortgage,
                  children’s education, or other long-term obligations.
                </li>
              </ul>
            </div>
          </section>
        </AnimatedSection>

        {/* Types of Term Life Insurance Plans */}
        <AnimatedSection animationClass="animate-fade-in">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              Types of Term Life Insurance Plans
            </h2>
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0">
              <img
                src="/images/life insurance/02.jpg"
                alt="Types of Term Life Insurance"
                className="w-full max-w-xs h-auto mr-5 mb-4 md:mb-0 md:ml-6 rounded-lg shadow-xl"
              />
              <ul className="text-lg text-gray-700 leading-relaxed space-y-4 mt-4">
                <li>
                  <strong className="text-blue-700">
                    Level Term Life Insurance:
                  </strong>{" "}
                  Provides a fixed death benefit for the entire term of the
                  policy.
                </li>
                <li>
                  <strong className="text-blue-700">
                    Decreasing Term Life Insurance:
                  </strong>{" "}
                  The coverage decreases over time, typically designed to match
                  the decreasing balance of a mortgage or loan.
                </li>
                <li>
                  <strong className="text-blue-700">
                    Renewable Term Life Insurance:
                  </strong>{" "}
                  Allows you to renew the policy after the term expires, usually
                  at a higher premium due to age.
                </li>
                <li>
                  <strong className="text-blue-700">
                    Convertible Term Life Insurance:
                  </strong>{" "}
                  Allows you to convert the term policy to a permanent life
                  insurance policy without needing a medical exam.
                </li>
              </ul>
            </div>
          </section>
        </AnimatedSection>

        {/* Steps to Choose the Right Term Life Insurance */}
        <AnimatedSection animationClass="animate-slide-in-left">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              How to Choose the Right Term Life Insurance Plan
            </h2>
            <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0">
              <ol className="list-decimal list-inside text-lg text-gray-700 leading-relaxed mt-4 md:mr-6">
                <li>
                  Evaluate your family’s financial needs, including income
                  replacement and outstanding debts.
                </li>
                <li>
                  Decide on the coverage amount that will sufficiently support
                  your family’s needs.
                </li>
                <li>
                  Choose the length of coverage based on your life goals and the
                  period your dependents need support.
                </li>
                <li>
                  Consider optional riders such as critical illness or
                  accidental death coverage to enhance protection.
                </li>
                <li>
                  Compare insurance providers for claim settlement records,
                  customer service, and affordability.
                </li>
              </ol>
            </div>
          </section>
        </AnimatedSection>

        {/* Leading Term Life Insurance Providers */}
        <AnimatedSection animationClass="animate-fade-in">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              Leading Term Life Insurance Providers
            </h2>
            <div className="flex flex-col items-center space-y-6">
              <img
                src="/images/life insurance/03.jpg"
                alt="Top Providers"
                className="w-full h-auto rounded-lg shadow-xl max-w-xl"
              />
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed mt-4">
                <li>
                  <strong className="text-blue-700">LIC of India:</strong> A
                  trusted provider of term life policies, offering flexible
                  coverage options.
                </li>
                <li>
                  <strong className="text-blue-700">
                    HDFC Life Insurance:
                  </strong>{" "}
                  Known for offering affordable and customizable term insurance
                  plans.
                </li>
                <li>
                  <strong className="text-blue-700">
                    ICICI Prudential Life Insurance:
                  </strong>{" "}
                  Provides a wide range of term plans, including options for
                  converting to permanent life insurance.
                </li>
                <li>
                  <strong className="text-blue-700">Max Life Insurance:</strong>{" "}
                  Offers a variety of term plans with high sum assured and
                  flexible terms.
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
              Term life insurance is a cost-effective and straightforward way to
              protect your family’s financial future. With flexible coverage
              options, affordable premiums, and various plans to choose from,
              it’s a powerful tool for ensuring your loved ones are supported in
              the event of your passing. Choose the plan that best fits your
              family’s needs and get the peace of mind you deserve.
            </p>
          </section>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default TermLifeInsurance;
