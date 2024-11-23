import React, { useEffect, useRef } from "react";
import "./carLoan.css";

const CarLoan = () => {
  const sectionsRef = useRef([]);

  // Add scrolling animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <header className="bg-blue-600 text-white text-center py-6">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          Car Loan: How to Get the Best Deal
        </h1>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto mt-8">
        {[
          {
            id: "introduction",
            title: "Introduction",
            image: "/images/Car Loan/carloan-intro.jpg",
            content:
              "A car loan is a popular financial product that allows you to purchase a vehicle without paying the entire amount upfront. With a variety of lenders offering competitive rates, it’s important to shop around and choose the best loan offer for your needs.",
          },
          {
            id: "what-to-know",
            title: "What to Know Before Applying for a Car Loan",
            image: "/images/Car Loan/what.jpg",
            content: (
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  <strong>Credit Score:</strong> Your CIBIL score plays a
                  significant role in determining the interest rate and loan
                  approval. A higher CIBIL score (750 and above) will help you
                  get a loan with a lower interest rate.
                </li>
                <li>
                  <strong>Loan Tenure:</strong> Car loan tenures in India
                  usually range from 1 to 7 years. A shorter tenure means higher
                  monthly EMI payments but less overall interest.
                </li>
                <li>
                  <strong>Down Payment:</strong> Most car loans in India require
                  a down payment of 10% to 25% of the car’s on-road price. A
                  larger down payment can reduce the loan amount and,
                  consequently, the interest you pay over time.
                </li>
              </ul>
            ),
          },
          {
            id: "where-to-get",
            title: "Where to Get a Car Loan in India",
            image: "/images/Car Loan/where.jpg",
            content: (
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  <strong>Banks and NBFCs:</strong> Leading banks like HDFC
                  Bank, ICICI Bank, and State Bank of India (SBI), as well as
                  NBFCs like Bajaj Finserv and HDFC Ltd., offer car loans with
                  competitive interest rates and flexible terms.
                </li>
                <li>
                  <strong>Car Dealership Financing:</strong> Many car
                  dealerships in India also provide in-house financing options.
                  However, it’s important to compare these deals with other
                  lenders to ensure you're getting the best terms.
                </li>
                <li>
                  <strong>Online Lenders:</strong> Online lending platforms such
                  as Bajaj Finserv, Tata Capital, and IDFC Bank also offer car
                  loans with quick approvals and minimal documentation.
                </li>
              </ul>
            ),
          },
          {
            id: "best-deal",
            title: "How to Get the Best Deal on Your Car Loan in India",
            image: "/images/Car Loan/how.jpg",
            content: (
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  <strong>Check Your CIBIL Score:</strong> Before applying for a
                  car loan, check your CIBIL score using free tools from sites
                  like CIBIL or Experian India. A high score improves your
                  chances of getting a loan with favorable terms.
                </li>
                <li>
                  <strong>Compare Loan Offers:</strong> Interest rates for car
                  loans in India typically range from 8% to 12%. Compare offers
                  from multiple lenders, including banks, NBFCs, and
                  dealerships, to find the best rate.
                </li>
                <li>
                  <strong>Consider EMI & Loan Tenure:</strong> While opting for
                  a longer loan tenure may reduce your monthly EMI, it will
                  increase the total interest you pay over the loan term.
                  Evaluate whether the EMI fits your budget.
                </li>
                <li>
                  <strong>Look for Special Schemes & Discounts:</strong> Many
                  lenders in India offer special schemes, festive discounts, and
                  cash-back offers. Keep an eye out for these opportunities
                  during festivals like Diwali or New Year.
                </li>
              </ul>
            ),
          },
        ].map((section, index) => (
          <section
            key={section.id}
            className="mb-8 opacity-0"
            ref={(el) => (sectionsRef.current[index] = el)}
          >
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              {section.title}
            </h2>
            <img
              src={section.image}
              alt={section.title}
              className="w-full mb-4"
            />
            <div>{section.content}</div>
          </section>
        ))}

        {/* Conclusion */}
        <section className="fade-in-up">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Conclusion
          </h2>
          <img
            src="/images/Car Loan/conclusion.jpg"
            alt="Car Loan Conclusion"
            className="w-full mb-4"
          />
          <p className="text-gray-700">
            Choosing the best car loan in India requires careful consideration
            of the loan amount, tenure, interest rates, and your own financial
            circumstances. By comparing various lenders and understanding your
            own budget, you can secure the most affordable and convenient car
            loan.
          </p>
        </section>
      </main>
    </div>
  );
};

export default CarLoan;
