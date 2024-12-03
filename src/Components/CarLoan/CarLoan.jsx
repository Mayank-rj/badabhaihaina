import { Cta } from "../cta/Cta";
import "./carLoan.css";

const CarLoan = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b  text-black flex flex-col items-center px-4">
      {/* Header Section */}
      <header className="relative text-center mt-10 w-full bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 py-8 px-4 shadow-lg">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold animate-fadeIn mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
          Car Loan: How to Get the Best Deal
        </h1>
        <p className="text-base sm:text-lg text-gray-300 animate-slideUp">
          Discover the key factors to consider and how to secure the best car
          loan deal in India.
        </p>
      </header>

      {/* Introduction Section */}
      <section className="mt-10 w-full max-w-4xl animate-fadeIn text-center">
        <h2 className="text-3xl font-semibold mb-4">Introduction</h2>
        <p className="text-black-300 leading-relaxed mb-6">
          A car loan is a popular financial product that allows you to purchase
          a vehicle without paying the entire amount upfront. With a variety of
          lenders offering competitive rates, it’s important to shop around and
          choose the best loan offer for your needs.
        </p>
        <div className="relative group">
          <img
            src="/images/Car Loan/01.jpg"
            alt="Car Loan Introduction"
            className="rounded-lg shadow-lg w-full transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 group-hover:opacity-60 transition-opacity"></div>
        </div>
      </section>

      {/* Factors Section */}
      <section className="mt-10 w-full max-w-4xl animate-slideUp">
        <h2 className="text-3xl font-semibold mb-4 text-center">
          What to Know Before Applying for a Car Loan
        </h2>
        <div className="grid lg:grid-cols-2 gap-8">
          <ul className="text-gray-300 space-y-4 list-none">
            {[
              {
                title: "Credit Score",
                desc: "Your CIBIL score plays a significant role in determining the interest rate and loan approval. A higher CIBIL score (750 and above) will help you get a loan with a lower interest rate.",
                icon: "fas fa-credit-card",
              },
              {
                title: "Loan Tenure",
                desc: "Car loan tenures in India usually range from 1 to 7 years. A shorter tenure means higher monthly EMI payments but less overall interest.",
                icon: "fas fa-clock",
              },
              {
                title: "Down Payment",
                desc: "Most car loans in India require a down payment of 10% to 25% of the car’s on-road price. A larger down payment can reduce the loan amount and, consequently, the interest you pay over time.",
                icon: "fas fa-wallet",
              },
            ].map(({ title, desc, icon }, idx) => (
              <li
                key={idx}
                className="p-4 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-start space-x-4"
              >
                <i className={`${icon} text-teal-400 text-2xl mt-1`}></i>
                <div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="text-gray-300">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
          <img
            src="/images/Car Loan/02.jpg"
            alt="Factors to Know"
            className="rounded-lg max-w-xs shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src="/images/Car Loan/06.jpg"
              alt="Factors to Know"
              className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Content Section */}
          <div>
            <h2 className="text-3xl font-semibold mb-4">Types of Car Loans</h2>
            <ul className="space-y-6">
              {[
                {
                  title: "New Car Loan",
                  description:
                    "Designed for the purchase of brand-new vehicles, these loans often come with lower interest rates and higher loan-to-value ratios.",
                  features: [
                    "Attractive offers on the latest models",
                    "Customizable repayment tenures",
                    "Higher loan amounts based on the car’s value",
                  ],
                },
                {
                  title: "Used Car Loan",
                  description:
                    "Tailored for purchasing pre-owned vehicles, these loans are ideal for budget-conscious buyers.",
                  features: [
                    "Competitive interest rates",
                    "Financing up to 80-90% of the car’s value",
                    "Loans available for certified pre-owned cars",
                  ],
                },
                {
                  title: "Zero Down Payment Car Loan",
                  description:
                    "For those who prefer not to pay upfront, this loan covers the entire cost of the car. However, it may involve slightly higher interest rates.",
                  features: [],
                },
                {
                  title: "Refinanced Car Loan",
                  description:
                    "Ideal for reducing the interest burden on your existing car loan. Refinancing helps in lowering EMIs and managing finances better.",
                  features: [],
                },
              ].map((item, idx) => (
                <li key={idx} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-700 mb-4">{item.description}</p>
                  {item.features.length > 0 && (
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      {item.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Cta
        heading="Take the Next Step Toward Your Dream Car"
        message="Drive your dream car without breaking the bank! Explore our tailored
            car loan options with competitive interest rates, flexible tenures,
            and minimal paperwork. Let us help you hit the road faster and
            smarter."
      />

      {/* Lenders Section */}
      <section className="mt-10 w-full max-w-4xl animate-fadeIn">
        <h2 className="text-3xl font-semibold mb-4 text-center">
          Where to Get a Car Loan in India
        </h2>
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <img
            src="/images/Car Loan/03.jpg"
            alt="Where to Get Car Loan"
            className="rounded-lg shadow-lg w-full lg:w-1/2 transition-transform duration-300 hover:scale-105"
          />
          <ul className="text-black-300 space-y-4 list-disc pl-6">
            {[
              "Leading banks like HDFC Bank, ICICI Bank, and SBI, as well as NBFCs like Bajaj Finserv and HDFC Ltd., offer car loans with competitive interest rates and flexible terms.",
              "Many car dealerships in India also provide in-house financing options. However, it’s important to compare these deals with other lenders to ensure you're getting the best terms.",
              "Online lending platforms such as Bajaj Finserv, Tata Capital, and IDFC Bank also offer car loans with quick approvals and minimal documentation.",
            ].map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="mt-10 w-full max-w-4xl text-center animate-fadeIn mb-10">
        <h2 className="text-3xl font-semibold mb-4">Conclusion</h2>
        <p className="text-black-300 leading-relaxed mb-6">
          Choosing the best car loan in India requires careful consideration of
          the loan amount, tenure, interest rates, and your own financial
          circumstances. By comparing various lenders and understanding your own
          budget, you can secure the most affordable and convenient car loan.
        </p>
        <img
          src="/images/Car Loan/04.jpg"
          alt="Conclusion"
          className="rounded-lg shadow-lg w-full transition-transform duration-300 hover:scale-105"
        />
      </section>
    </div>
  );
};

export default CarLoan;
