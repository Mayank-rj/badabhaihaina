import { useInView } from "react-intersection-observer";
import { Cta } from "../cta/Cta";
// import "./animation.css";

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

const HomeLoan = () => {
  return (
    <div className="bg-gradient-to-br min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center text-blue-700 bg-blue-200 py-4 px-6 rounded-lg shadow-md mb-16 animate-bounce-in">
          Home Loan: Turn Your Dream Home Into Reality
        </h1>

        {/* Introduction */}
        <AnimatedSection animationClass="animate-slide-in-left">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              Introduction
            </h2>
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0">
              <img
                src="/images/home loan/05.jpg"
                alt="Home Loan Guide"
                className="w-full max-w-2xl h-auto mb-4 md:mb-0 md:mr-6 rounded-lg shadow-xl"
              />
              <p className="text-gray-700 text-lg leading-relaxed mt-4">
                A home loan is a financial solution that helps individuals
                purchase, construct, or renovate a house by providing the
                necessary funds. It allows you to own your dream home without
                the burden of paying the entire amount upfront. With competitive
                interest rates, flexible repayment options, and various lenders
                in the market, a home loan is one of the most sought-after
                financial products in India.
              </p>
            </div>
          </section>
        </AnimatedSection>

        {/* What is a Home Loan Balance Transfer */}
        <AnimatedSection animationClass="animate-slide-in-right">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 mb-10">
              Why Choose a Home Loan?
            </h2>
            <ul className="space-y-4 text-lg text-gray-700 leading-relaxed mt-4 md:mr-6">
              <li>
                <strong className="text-blue-700">
                  1. Affordable Home Ownership:
                </strong>{" "}
                Spread the cost of your home over several years with manageable
                monthly EMIs.
              </li>
              <li>
                <strong className="text-blue-700">2. Tax Benefits:</strong>{" "}
                Enjoy deductions on principal and interest repayments under the
                Income Tax Act, reducing your financial burden.
              </li>
              <li>
                <strong className="text-blue-700">3. Flexible Tenures:</strong>{" "}
                Home loans offer repayment tenures ranging from 5 to 30 years,
                tailored to your financial situation.
              </li>
              <li>
                <strong className="text-blue-700">
                  4. Low-Interest Rates:{" "}
                </strong>{" "}
                With interest rates starting as low as 8%, home loans in India
                are highly affordable compared to other credit options.
              </li>
            </ul>
          </section>
        </AnimatedSection>

        {/* Why Should You Consider */}
        <AnimatedSection animationClass="animate-fade-in">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              Types of Home Loans
            </h2>
            <div className="flex flex-col md:flex-row-reverse items-center md:items-start space-y-6 md:space-y-0">
              {/* Image */}
              <img
                src="/images/home loan/images/02.jpg"
                alt="Why Consider Balance Transfer"
                className="w-full max-w-xs h-auto mb-4 md:mb-0 md:ml-6 rounded-lg shadow-xl"
              />
              {/* Text Content */}
              <ul className="space-y-4 text-lg text-gray-700 leading-relaxed mt-4 md:mr-6">
                <li>
                  <strong className="text-blue-700">
                    1. New Home Purchase Loan:
                  </strong>{" "}
                  For buying a new or resale property.
                </li>
                <li>
                  <strong className="text-blue-700">
                    2. Home Construction Loan:{" "}
                  </strong>{" "}
                  To finance the construction of a home on your own plot of
                  land.
                </li>
                <li>
                  <strong className="text-blue-700">
                    3. Home Renovation Loan:{" "}
                  </strong>{" "}
                  Ideal for renovating, repairing, or upgrading your existing
                  home.
                </li>
                <li>
                  <strong className="text-blue-700">
                    4. Plot Purchase Loan:{" "}
                  </strong>{" "}
                  For buying residential land to construct a house.
                </li>
                <li>
                  <strong className="text-blue-700">
                    5. Balance Transfer Loan:{" "}
                  </strong>{" "}
                  Transfer your existing home loan to another lender for better
                  interest rates and terms.
                </li>
                <li>
                  <strong className="text-blue-700">6. Top-Up Loan: </strong>{" "}
                  Additional funds on your existing loan for personal or
                  property-related expenses.
                </li>
              </ul>
            </div>
          </section>
        </AnimatedSection>

        {/* How Does it Work */}
        <AnimatedSection animationClass="animate-slide-in-left">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              Steps to Apply for a Home Loan
            </h2>
            <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0">
              {/* Text Content */}
              <ol className="list-decimal list-inside text-lg text-gray-700 leading-relaxed mt-4 md:mr-6">
                <li>
                  Research Lenders: Compare interest rates, loan terms, and
                  processing fees from banks, NBFCs, and housing finance
                  companies.
                </li>
                <li>
                  Check Eligibility: Use an online eligibility calculator to
                  estimate your loan amount.
                </li>
                <li>
                  Submit Application: Fill out the application form and upload
                  required documents.
                </li>
                <li>
                  Verification: Lenders verify your income, CIBIL score, and
                  property documents.
                </li>
                <li>
                  Loan Sanction: Receive a sanction letter with loan terms and
                  conditions.
                </li>
                <li>
                  Disbursement: The loan amount is disbursed after final
                  documentation and agreement signing.
                </li>
              </ol>
            </div>
          </section>
        </AnimatedSection>

        <Cta
          heading="Building Your Dream Home, Made Easy"
          message="Owning a house is a significant milestone, and a house loan can make this dream a reality. With flexible repayment options, competitive interest rates, and tailor-made solutions, house loans empower you to finance your new home, renovation, or construction with ease. Explore plans suited to your needs and take a step closer to your dream home today."
        />

        <AnimatedSection animationClass="animate-fade-in">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              Tips to Get the Best Home Loan Deal
            </h2>
            <div className="flex flex-col md:flex-row-reverse items-center md:items-start space-y-6 md:space-y-0 ">
              <img
                src="/images/home loan/07.jpg"
                alt="Considerations for Balance Transfer"
                className="w-full h-auto mb-4 md:mb-0 md:ml-6 rounded-lg shadow-xl max-w-xs"
              />
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed mt-4">
                <li>
                  <strong className="text-blue-700">
                    Maintain a High CIBIL Score:{" "}
                  </strong>{" "}
                  A score above 750 can help you secure lower interest rates.
                </li>
                <li>
                  <strong className="text-blue-700">
                    Negotiate Interest Rates:
                  </strong>{" "}
                  Check for special schemes and negotiate with lenders.
                </li>
                <li>
                  <strong className="text-blue-700">
                    Choose the Right Tenure:{" "}
                  </strong>{" "}
                  Shorter tenures reduce interest outgo, while longer tenures
                  lower EMI.
                </li>
                <li>
                  <strong className="text-blue-700">Compare Lenders: </strong>{" "}
                  Use online platforms to compare offers and find the best deal.
                </li>
                <li>
                  <strong className="text-blue-700">
                    Opt for Prepayment:{" "}
                  </strong>{" "}
                  Pay off your loan early to reduce the total interest burden.
                </li>
              </ul>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection animationClass="animate-slide-in-right">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              Tax Benefits on Home Loans
            </h2>
            <div className="flex flex-col md:flex-row items-center md:items-start mb-7 space-y-6 md:space-y-0">
              <img
                src="/images/home loan/04.jpg"
                alt="Transfer Home Loan"
                className="w-full max-w-md h-auto mb-4 md:mb-0 md:mr-6 rounded-lg shadow-xl"
              />
              <div>
                <ol className="list-decimal list-inside text-lg text-gray-700 leading-relaxed mb-8">
                  <li>
                    Principal Repayment: Claim up to ₹1.5 lakh under Section 80C
                    of the Income Tax Act.
                  </li>
                  <li>
                    Interest Paid: Deduct up to ₹2 lakh on interest repayments
                    under Section 24(b).
                  </li>
                  <li>
                    First-Time Homebuyers: Additional deduction of ₹1.5 lakh
                    under Section 80EEA (conditions apply).
                  </li>
                </ol>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-600 mb-4">
                Why Choose Us for Your Home Loan Needs?
              </h3>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed">
                <li>
                  • Expert Assistance: Get personalized guidance throughout the
                  loan process.
                </li>
                <li>
                  • Competitive Rates: Access low-interest rates from trusted
                  lenders.
                </li>
                <li>
                  • Quick Approvals: Simplified application process with fast
                  disbursement.
                </li>
                <li>
                  • Flexible Repayment Options: Tailor your EMI schedule to suit
                </li>
              </ul>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection animationClass="animate-slide-in-left">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              What are the Documents Required for Home Loan Balance Transfer?
            </h2>
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0">
              {/* Text Content */}
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed">
                <li>
                  Identity Proof: Aadhar card, PAN card, passport, or voter ID.
                </li>
                <li>
                  Address Proof: Utility bill, rent agreement, or driving
                  license.
                </li>
                <li>
                  Income Proof: Salary slips, ITR, and bank statements for the
                  last 6 months.
                </li>
                <li>
                  Property Documents: Sale deed, encumbrance certificate, and
                  approved construction plan.
                </li>
              </ul>
            </div>
          </section>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default HomeLoan;
