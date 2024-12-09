// import React, { useState, useEffect } from "react";
import "./home.css";
import SwiperSlider from "../../Components/SwiperSlider/SwiperSlider";

export default function Home() {
  const heroContent = [
    {
      heading: "Welcome to Our Website",
      para: "our journey starts here. Explore now!",
      img: "/home-img/hero-sec.jpg",
      url: "home-insurance"
    },
    {
      heading: "Explore Our Services",
      para: "our journey starts here. Explore now!",
      img: "/home-img/hero-sec-1.jpg",
      url: "term-life-insurance"
    },
    {
      heading: "Discover Amazing Deals",
      para: "our journey starts here. Explore now!",
      img: "/home-img/hero-sec-2.jpg",
      url: "personal-loan"
    },
    {
      heading: "Join Our Community",
      para: "our journey starts here. Explore now!",
      img: "/home-img/hero-sec-3.jpg",
      url: "car-loan"
    },
    {
      heading: "Take Your Business to the Next Level",
      para: "our journey starts here. Explore now!",
      img: "/home-img/hero-sec-4.jpg",
      url: "health-insurance"
    },
    {
      heading: "Take Your Business to the Next Level",
      para: "our journey starts here. Explore now!",
      img: "/home-img/hero-sec-5.jpg",
      url: "loan-against-property"
    },
  ];

  return (
    <>
      <header>
        <SwiperSlider images={heroContent} />
      </header>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
              Home Loan: Your Path to Owning a Dream Home
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              A home loan is a financial solution that helps individuals
              purchase, construct, or renovate a home by borrowing money from a
              lender. These loans are secured against purchased property and
              repaid through monthly installments over a specified tenure.
            </p>
            <div className="bg-gray-100 rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Eligibility Criteria
              </h3>
              <p className="text-gray-600">
                Lenders evaluate your income, credit score, employment
                stability, and the property’s valuation. A strong financial
                profile improves the chances of loan approval.
              </p>
            </div>
            <p className="text-lg text-gray-600 mt-6">
              Home loans make it easier to achieve the dream of homeownership,
              offering affordability and convenience. However, comparing
              lenders, understanding the terms, and planning repayment are
              crucial to ensuring a smooth borrowing experience.
            </p>
          </div>

          {/* Right Query Form */}
          <div className="bg-teal-500 rounded-lg shadow-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Submit Your Query</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full border border-teal-300 rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-700"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full border border-teal-300 rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-700"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Write your query"
                  rows="4"
                  className="w-full border border-teal-300 rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-700"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-teal-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-teal-800 transition"
              >
                Submit Query
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Image Break */}
      <div className="w-full">
        <img
          src="/home-img/02.jpg"
          alt="Section Break"
          className="w-full h-48 md:h-64 object-cover"
        />
      </div>

      <section className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 py-16 px-6 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-extrabold mb-6">
              Personal Loan: Quick & Flexible Financial Support
            </h2>
            <p className="text-lg mb-6">
              A Personal Loan is an unsecured loan that provides financial
              support for a variety of needs, such as medical emergencies,
              weddings, travel, or debt consolidation. Unlike secured loans, it
              does not require any collateral, making it a convenient and
              accessible option.
            </p>
            <p className="text-lg mb-6">
              Personal loans are versatile, allowing borrowers to use the funds
              without restrictions. With minimal documentation and quick
              processing, many lenders offer instant approvals and
              disbursements, ensuring funds are available when needed.
            </p>
            <p className="text-lg">
              A personal loan is an excellent choice for individuals seeking a
              quick and flexible financial solution without pledging assets. It
              bridges the gap during emergencies or supports planned
              expenditures, providing peace of mind and financial flexibility.
            </p>
          </div>

          {/* Right Decorative Card */}
          <div className="bg-white rounded-xl shadow-xl p-8 text-gray-800">
            <h3 className="text-2xl font-bold mb-4">
              Key Features of Personal Loans
            </h3>
            <ul className="list-disc list-inside space-y-3 text-lg">
              <li>
                No collateral required, making it risk-free for borrowers.
              </li>
              <li>
                Quick approval and disbursement for urgent financial needs.
              </li>
              <li>Flexible usage with no restrictions on fund allocation.</li>
              <li>
                Customizable repayment tenures based on financial capacity.
              </li>
              <li>
                Competitive interest rates influenced by credit score and
                income.
              </li>
            </ul>
            <div className="mt-8">
              <a
                href="#"
                className="inline-block bg-purple-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-purple-600 transition"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gradient-to-r text-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-extrabold mb-6">
              Unsecured Business Loan: Fuel Your Growth Without Collateral
            </h2>
            <p className="text-lg mb-6">
              An unsecured business loan is a financial solution designed for
              entrepreneurs and businesses seeking funds without pledging any
              collateral. Ideal for small and medium-sized enterprises, this
              type of loan provides the flexibility to manage working capital,
              expand operations, purchase inventory, or invest in marketing.
            </p>
            <p className="text-lg mb-6">
              With no collateral required, unsecured business loans rely on
              factors like creditworthiness, business turnover, and repayment
              capacity. They typically have faster processing times, making them
              an excellent choice for addressing urgent financial needs.
              However, interest rates may be slightly higher compared to secured
              loans, reflecting the increased risk for lenders.
            </p>
            <p className="text-lg">
              When opting for an unsecured business loan, it’s crucial to
              compare lenders based on interest rates, loan tenures, eligibility
              criteria, and additional charges. This helps you secure a loan
              that aligns with your business needs while maintaining financial
              stability.
            </p>
          </div>

          {/* Right Decorative Card */}
          <div className="bg-white rounded-lg shadow-xl p-8 text-gray-800">
            <h3 className="text-2xl font-bold mb-4 text-indigo-600">
              Why Choose an Unsecured Business Loan?
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold mr-4">
                  ✓
                </div>
                <span>
                  **No Collateral Required**: Access funds without risking your
                  assets.
                </span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold mr-4">
                  ✓
                </div>
                <span>
                  **Quick Processing**: Get funds faster to address urgent
                  business needs.
                </span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-pink-500 flex items-center justify-center text-white font-bold mr-4">
                  ✓
                </div>
                <span>
                  **Flexible Usage**: Use the funds for working capital,
                  marketing, inventory, or expansion.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Image Break */}
      <div className="w-full">
        <img
          src="/home-img/04.jpg"
          alt="Section Break"
          className="w-full h-48 md:h-64 object-cover"
        />
      </div>

      <section className="py-16 px-6 bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-extrabold mb-6">
              Loan Against Property (LAP)
            </h2>
            <p className="text-lg mb-6">
              A Loan Against Property (LAP) is a secured financial product that
              allows individuals or businesses to borrow funds by mortgaging
              their residential, commercial, or industrial property as
              collateral. It is a popular choice for those seeking high-value
              loans at relatively low interest rates.
            </p>
            <p className="text-lg mb-6">
              The loan amount typically depends on the property’s market value,
              with lenders offering a percentage of the value as the loan, known
              as the Loan-to-Value (LTV) ratio. Borrowers can use the funds for
              various purposes, including business expansion, debt
              consolidation, medical emergencies, or educational expenses.
            </p>
            <p className="text-lg">
              One of the key advantages of LAP is its affordability, as the
              secured nature of the loan reduces the risk for lenders, leading
              to competitive interest rates and flexible repayment tenures.
              However, failure to repay can result in foreclosure, making timely
              repayments crucial. Compare offers carefully to ensure the best
              deal and leverage your property equity effectively.
            </p>
          </div>

          {/* Right Side: Highlight Box */}
          <div className="relative bg-white text-gray-800 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-4">
              Why Choose a Loan Against Property?
            </h3>
            <ul className="list-disc list-inside space-y-4">
              <li className="text-lg">
                **High-value loans** at relatively low interest rates.
              </li>
              <li className="text-lg">
                Flexible repayment tenures to suit financial planning.
              </li>
              <li className="text-lg">
                Funds can be used for diverse purposes, from business expansion
                to emergencies.
              </li>
              <li className="text-lg">
                Leverages the equity of your property without losing ownership.
              </li>
            </ul>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-200 to-transparent opacity-30 rounded-lg pointer-events-none"></div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto space-y-8">
          <h2 className="text-4xl font-extrabold text-gray-800 leading-tight">
            Flexi Overdraft: Financial Flexibility at Your Fingertips
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            A Flexi Overdraft (OD) is a modern financial tool designed to offer
            individuals and businesses the flexibility to manage their finances
            effectively. With a revolving credit facility, you can withdraw
            funds as needed and only pay interest on what you use, not the full
            sanctioned limit. This makes it a cost-effective solution for
            fluctuating financial needs or unforeseen expenses.
          </p>

          <div className="bg-gray-100 text-gray-800 rounded-lg shadow-xl p-8 space-y-6">
            <h3 className="text-2xl font-semibold">Key Benefits</h3>
            <ul className="space-y-4">
              <li className="text-lg">
                <strong>Interest on Utilized Amount:</strong> Pay interest only
                on the amount you withdraw, reducing borrowing costs
                significantly.
              </li>
              <li className="text-lg">
                <strong>Repayment Flexibility:</strong> Repay at your
                convenience without rigid EMI structures, and reborrow the
                repaid amount within the limit.
              </li>
              <li className="text-lg">
                <strong>Ideal for Irregular Cash Flows:</strong> Perfect for
                businesses with seasonal fluctuations or personal finances with
                occasional shortfalls.
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg shadow-xl p-8 mt-8">
            <h3 className="text-2xl font-semibold text-teal-500">
              Why Choose Flexi OD?
            </h3>
            <p className="text-lg text-gray-700">
              With minimal documentation and quick approvals, Flexi OD offers
              financial agility with the convenience of digital management.
              Whether you’re expanding a business, meeting working capital
              needs, or covering personal emergencies, Flexi OD gives you
              control over your finances without the burden of fixed-term loans.
            </p>
          </div>

          <p className="text-lg text-gray-600">
            Flexi Overdraft facilities are becoming increasingly popular for
            those who value flexibility, cost-efficiency, and full control over
            their financial resources. Manage your finances, track interest
            savings, and make repayments easily—all in real-time.
          </p>
        </div>
      </section>

      {/* Image Break */}
      <div className="w-full">
        <img
          src="/home-img/03.jpg"
          alt="Section Break"
          className="w-full h-48 md:h-64 object-cover"
        />
      </div>

      <section className="py-16 px-6 bg-gradient-to-r from-gray-100 via-indigo-200 to-teal-300">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
            Insurance: Your Safety Net for Unforeseen Risks
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
            Insurance is a financial safety net that protects individuals and
            businesses against unforeseen risks and losses. It operates on the
            principle of risk-sharing, where policyholders pay premiums to an
            insurer in exchange for coverage against specific events like
            accidents, illnesses, natural disasters, or financial liabilities.
            By transferring potential financial burdens to insurers, individuals
            can safeguard their savings and ensure stability during challenging
            times.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Content */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Types of Insurance
              </h3>
              <ul className="list-disc text-left text-gray-600 space-y-2">
                <li>Life Insurance</li>
                <li>Health Insurance</li>
                <li>Vehicle Insurance</li>
                <li>Property Insurance</li>
                <li>Business Insurance</li>
              </ul>
            </div>

            {/* Right Content */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Why Insurance Matters
              </h3>
              <p className="text-gray-600 mb-6">
                Insurance comes in various forms, each tailored to address
                specific needs. It not only provides monetary support but also
                fosters peace of mind, enabling people to plan their futures
                with confidence.
              </p>
              <p className="text-gray-600">
                Selecting the right insurance involves understanding coverage,
                exclusions, and claim processes to maximize benefits and ensure
                the best protection for you and your loved ones.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-8">
            Car Loan: Drive Your Dream Car
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            A car loan is a secured loan that helps you purchase a new or used
            vehicle without paying the full cost upfront. It allows you to
            spread the cost over time with manageable monthly installments.
            Offered by banks, NBFCs, and financial institutions, this loan
            covers a significant portion of the car’s price, with the borrower
            required to make a down payment.
          </p>
          <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">
              Key Features of Car Loans
            </h3>
            <ul className="list-disc list-inside space-y-4 text-lg">
              <li>Affordable monthly repayments with flexible tenures</li>
              <li>
                Competitive interest rates based on credit score and loan terms
              </li>
              <li>Higher loan amounts with lower down payments</li>
              <li>
                Quick and easy approval process for a hassle-free experience
              </li>
            </ul>
            <a
              href="#"
              className="inline-block bg-teal-500 text-white mt-4 font-bold py-3 px-8 rounded-lg hover:bg-teal-600 transition"
            >
              Apply Now
            </a>
          </div>
          <p className="text-lg md:text-xl text-gray-700 mt-8">
            Car loans make owning a vehicle more accessible than ever. However,
            it’s crucial to compare lenders, interest rates, processing fees,
            and terms to ensure you secure the best deal that aligns with your
            budget and needs. Drive away with confidence!
          </p>
        </div>
      </section>
    </>
  );
}
