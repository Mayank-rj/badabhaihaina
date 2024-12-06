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

const StockInsurance = () => {
  return (
    <div className="bg-gradient-to-br min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-700 bg-blue-200 py-4 px-6 rounded-lg shadow-md mb-16 animate-bounce-in">
          Stock Insurance: Safeguard Your Investments
        </h1>

        <Cta
          heading="Secure Your Investments Today"
          message="Stock insurance offers peace of mind by protecting your investments against market volatility and external risks. Choose a plan that suits your financial goals."
        />

        {/* Introduction */}
        <AnimatedSection animationClass="animate-slide-in-left">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              What is Stock Insurance?
            </h2>
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0">
              <img
                src="/images/stock insurance/01.jpg"
                alt="Stock Insurance Overview"
                className="w-full max-w-2xl h-auto mb-4 md:mb-0 md:mr-6 rounded-lg shadow-xl"
              />
              <p className="text-gray-700 text-lg leading-relaxed mt-4">
                <strong className="text-blue-700">Stock Insurance</strong> is a
                specialized form of insurance designed to protect the value of
                stocks and investments in the event of market downturns, theft,
                or fraud. This type of coverage provides security for investors
                who wish to mitigate the risks associated with volatile markets.
              </p>
            </div>
          </section>
        </AnimatedSection>

        {/* Why Stock Insurance? */}
        <AnimatedSection animationClass="animate-slide-in-right">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 mb-10">
              Why is Stock Insurance Important?
            </h2>
            <div className="flex flex-col md:flex-row-reverse items-center md:items-start space-y-6 md:space-y-0">
              <ul className="text-gray-700 text-lg leading-relaxed list-disc pl-5">
                <li>
                  <strong className="text-blue-700">
                    Protection Against Loss:
                  </strong>{" "}
                  Stock insurance helps protect investors from potential
                  financial loss due to unforeseen events, such as stock market
                  crashes or fraud.
                </li>
                <li>
                  <strong className="text-blue-700">Risk Mitigation:</strong> It
                  serves as a safety net that reduces the impact of risks
                  associated with stock trading and investing.
                </li>
                <li>
                  <strong className="text-blue-700">
                    Enhanced Confidence:
                  </strong>{" "}
                  Knowing your investments are covered allows for better peace
                  of mind and more strategic decision-making.
                </li>
                <li>
                  <strong className="text-blue-700">
                    Comprehensive Coverage:
                  </strong>{" "}
                  It covers a range of scenarios, from fraud and hacking to
                  natural disasters that might impact stock prices or value.
                </li>
              </ul>
            </div>
          </section>
        </AnimatedSection>

        {/* Types of Stock Insurance Coverage */}
        <AnimatedSection animationClass="animate-fade-in">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              Types of Stock Insurance Coverage
            </h2>
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0">
              <img
                src="/images/stock insurance/02.jpg"
                alt="Types of Stock Insurance"
                className="w-full max-w-xs h-auto mb-4 mr-5 md:mb-0 md:ml-6 rounded-lg shadow-xl"
              />
              <ul className="text-lg text-gray-700 leading-relaxed space-y-4 mt-4">
                <li>
                  <strong className="text-blue-700">
                    Market Crash Protection:
                  </strong>{" "}
                  Protects the value of stocks from significant declines due to
                  market crashes or sudden downturns.
                </li>
                <li>
                  <strong className="text-blue-700">
                    Fraud and Theft Coverage:
                  </strong>{" "}
                  Provides compensation if your stocks are stolen or if you're
                  affected by fraudulent activities.
                </li>
                <li>
                  <strong className="text-blue-700">
                    Cybersecurity Coverage:
                  </strong>{" "}
                  Covers the loss of stock value due to cyberattacks, hacking,
                  or unauthorized access to your investment accounts.
                </li>
                <li>
                  <strong className="text-blue-700">
                    Natural Disaster Protection:
                  </strong>{" "}
                  Offers protection in case of natural events, such as
                  earthquakes or floods, affecting stock markets or the economy.
                </li>
                <li>
                  <strong className="text-blue-700">
                    Theft of Physical Stock Certificates:
                  </strong>{" "}
                  Covers losses resulting from the theft or destruction of
                  physical stock certificates.
                </li>
              </ul>
            </div>
          </section>
        </AnimatedSection>

        {/* Steps to Choose the Right Stock Insurance */}
        <AnimatedSection animationClass="animate-slide-in-left">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              How to Choose the Right Stock Insurance Plan
            </h2>
            <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0">
              <ol className="list-decimal list-inside text-lg text-gray-700 leading-relaxed mt-4 md:mr-6">
                <li>Assess the total value of your stock portfolio.</li>
                <li>
                  Look for comprehensive coverage options that match your
                  investment profile.
                </li>
                <li>
                  Ensure the policy covers various risks, such as market
                  downturns, fraud, and cybersecurity threats.
                </li>
                <li>
                  Check for additional benefits like legal assistance in case of
                  disputes or fraud cases.
                </li>
                <li>
                  Review the insurance provider’s track record and reputation
                  for claims processing.
                </li>
              </ol>
            </div>
          </section>
        </AnimatedSection>

        {/* Leading Stock Insurance Providers */}
        <AnimatedSection animationClass="animate-fade-in">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              Leading Stock Insurance Providers
            </h2>
            <div className="flex flex-col items-center space-y-6">
              <img
                src="/images/stock insurance/03.jpg"
                alt="Top Providers"
                className="w-full h-auto rounded-lg shadow-xl max-w-xl"
              />
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed mt-4">
                <li>
                  <strong className="text-blue-700">Berkshire Hathaway:</strong>{" "}
                  Known for offering financial security for high-value investors
                  and portfolio protection plans.
                </li>
                <li>
                  <strong className="text-blue-700">AIG:</strong> Provides
                  comprehensive stock insurance plans covering market risks,
                  fraud, and cybersecurity threats.
                </li>
                <li>
                  <strong className="text-blue-700">Chubb:</strong> A reliable
                  provider that specializes in insuring investment portfolios
                  with customized coverage options.
                </li>
                <li>
                  <strong className="text-blue-700">Lloyd's of London:</strong>{" "}
                  Known for providing niche insurance products, including stock
                  insurance, for high-net-worth individuals.
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
              Stock insurance is an essential tool for safeguarding your
              investments against market volatility, theft, fraud, and
              unforeseen events. Protect your portfolio and invest with
              confidence by choosing the right insurance policy tailored to your
              needs.
            </p>
          </section>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default StockInsurance;
