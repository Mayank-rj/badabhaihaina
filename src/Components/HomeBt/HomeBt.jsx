import React from "react";
import { useInView } from "react-intersection-observer";
import "./animation.css";

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

const HomeBt = () => {
  return (
    <div className="bg-gradient-to-br min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center text-blue-700 bg-blue-200 py-4 px-6 rounded-lg shadow-md mb-16 animate-bounce-in">
          Home Loan Balance Transfer: A Complete Guide
        </h1>

        {/* Introduction */}
        <AnimatedSection animationClass="animate-slide-in-left">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              Introduction
            </h2>
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0">
              <img
                src="/images/home loan/images/housing-loan-4385135_1280.jpg"
                alt="Home Loan Guide"
                className="w-full max-w-2xl h-auto mb-4 md:mb-0 md:mr-6 rounded-lg shadow-xl"
              />
              <p className="text-gray-700 text-lg leading-relaxed mt-4">
                A home loan balance transfer can be a great way to reduce your
                interest burden or get better terms for your existing home loan.
                Many homebuyers opt for a balance transfer when they find a
                lender offering lower interest rates or better features than
                their current home loan provider.
              </p>
            </div>
          </section>
        </AnimatedSection>

        {/* What is a Home Loan Balance Transfer */}
        <AnimatedSection animationClass="animate-slide-in-right">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 mb-10">
              What is a Home Loan Balance Transfer?
            </h2>
            <div className="flex flex-col md:flex-row-reverse items-center md:items-start space-y-6 md:space-y-0">
              <p className="text-gray-700 text-lg leading-relaxed">
                A home loan balance transfer involves transferring the
                outstanding balance of your home loan from your current lender
                to a new one, usually to avail of better interest rates or loan
                terms. The new lender pays off the old loan, and you continue
                making monthly payments to the new lender.
              </p>
            </div>
          </section>
        </AnimatedSection>

        {/* Why Should You Consider */}
        <AnimatedSection animationClass="animate-fade-in">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              Why Should You Consider a Home Loan Balance Transfer?
            </h2>
            <div className="flex flex-col md:flex-row-reverse items-center md:items-start space-y-6 md:space-y-0">
              {/* Image */}
              <img
                src="/images/home loan/images/whySec.jpg"
                alt="Why Consider Balance Transfer"
                className="w-full max-w-2xl h-auto mb-4 md:mb-0 md:ml-6 rounded-lg shadow-xl"
              />
              {/* Text Content */}
              <ul className="space-y-4 text-lg text-gray-700 leading-relaxed mt-4 md:mr-6">
                <li>
                  <strong className="text-blue-700">
                    Lower Interest Rates:
                  </strong>{" "}
                  Transfer your loan to save on EMI costs.
                </li>
                <li>
                  <strong className="text-blue-700">Better Loan Terms:</strong>{" "}
                  Enjoy improved customer service or repayment options.
                </li>
                <li>
                  <strong className="text-blue-700">Reduce Your EMI:</strong>{" "}
                  Cut down on monthly payments or loan tenure for savings.
                </li>
              </ul>
            </div>
          </section>
        </AnimatedSection>

        {/* How Does it Work */}
        <AnimatedSection animationClass="animate-slide-in-left">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              How Does a Home Loan Balance Transfer Work?
            </h2>
            <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0">
              {/* Text Content */}
              <ol className="list-decimal list-inside text-lg text-gray-700 leading-relaxed mt-4 md:mr-6">
                <li>Evaluate your current loan’s interest rate and tenure.</li>
                <li>Research other lenders for better rates and terms.</li>
                <li>
                  Apply for the transfer by submitting required documents like
                  income proof and loan details.
                </li>
                <li>
                  The new lender will pay off your old loan, and you’ll start
                  paying EMIs to the new lender.
                </li>
              </ol>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection animationClass="animate-fade-in">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              Things to Consider Before a Balance Transfer
            </h2>
            <div className="flex flex-col md:flex-row-reverse items-center md:items-start space-y-6 md:space-y-0 ">
              <img
                src="/images/home loan/images/consider.jpg"
                alt="Considerations for Balance Transfer"
                className="w-full h-auto mb-4 md:mb-0 md:ml-6 rounded-lg shadow-xl max-w-xs"
              />
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed mt-4">
                <li>
                  <strong className="text-blue-700">Processing Fees:</strong>{" "}
                  Lenders charge processing fees (usually around 0.5% to 1% of
                  the loan amount), which may increase the cost of the transfer.
                </li>
                <li>
                  <strong className="text-blue-700">
                    Prepayment Penalties:
                  </strong>{" "}
                  Some banks or financial institutions impose prepayment
                  penalties if you transfer your loan before completing a
                  certain tenure. Ensure you understand these fees.
                </li>
                <li>
                  <strong className="text-blue-700">Tenure Adjustments:</strong>{" "}
                  Extending the tenure might reduce monthly payments but could
                  increase the overall interest paid.
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
                <h3 className="text-lg font-semibold text-blue-600 mb-4">
                  Online Process
                </h3>
                <ol className="list-decimal list-inside text-lg text-gray-700 leading-relaxed mb-8">
                  <li>Go to the concerned bank's website.</li>
                  <li>
                    Check all the terms and conditions along with the interest
                    rate and processing fee.
                  </li>
                  <li>
                    Apply for balance transfer if satisfied with the scheme.
                  </li>
                  <li>
                    Fill in the required fields, including your name, property
                    type, tenure of the existing loan, and the bank's name.
                  </li>
                  <li>View your loan offer after completing the details.</li>
                  <li>Pay necessary fees and upload documents.</li>
                  <li>Complete the application and wait for approval.</li>
                </ol>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-600 mb-4">
                Offline Process
              </h3>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed">
                <li>
                  Obtain all required documents from your current lender for the
                  balance transfer.
                </li>
                <li>
                  Secure a consent letter from the existing bank along with the
                  outstanding loan amount.
                </li>
                <li>
                  Submit these documents to the new bank for the loan transfer.
                </li>
                <li>
                  The new lender will pay off the outstanding balance to the old
                  lender, closing the old loan account.
                </li>
                <li>
                  Property documents will then be handed over to the new lender,
                  completing the process.
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
                <li>Identity proof</li>
                <li>Address proof</li>
                <li>Documents related to the existing loan</li>
                <li>Last 3 month's salary slips</li>
                <li>Last 6 months' bank statements</li>
                <li>
                  Last 3 years' balance sheet and profit and loss account
                  statements (Self-Employed)
                </li>
                <li>Passport size photograph</li>
              </ul>
            </div>
          </section>
        </AnimatedSection>

        {/* Footer */}
        <AnimatedSection animationClass="animate-fade-in">
          <footer className="bg-blue-700 text-white text-center py-6 mt-10">
            <p className="text-sm">
              © 2024 Home Loan Guide. All rights reserved.
            </p>
          </footer>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default HomeBt;
