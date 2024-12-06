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

const HomeInsurance = () => {
  return (
    <div className="bg-gradient-to-br min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-700 bg-blue-200 py-4 px-6 rounded-lg shadow-md mb-16 animate-bounce-in">
          Home Insurance: Protect Your Home and Belongings
        </h1>

        <Cta
          heading="Secure Your Home, Secure Your Future"
          message="Home insurance offers protection for your property, belongings, and peace of mind. Choose a plan that ensures full coverage against all potential risks."
        />

        {/* Introduction */}
        <AnimatedSection animationClass="animate-slide-in-left">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              What is Home Insurance?
            </h2>
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0">
              <img
                src="/images/home insurance/01.jpg"
                alt="Home Insurance Overview"
                className="w-full max-w-2xl h-auto mb-4 md:mb-0 md:mr-6 rounded-lg shadow-xl"
              />
              <p className="text-gray-700 text-lg leading-relaxed mt-4">
                <strong className="text-blue-700">Home Insurance</strong> is a
                type of insurance that covers damage to your property and
                belongings within the home. It protects against risks like fire,
                theft, natural disasters, and accidents, offering peace of mind
                for homeowners and renters.
              </p>
            </div>
          </section>
        </AnimatedSection>

        {/* Why Home Insurance? */}
        <AnimatedSection animationClass="animate-slide-in-right">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 mb-10">
              Why is Home Insurance Important?
            </h2>
            <div className="flex flex-col md:flex-row-reverse items-center md:items-start space-y-6 md:space-y-0">
              <ul className="text-gray-700 text-lg leading-relaxed list-disc pl-5">
                <li>
                  <strong className="text-blue-700">
                    Property Protection:
                  </strong>{" "}
                  It protects your property from damage caused by natural
                  disasters, fire, or vandalism.
                </li>
                <li>
                  <strong className="text-blue-700">
                    Personal Belongings:
                  </strong>{" "}
                  Home insurance covers the loss or damage of personal items
                  inside the house, including electronics, furniture, and more.
                </li>
                <li>
                  <strong className="text-blue-700">Liability Coverage:</strong>{" "}
                  It also covers liabilities in case someone gets injured on
                  your property or if you accidentally cause damage to someone
                  else's property.
                </li>
                <li>
                  <strong className="text-blue-700">Peace of Mind:</strong>{" "}
                  Knowing you’re financially protected from unexpected events
                  helps alleviate stress and ensures you can rebuild or repair
                  without financial burden.
                </li>
              </ul>
            </div>
          </section>
        </AnimatedSection>

        {/* Types of Home Insurance Coverage */}
        <AnimatedSection animationClass="animate-fade-in">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              Types of Home Insurance Coverage
            </h2>
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0">
              <img
                src="/images/home insurance/02.jpg"
                alt="Types of Home Insurance"
                className="w-full max-w-xs h-auto mr-5 mb-4 md:mb-0 md:ml-6 rounded-lg shadow-xl"
              />
              <ul className="text-lg text-gray-700 leading-relaxed space-y-4 mt-4">
                <li>
                  <strong className="text-blue-700">Building Insurance:</strong>{" "}
                  Covers damage to the structure of your home due to fire,
                  storms, vandalism, etc.
                </li>
                <li>
                  <strong className="text-blue-700">Content Insurance:</strong>{" "}
                  Covers personal belongings like furniture, electronics,
                  clothing, and more against theft, damage, or loss.
                </li>
                <li>
                  <strong className="text-blue-700">Liability Coverage:</strong>{" "}
                  Covers damages caused to others or their property in case of
                  accidents on your property.
                </li>
                <li>
                  <strong className="text-blue-700">
                    Natural Calamity Insurance:
                  </strong>{" "}
                  Covers damage caused by natural disasters like earthquakes,
                  floods, or hurricanes.
                </li>
                <li>
                  <strong className="text-blue-700">
                    Accidental Damage Insurance:
                  </strong>{" "}
                  Provides protection against unintentional damage to the
                  property or contents of the home.
                </li>
              </ul>
            </div>
          </section>
        </AnimatedSection>

        {/* Steps to Choose the Right Home Insurance */}
        <AnimatedSection animationClass="animate-slide-in-left">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              How to Choose the Right Home Insurance Plan
            </h2>
            <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0">
              <ol className="list-decimal list-inside text-lg text-gray-700 leading-relaxed mt-4 md:mr-6">
                <li>Assess the value of your property and belongings.</li>
                <li>
                  Compare coverage options and ensure you get comprehensive
                  protection.
                </li>
                <li>
                  Review the policy exclusions to understand what is not
                  covered.
                </li>
                <li>
                  Check for the availability of add-ons like personal liability
                  or natural disaster coverage.
                </li>
                <li>
                  Consider the reputation and claim settlement ratio of the
                  insurance provider.
                </li>
              </ol>
            </div>
          </section>
        </AnimatedSection>

        {/* Leading Home Insurance Providers */}
        <AnimatedSection animationClass="animate-fade-in">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              Leading Home Insurance Providers in India
            </h2>
            <div className="flex flex-col items-center space-y-6">
              <img
                src="/images/home insurance/03.jpg"
                alt="Top Providers"
                className="w-full h-auto rounded-lg shadow-xl max-w-xl"
              />
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed mt-4">
                <li>
                  <strong className="text-blue-700">
                    HDFC ERGO General Insurance:
                  </strong>{" "}
                  Known for a wide range of home insurance products with
                  customizable coverage.
                </li>
                <li>
                  <strong className="text-blue-700">
                    Bajaj Allianz General Insurance:
                  </strong>{" "}
                  Offers comprehensive coverage with add-ons for better
                  protection.
                </li>
                <li>
                  <strong className="text-blue-700">
                    ICICI Lombard General Insurance:
                  </strong>{" "}
                  Offers affordable and comprehensive plans with quick claim
                  settlements.
                </li>
                <li>
                  <strong className="text-blue-700">
                    Reliance General Insurance:
                  </strong>{" "}
                  Offers home insurance with flexible plans and extensive
                  network of agents.
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
              Home insurance is an essential investment that provides financial
              protection for your home and belongings. By choosing the right
              policy, you can secure your property from unforeseen risks and
              enjoy peace of mind. Get in touch with us today to explore the
              best home insurance plans for your needs!
            </p>
          </section>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default HomeInsurance;
