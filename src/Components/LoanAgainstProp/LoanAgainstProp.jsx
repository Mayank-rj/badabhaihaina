import { useInView } from "react-intersection-observer";
import { Cta } from "../cta/Cta";

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

const LoanAgainstProperty = () => {
  return (
    <div className="bg-gradient-to-br min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center text-blue-700 bg-blue-200 py-4 px-6 rounded-lg shadow-md mb-16">
          Loan Against Property: Unlock the Value of Your Assets
        </h1>

        <Cta
          heading="Loan Against Property: Unlock the Value of Your Assets"
          message=" Whether it's for expanding your business, funding education, or handling medical emergencies, LAP provides a secured and versatile financing option."
        />

        {/* Introduction */}
        <AnimatedSection animationClass="animate-slide-in-left">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              Introduction
            </h2>
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0">
              <img
                src="/images/loan against prop/01.jpg"
                alt="Loan Against Property"
                className="w-full max-w-2xl h-auto mb-4 md:mb-0 md:mr-6 rounded-lg shadow-xl"
              />
              <p className="text-gray-700 text-lg leading-relaxed mt-4">
                A **Loan Against Property (LAP)** allows you to leverage the
                value of your residential or commercial property to meet your
                financial needs. Whether it's for business expansion, medical
                emergencies, or higher education, LAP offers a large loan amount
                at lower interest rates by using your property as collateral.
              </p>
            </div>
          </section>
        </AnimatedSection>

        {/* Why Choose LAP? */}
        <AnimatedSection animationClass="animate-slide-in-right">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 mb-10">
              Why Choose a Loan Against Property?
            </h2>
            <ul className="space-y-4 text-lg text-gray-700 leading-relaxed mt-4 md:mr-6">
              <li>
                <strong className="text-blue-700">1. High Loan Amount:</strong>{" "}
                Borrow up to 60-80% of your property’s market value.
              </li>
              <li>
                <strong className="text-blue-700">
                  2. Low Interest Rates:
                </strong>{" "}
                Enjoy significantly lower interest rates compared to personal
                loans.
              </li>
              <li>
                <strong className="text-blue-700">
                  3. Long Repayment Tenures:
                </strong>{" "}
                Repay comfortably over 10-20 years.
              </li>
              <li>
                <strong className="text-blue-700">
                  4. Flexibility in Usage:
                </strong>{" "}
                Funds can be used for personal or business purposes.
              </li>
            </ul>
          </section>
        </AnimatedSection>

        {/* Documents Required */}
        <AnimatedSection animationClass="animate-fade-in">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              Documents Required
            </h2>
            <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed">
              <li>Proof of identity (Aadhaar, PAN, Passport, etc.).</li>
              <li>Proof of address (Utility bills, Passport, etc.).</li>
              <li>Property documents (Title deed, sale agreement, etc.).</li>
              <li>Income proof (Salary slips, IT returns, bank statements).</li>
            </ul>
          </section>
        </AnimatedSection>

        {/* Steps to Apply */}
        <AnimatedSection animationClass="animate-slide-in-left">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              Steps to Apply for LAP
            </h2>
            <ol className="list-decimal list-inside text-lg text-gray-700 leading-relaxed mt-4 md:mr-6">
              <li>
                Get your property valued and check your eligibility with
                different lenders.
              </li>
              <li>
                Gather all required documents, including property and income
                proofs.
              </li>
              <li>
                Submit the loan application form along with necessary documents.
              </li>
              <li>Wait for loan processing and property verification.</li>
              <li>Receive the loan amount upon approval.</li>
            </ol>
          </section>
        </AnimatedSection>

        {/* Benefits of LAP */}
        <AnimatedSection animationClass="animate-fade-in">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              Benefits of a Loan Against Property
            </h2>
            <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed">
              <li>
                <strong className="text-blue-700">Large Loan Amounts:</strong>{" "}
                Tap into the equity of your property.
              </li>
              <li>
                <strong className="text-blue-700">Retain Ownership:</strong>{" "}
                Your property remains in your name throughout the loan tenure.
              </li>
              <li>
                <strong className="text-blue-700">Tax Benefits:</strong> Claim
                tax deductions on interest payments under certain conditions.
              </li>
            </ul>
          </section>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default LoanAgainstProperty;
