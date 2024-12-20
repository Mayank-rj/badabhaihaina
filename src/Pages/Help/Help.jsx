import { useState } from "react";
import { menuData } from "./../../assets/menuData";

// FAQ Accordion Item Component
const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-4 bg-gray-100 hover:bg-gray-200 rounded-lg font-semibold flex justify-between items-center"
      >
        <span>{question}</span>
        <span>{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && <p className="p-4 bg-gray-50 border-t-2">{answer}</p>}
    </div>
  );
};

// Sidebar Menu Component
const SidebarMenu = () => (
  <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg">
    <h2 className="text-xl font-bold mb-4">Loan and Insurance Services</h2>
    {Object.keys(menuData).map((category, idx) => (
      <div key={idx} className="mb-6">
        <h3 className="text-lg font-semibold mb-2">{category}</h3>
        <ul>
          {menuData[category].map((item, idx) => (
            <li key={idx} className="mb-2">
              <a href={item.path} className="text-blue-300 hover:text-blue-500">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

// Main HelpPage Component
const Help = () => {
  const faqs = [
    {
      question: "What is a Home Loan?",
      answer:
        "A Home Loan is a financial product where a bank or financial institution lends you money to buy a house, with the property itself serving as collateral.",
    },
    {
      question: "How do I compare loan rates?",
      answer:
        "You can use our comparison tool to evaluate rates from various lenders instantly and choose the best deal that suits your needs.",
    },
    {
      question: "What types of insurance do you offer?",
      answer:
        "We offer a variety of insurance options, including Health, Car, Life, and Travel Insurance. Check our Insurance section for more details.",
    },
    // Add more FAQs as needed
  ];

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-50">
      {/* Sidebar */}
      <div className="lg:w-1/4 w-full p-6">
        <SidebarMenu />
      </div>

      {/* Help Content */}
      <div className="lg:w-3/4 w-full p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
          Help & FAQs
        </h1>

        <section>
          <h2 className="text-2xl lg:text-3xl font-semibold text-gray-700 mb-4">
            Frequently Asked Questions
          </h2>
          {faqs.map((faq, idx) => (
            <FaqItem key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </section>

        <section className="mt-10">
          <h2 className="text-2xl lg:text-3xl font-semibold text-gray-700 mb-4">
            How to Use Our Services
          </h2>
          <p className="text-gray-600 mb-4">
            To get started with our services, simply choose a loan or insurance
            product from the sidebar menu, compare rates, and apply online. You
            can also contact our support team for assistance.
          </p>
          <p className="text-gray-600">
            We are here to guide you through the process and make it as easy as
            possible to secure a loan or insurance policy that suits your needs.
          </p>
        </section>

        <section className="bg-blue-50 py-16 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <div className="space-y-8">
              {[
                {
                  step: "Explore Your Options",
                  description:
                    "Browse through our detailed guides on car loans, home loans, and other financial products. Learn about different types of loans, interest rates, and eligibility criteria to make an informed decision.",
                },
                {
                  step: "Compare Deals",
                  description:
                    "Use our comparison tools to evaluate offers from top lenders. Compare interest rates, loan tenures, processing fees, and other features to find the deal that works best for you.",
                },
                {
                  step: "Personalized Recommendations",
                  description:
                    "Share your preferences and financial details to receive tailored loan recommendations. Our intelligent system matches you with the most suitable lenders based on your requirements.",
                },
                {
                  step: "Calculate Your EMIs",
                  description:
                    "Utilize our EMI calculators to estimate your monthly payments. This helps you plan your finances better and ensures that your loan is within your budget.",
                },
                {
                  step: "Submit Your Query",
                  description:
                    'Have questions? Need further assistance? Click on the "Submit Query" button to get expert advice. Our team is here to guide you every step of the way.',
                },
                {
                  step: "Apply Easily",
                  description:
                    "Once you've selected the ideal loan, proceed to the application process directly through our platform. Enjoy a seamless, secure, and hassle-free experience.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-2xl font-semibold text-blue-500 mb-2">
                    {item.step}
                  </h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Help;
