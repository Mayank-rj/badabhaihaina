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

const TravelInsurance = () => {
  return (
    <div className="bg-gradient-to-br min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-700 bg-blue-200 py-4 px-6 rounded-lg shadow-md mb-16 animate-bounce-in">
          Travel Insurance: Safe and Secure Journeys Await
        </h1>

        <Cta
          heading="Travel with Confidence"
          message="Whether you're traveling for business, leisure, or adventure, travel insurance offers the protection you need to enjoy your trip without worrying about unexpected mishaps. Secure your travel today!"
        />

        {/* Introduction */}
        <AnimatedSection animationClass="animate-slide-in-left">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              What is Travel Insurance?
            </h2>
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0">
              <img
                src="/images/travel-insurance/01.jpg"
                alt="Travel Insurance Overview"
                className="w-full max-w-2xl h-auto mb-4 md:mb-0 md:mr-6 rounded-lg shadow-xl"
              />
              <p className="text-gray-700 text-lg leading-relaxed mt-4">
                <strong className="text-blue-700">Travel Insurance</strong> is a
                policy that covers unforeseen events while you are traveling,
                including trip cancellations, medical emergencies, lost baggage,
                and more. It ensures that you have financial protection and
                assistance during your travels, giving you peace of mind and
                security no matter where you are in the world.
              </p>
            </div>
          </section>
        </AnimatedSection>

        {/* Why Travel Insurance? */}
        <AnimatedSection animationClass="animate-slide-in-right">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 mb-10">
              Why Do You Need Travel Insurance?
            </h2>
            <div className="flex flex-col md:flex-row-reverse items-center md:items-start space-y-6 md:space-y-0">
              <ul className="text-gray-700 text-lg leading-relaxed list-disc pl-5">
                <li>
                  <strong className="text-blue-700">Trip Cancellation:</strong>{" "}
                  If unforeseen events like illness or accidents force you to
                  cancel your trip, travel insurance can reimburse you for the
                  non-refundable expenses.
                </li>
                <li>
                  <strong className="text-blue-700">
                    Medical Emergencies:
                  </strong>{" "}
                  Covers medical expenses, including hospitalization, for
                  injuries or illnesses that occur while traveling.
                </li>
                <li>
                  <strong className="text-blue-700">Lost Baggage:</strong>{" "}
                  Travel insurance provides compensation for lost, stolen, or
                  delayed baggage, ensuring you are not left stranded.
                </li>
                <li>
                  <strong className="text-blue-700">Flight Delays:</strong> If
                  your flight is delayed for more than a specified number of
                  hours, travel insurance can cover accommodation and meal
                  expenses.
                </li>
              </ul>
            </div>
          </section>
        </AnimatedSection>

        {/* Types of Travel Insurance */}
        <AnimatedSection animationClass="animate-fade-in">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              Types of Travel Insurance Plans
            </h2>
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0">
              <img
                src="/images/travel-insurance/02.jpg"
                alt="Types of Travel Insurance"
                className="w-full max-w-xs h-auto mb-4 md:mb-0 md:ml-6 rounded-lg shadow-xl"
              />
              <ul className="text-lg text-gray-700 leading-relaxed space-y-4 mt-4">
                <li>
                  <strong className="text-blue-700">
                    Single Trip Insurance:
                  </strong>{" "}
                  Provides coverage for a one-time trip to a destination for a
                  fixed period.
                </li>
                <li>
                  <strong className="text-blue-700">
                    Annual Multi-Trip Insurance:
                  </strong>{" "}
                  Covers multiple trips over a year, ideal for frequent
                  travelers.
                </li>
                <li>
                  <strong className="text-blue-700">
                    Family Travel Insurance:
                  </strong>{" "}
                  Covers the entire family traveling together, including medical
                  emergencies and trip cancellations.
                </li>
                <li>
                  <strong className="text-blue-700">
                    Group Travel Insurance:
                  </strong>{" "}
                  Designed for groups traveling together, offering group
                  discounts and comprehensive coverage.
                </li>
              </ul>
            </div>
          </section>
        </AnimatedSection>

        {/* How to Choose the Right Travel Insurance */}
        <AnimatedSection animationClass="animate-slide-in-left">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              How to Choose the Right Travel Insurance
            </h2>
            <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0">
              <ol className="list-decimal list-inside text-lg text-gray-700 leading-relaxed mt-4 md:mr-6">
                <li>
                  Evaluate the destinations you’ll be visiting and the specific
                  coverage needed for that region.
                </li>
                <li>
                  Consider the duration of your trip and the type of activities
                  you will be participating in (e.g., adventure sports).
                </li>
                <li>
                  Check for medical coverage, especially if you’re traveling to
                  regions with limited healthcare access.
                </li>
                <li>
                  Understand the exclusions, such as pre-existing medical
                  conditions or high-risk activities.
                </li>
                <li>
                  Compare providers to find the best premiums and coverage for
                  your travel needs.
                </li>
              </ol>
            </div>
          </section>
        </AnimatedSection>

        {/* Leading Travel Insurance Providers */}
        <AnimatedSection animationClass="animate-fade-in">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              Leading Travel Insurance Providers
            </h2>
            <div className="flex flex-col items-center space-y-6">
              <img
                src="/images/travel-insurance/03.jpg"
                alt="Top Travel Insurance Providers"
                className="w-full h-auto rounded-lg shadow-xl max-w-xl"
              />
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed mt-4">
                <li>
                  <strong className="text-blue-700">
                    TATA AIG Travel Insurance:
                  </strong>{" "}
                  Offers comprehensive international and domestic travel
                  insurance with high claim settlement ratios.
                </li>
                <li>
                  <strong className="text-blue-700">
                    HDFC ERGO Travel Insurance:
                  </strong>{" "}
                  Known for affordable premiums and extensive coverage options
                  including emergency medical assistance and trip cancellations.
                </li>
                <li>
                  <strong className="text-blue-700">
                    ICICI Lombard Travel Insurance:
                  </strong>{" "}
                  Provides tailored plans with coverage for medical emergencies,
                  trip delays, and lost baggage.
                </li>
                <li>
                  <strong className="text-blue-700">
                    Bajaj Allianz Travel Insurance:
                  </strong>{" "}
                  Offers policies that cover both international and domestic
                  trips with an emphasis on medical emergency services.
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
              Travel insurance ensures you have the protection and support
              needed to enjoy your trips without worrying about unforeseen
              events. With various plans and providers to choose from, it’s
              important to compare options to get the best coverage for your
              needs. Stay safe and travel with peace of mind by securing travel
              insurance today!
            </p>
          </section>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default TravelInsurance;
