import { useInView } from "react-intersection-observer";
import "./CompareHomeLoan.css";

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

const CompareHomeLoan = () => {
  return (
    <div className="bg-gradient-to-br min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-700 bg-blue-200 py-4 px-6 rounded-lg shadow-md mb-16 animate-bounce-in">
          Compare Home Loans: Find the Best Option for Your Dream Home
        </h1>

        {/* Introduction */}
        <AnimatedSection animationClass="animate-slide-in-left">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              Introduction
            </h2>
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0">
              <img
                src="/images/compare home/compare-intro.jpg"
                alt="Home Loan Guide"
                className="w-full max-w-2xl h-auto mb-4 md:mb-0 md:mr-6 rounded-lg shadow-xl"
              />
              <p className="text-gray-700 text-lg leading-relaxed mt-4">
                Purchasing a home is a significant milestone, and choosing the
                right home loan is crucial to making your dream a reality. With
                various lenders offering different interest rates, loan tenures,
                and benefits, comparing home loans helps you identify the one
                that suits your financial needs and goals.
              </p>
            </div>
          </section>
        </AnimatedSection>

        {/* why is commpare Home Loan */}
        <AnimatedSection animationClass="animate-slide-in-right">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 mb-10">
              Why Compare Home Loans?
            </h2>
            <div className="flex flex-col md:flex-row-reverse items-center md:items-start space-y-6 md:space-y-0">
              <ul className="text-gray-700 text-lg leading-relaxed list-disc pl-5">
                <li>
                  Save Money on Interest : Even a slight difference in interest
                  rates can save you lakhs over the loan tenure. Comparing
                  multiple options ensures you secure the lowest rates.
                </li>
                <li>
                  Understand Fees and Charges : Apart from interest rates,
                  lenders impose processing fees, prepayment penalties, and
                  other charges. A detailed comparison helps you avoid hidden
                  costs.
                </li>
                <li>
                  Choose the Right Tenure : Loan tenures impact both EMI and
                  total interest. Finding a loan with a flexible tenure allows
                  you to balance monthly payments and overall costs.
                </li>
                <li>
                  Identify Special Benefits : Some lenders offer benefits like
                  zero prepayment penalties, top-up loans, or balance transfer
                  options. Comparing loans ensures you don’t miss out on these
                  features.
                </li>
              </ul>
            </div>
          </section>
        </AnimatedSection>

        {/* Why Should You Consider */}
        <AnimatedSection animationClass="animate-fade-in">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              Key Factors to Compare
            </h2>
            <div className="flex flex-col md:flex-row-reverse items-center md:items-start space-y-6 md:space-y-0">
              {/* Image */}
              <img
                src="/images/compare home/compare-key.jpg"
                alt="Why Consider Balance Transfer"
                className="w-full max-w-xs h-auto mb-4 md:mb-0 md:ml-6 rounded-lg shadow-xl"
              />
              {/* Text Content */}
              <ul className="space-y-4 text-lg text-gray-700 leading-relaxed mt-4 md:mr-6">
                <li>
                  <strong className="text-blue-700">Interest Rates:</strong>{" "}
                  Choose between fixed interest rates (constant throughout the
                  tenure) or floating interest rates (which vary with market
                  conditions).
                </li>
                <li>
                  <strong className="text-blue-700">
                    Loan-to-Value (LTV) Ratio:
                  </strong>{" "}
                  Understand the percentage of the property value the bank is
                  willing to finance. Higher LTV ratios mean lower upfront
                  payments for you.
                </li>
                <li>
                  <strong className="text-blue-700">
                    Processing Fees and Charges:
                  </strong>{" "}
                  These can range from 0.5% to 2% of the loan amount. Check for
                  waivers or discounts from lenders.
                </li>
                <li>
                  <strong className="text-blue-700">
                    Prepayment and Foreclosure Policies:
                  </strong>{" "}
                  Ensure the lender allows you to repay the loan early with
                  minimal penalties.
                </li>
                <li>
                  <strong className="text-blue-700">
                    Eligibility Criteria:
                  </strong>{" "}
                  Different lenders have varying requirements for income, credit
                  score, and age. Compare these to see where you fit best.
                </li>
              </ul>
            </div>
          </section>
        </AnimatedSection>

        {/* How Does it Work */}
        <AnimatedSection animationClass="animate-slide-in-left">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              Steps to Compare Home Loans
            </h2>
            <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0">
              {/* Text Content */}
              <ol className="list-decimal list-inside text-lg text-gray-700 leading-relaxed mt-4 md:mr-6">
                <li>
                  Use Online Tools : Leverage home loan comparison tools and
                  calculators to evaluate options side-by-side.
                </li>
                <li>
                  Check EMI Affordability : Use an EMI calculator to assess
                  monthly payments and ensure they align with your budget.
                </li>
                <li>
                  Research Lender Reputation : Check reviews, ratings, and
                  customer experiences to choose a reliable lender.
                </li>
                <li>
                  Review Legal Compliance : Ensure the loan complies with RBI
                  guidelines and avoid lenders with ambiguous terms.
                </li>
              </ol>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection animationClass="animate-fade-in">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              Popular Home Loan Schemes in India
            </h2>
            <div className="flex flex-col items-center space-y-6">
              <img
                src="/images/compare home/compare-popular.jpg"
                alt="Considerations for Balance Transfer"
                className="w-full h-auto rounded-lg shadow-xl max-w-xl"
              />
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed mt-4">
                <li>
                  <strong className="text-blue-700">
                    Pradhan Mantri Awas Yojana (PMAY):
                  </strong>
                  Subsidized home loans for first-time homebuyers under specific
                  income groups.
                </li>
                <li>
                  <strong className="text-blue-700">SBI Home Loans:</strong>
                  Competitive interest rates and flexible repayment options.
                </li>
                <li>
                  <strong className="text-blue-700">HDFC Housing Loans:</strong>
                  Tailored solutions for salaried and self-employed individuals.
                </li>
                <li>
                  <strong className="text-blue-700">
                    Axis Bank Home Loans:
                  </strong>
                  Attractive rates with balance transfer options.
                </li>
              </ul>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection animationClass="animate-slide-in-right">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              How to Transfer Home Loan from One Bank to Another?
            </h2>
            <div className="flex flex-col md:flex-row items-center md:items-start mb-7 space-y-6 md:space-y-0">
              <img
                src="/images/home loan/images/bank.jpg"
                alt="Transfer Home Loan"
                className="w-full max-w-md h-auto mb-4 md:mb-0 md:mr-6 rounded-lg shadow-xl"
              />

              <div>
                <p className="text-gray-700 text-lg leading-relaxed pb-7 mt-4">
                  Purchasing a home is a significant milestone, and choosing the
                  right home loan is crucial to making your dream a reality.
                  With various lenders offering different interest rates, loan
                  tenures, and benefits, comparing home loans helps you identify
                  the one that suits your financial needs and goals.
                </p>

                <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed ">
                  <li>
                    <strong>New Home Loans -</strong> New Home Loans are offered
                    to eligible customers looking to purchase a house or
                    property for the first time.
                  </li>
                  <li>
                    <strong>Pre-Approved Home Loan -</strong> Banks offer
                    pre-approved home loans to eligible borrowers once their
                    creditworthiness, income and financial position are
                    considered considerable for an in-principal approval of the
                    loan.
                  </li>
                  <li>
                    <strong>Home Purchase Loans -</strong> Home purchase loans
                    are given explicitly to borrowers looking to purchase a
                    house or flat.
                  </li>
                  <li>
                    <strong>Home Loan for Construction -</strong> A home loan is
                    offered to customers looking to construct their own house on
                    existing land.
                  </li>
                  <li>
                    <strong>Plot Loans -</strong> Plot loans are offered to
                    customers looking to purchase a piece of land or plot to
                    construct a house.
                  </li>
                  <li>
                    <strong>Home Loan Top Up -</strong> Home Loan Top Up is a
                    facility offered by most banks and NBFCs that allows
                    existing customers to borrow a certain amount above and over
                    the existing home loan.
                  </li>
                  <li>
                    <strong>Home Extension/Renovation Loans -</strong> Home
                    loans for the extension or renovation of homes are offered
                    to borrowers who wish to renovate/extend their existing
                    house/property.
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <section className=" w-full max-w-4xl  text-center animate-fadeIn mb-10">
          <h2 className="text-3xl text-blue-600 font-semibold mb-4">
            Conclusion
          </h2>
          <p className="text-black-300 leading-relaxed mb-6">
            Comparing home loans is a smart move to make informed financial
            decisions. Take time to analyze your options and choose a loan that
            offers the perfect balance of affordability and benefits. For
            personalized assistance in finding the best home loan, contact us
            today!
          </p>
        </section>
      </div>
    </div>
  );
};

export default CompareHomeLoan;
