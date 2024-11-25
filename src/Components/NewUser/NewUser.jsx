import { useInView } from "react-intersection-observer";
import "./newUser.css";

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

const NewUser = () => {
  return (
    <div className="bg-gradient-to-br min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-700 bg-blue-200 py-4 px-6 rounded-lg shadow-md mb-16 animate-bounce-in">
          New User Guide: Home Loan Essentials
        </h1>

        {/* Introduction */}
        <AnimatedSection animationClass="animate-slide-in-left">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              Introduction
            </h2>
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0">
              <img
                src="/images/new user/new-intro.jpg"
                alt="Home Loan Guide"
                className="w-full max-w-2xl h-auto mb-4 md:mb-0 md:mr-6 rounded-lg shadow-xl"
              />
              <p className="text-gray-700 text-lg leading-relaxed mt-4">
                Are you planning to apply for a home loan for the first time?
                Navigating the process can seem overwhelming, but with the right
                knowledge, securing a home loan is easier than you think. This
                guide will help new users understand the basics of home loans in
                India, eligibility criteria, and how to get started.
              </p>
            </div>
          </section>
        </AnimatedSection>

        {/* why commpare Home Loan */}
        <AnimatedSection animationClass="animate-slide-in-right">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 mb-10">
              What is a Home Loan?
            </h2>
            <div className="flex flex-col md:flex-row-reverse items-center md:items-start space-y-6 md:space-y-0">
              <p className="text-gray-700 text-lg leading-relaxed">
                A home loan is a financial product that allows you to borrow
                money from a lender to purchase, construct, or renovate a house.
                The loan is repaid over a specified period through Equated
                Monthly Installments (EMIs), which include both the principal
                and interest.
              </p>
            </div>
          </section>
        </AnimatedSection>

        {/* key factors*/}
        <AnimatedSection animationClass="animate-fade-in">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              Steps to Apply for a Home Loan
            </h2>
            <div className="flex flex-col md:flex-row-reverse items-center md:items-start space-y-6 md:space-y-0">
              {/* Image */}
              <img
                src="/images/new user/new-apply.jpg"
                alt="Why Consider Balance Transfer"
                className="w-full max-w-xs h-auto mb-4 md:mb-0 md:ml-6 rounded-lg shadow-xl"
              />
              {/* Text Content */}
              <ul className="space-y-4 text-lg text-gray-700 leading-relaxed mt-4 md:mr-6">
                <li>
                  <strong className="text-blue-700">Check Eligibility :</strong>
                  Ensure that meet the eligibility criteria to avail a home
                  loan. You can check on the lender’s official website about the
                  eligibility criteria. Basic details such as your name, date of
                  birth, employment details, income details, etc., will need to
                  be provided to check the eligibility criteria.
                </li>
                <li>
                  <strong className="text-blue-700">
                    Choose the Tenure and Loan Amount :
                  </strong>
                  Next, the amount of loan that you are availing must be
                  selected. The repayment tenure must be chosen as well.
                </li>
                <li>
                  <strong className="text-blue-700">
                    Submit the Application :
                  </strong>
                  Next, the completely filled out application must be submitted.
                </li>
                <li>
                  <strong className="text-blue-700">Documents :</strong>
                  Next, the relevant documents must be submitted.
                </li>
                <li>
                  <strong className="text-blue-700">Loan Sanction :</strong>
                  Once the verification process has been completed, the loan
                  will be sanctioned. The sanction letter will be provided and
                  the loan amount will be deposited in the bank account.
                </li>
              </ul>
            </div>
          </section>
        </AnimatedSection>

        {/* Compare Home Loans */}
        <AnimatedSection animationClass="animate-slide-in-left">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              Eligibility Criteria for New Users
            </h2>
            <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0">
              {/* Text Content */}
              <ol className="list-decimal list-inside text-lg text-gray-700 leading-relaxed mt-4 md:mr-6">
                <li>
                  Age: 21 to 60 years for salaried individuals, up to 70 years
                  for self-employed.
                </li>
                <li>
                  Income: Minimum income requirements vary by lender and city.
                </li>
                <li>
                  Employment: Stable job history for salaried individuals or a
                  steady business for self-employed.
                </li>
                <li>
                  Property: The property must have clear legal documentation and
                  approval from the lender.
                </li>
              </ol>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection animationClass="animate-slide-in-left">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              Government Schemes for First-Time Home Buyers
            </h2>
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
              {/* Image Section */}
              <img
                src="/images/new user/govt-yojna.jpg"
                alt="Government Schemes for First-Time Home Buyers"
                className="w-full max-w-xs h-auto md:w-1/2 rounded-lg shadow-xl"
              />

              {/* Content Section */}
              <div className="bg-blue-50 p-6 rounded-lg shadow-lg">
                <ul className="list-decimal list-inside text-lg text-gray-700 leading-relaxed space-y-4">
                  <li>
                    <strong className="text-blue-700">
                      Pradhan Mantri Awas Yojana (PMAY):
                    </strong>
                    <ul className="list-disc list-inside ml-6">
                      <li>
                        Interest subsidy for Economically Weaker Sections (EWS),
                        Low Income Groups (LIG), and Middle Income Groups (MIG).
                      </li>
                      <li>
                        Subsidy up to ₹2.67 lakhs under the Credit Linked
                        Subsidy Scheme (CLSS).
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong className="text-blue-700">RBI Guidelines:</strong>
                    <ul className="list-disc list-inside ml-6">
                      <li>
                        The Reserve Bank of India mandates that lenders offer
                        transparency in loan terms.
                      </li>
                      <li>
                        First-time borrowers can benefit from lower
                        Loan-to-Value (LTV) requirements.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection animationClass="animate-fade-in">
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
              Tips for First-Time Home Loan Borrowers
            </h2>
            <div className="flex flex-col md:flex-row-reverse items-center md:items-start space-y-6 md:space-y-0">
              {/* Image */}
              <img
                src="/images/new user/first-timer.jpg"
                alt="Why Consider Balance Transfer"
                className="w-full max-w-xs h-auto mb-4 md:mb-0 md:ml-6 rounded-lg shadow-xl"
              />
              {/* Text Content */}
              <ul className="space-y-4 text-lg text-gray-700 leading-relaxed mt-4 md:mr-6">
                <li>
                  <strong className="text-blue-700">Plan Your EMIs :</strong>o
                  Use a Home Loan EMI Calculator to estimate monthly payments.
                  Choose an EMI amount that fits comfortably within your budget.
                </li>
                <li>
                  <strong className="text-blue-700">
                    Start Saving for a Down Payment :
                  </strong>
                  Most lenders finance 75-90% of the property value. Save for
                  the remaining 10-25%.
                </li>
                <li>
                  <strong className="text-blue-700">
                    Avoid Overborrowing :
                  </strong>
                  Borrow only what you can comfortably repay to avoid financial
                  strain.
                </li>
                <li>
                  <strong className="text-blue-700">
                    Read the Fine Print :
                  </strong>
                  Understand terms like floating vs. fixed interest rates,
                  foreclosure charges, and processing fees.
                </li>
                <li>
                  <strong className="text-blue-700">
                    Seek Professional Advice :
                  </strong>
                  o Consult financial advisors or housing counselors for
                  guidance on choosing the right lender and loan product.
                </li>
              </ul>
            </div>
          </section>
        </AnimatedSection>

        <section className=" w-full max-w-4xl  text-center animate-fadeIn mb-10">
          <h2 className="text-3xl text-blue-600 font-semibold mb-4">
            Get Started Today
          </h2>
          <p className="text-black-300 leading-relaxed mb-6">
            Ready to take the first step toward owning your dream home? Our team
            is here to guide you through the process, from application to
            disbursement. Contact us to make your home-buying journey
            hassle-free!
          </p>
        </section>
      </div>
    </div>
  );
};

export default NewUser;
