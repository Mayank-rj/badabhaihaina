import { Cta } from "../cta/Cta";
import "./FlexiOD.css";

const FlexiOD = () => {
  const factors = [
    {
      title: "Creditworthiness",
      desc: "Your credit score and repayment history are crucial for determining your eligibility for a Flexi OD. A higher score increases your chances of approval and better interest rates.",
      icon: "fas fa-credit-card",
    },
    {
      title: "Overdraft Limit",
      desc: "The overdraft limit is based on your income, account history, or asset value. It's important to choose a limit that aligns with your financial needs.",
      icon: "fas fa-wallet",
    },
    {
      title: "Interest Rate",
      desc: "Interest is charged only on the amount you use, making it a cost-effective solution for short-term financial needs. Rates vary depending on the lender.",
      icon: "fas fa-percentage",
    },
  ];

  const overdraftTypes = [
    {
      title: "Personal Overdraft",
      description:
        "Designed for individual borrowers to meet personal expenses, such as medical emergencies, travel, or weddings.",
      features: [
        "No collateral required",
        "Flexible repayment options",
        "Interest charged only on the utilized amount",
      ],
    },
    {
      title: "Business Overdraft",
      description:
        "Tailored for businesses to manage working capital, inventory, or unexpected expenses.",
      features: [
        "High overdraft limits",
        "Collateral may be required for higher amounts",
        "Interest charged on daily usage",
      ],
    },
    {
      title: "Salary Overdraft",
      description:
        "Offered to salaried individuals based on their monthly income. This type of overdraft provides quick access to funds for short-term needs.",
      features: [
        "Linked to your salary account",
        "No prepayment penalties",
        "Quick approval process",
      ],
    },
    {
      title: "Secured Overdraft",
      description:
        "Secured against fixed deposits, insurance policies, or other assets, this overdraft offers lower interest rates and higher limits.",
      features: [
        "Lower interest rates",
        "Asset-backed security",
        "Ideal for large expenses",
      ],
    },
  ];

  const lenders = [
    "Major banks like HDFC Bank, ICICI Bank, and SBI offer Flexi OD facilities tailored to personal and business needs.",
    "NBFCs and digital lending platforms like Bajaj Finserv and KreditBee provide quick and flexible overdraft solutions.",
    "Online platforms allow you to compare overdraft terms and apply seamlessly, ensuring minimal documentation and instant access to funds.",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b text-black flex flex-col items-center px-4">
      {/* Header Section */}
      <header className="relative text-center mt-10 w-full bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 py-8 px-4 shadow-lg">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold animate-fadeIn mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">
          Flexi Overdraft: The Smart Way to Borrow
        </h1>
        <p className="text-base sm:text-lg text-gray-300 animate-slideUp">
          Learn how Flexi OD can provide instant access to funds with flexible
          repayment options.
        </p>
      </header>

      {/* Introduction Section */}
      <section className="mt-10 w-full max-w-4xl text-center">
        <h2 className="text-3xl font-semibold mb-4">Introduction</h2>
        <p className="text-black-300 leading-relaxed mb-6">
          Flexi Overdraft (Flexi OD) is a financial facility that allows you to
          withdraw funds as needed within a pre-approved limit. Interest is
          charged only on the utilized amount, making it an ideal solution for
          short-term financial requirements.
        </p>
        <img
          src="/images/flexi od/01.jpg"
          alt="Flexi Overdraft Introduction"
          className="rounded-lg shadow-lg w-full transition-transform duration-300 hover:scale-105"
        />
      </section>

      {/* Factors Section */}
      <section className="mt-10 w-full max-w-4xl">
        <h2 className="text-3xl font-semibold mb-4 text-center">
          Key Factors to Consider Before Opting for Flexi OD
        </h2>
        <div className="grid lg:grid-cols-2 gap-8">
          <ul className="text-gray-300 space-y-4">
            {factors.map(({ title, desc, icon }, idx) => (
              <li
                key={idx}
                className="p-4 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-start space-x-4"
              >
                <i className={`${icon} text-orange-400 text-2xl mt-1`}></i>
                <div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="text-gray-300">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
          <img
            src="/images/flexi od/02.jpg"
            alt="Factors to Consider"
            className="rounded-lg max-w-xs shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
      </section>

      {/* Types of Overdrafts */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <img
            src="/images/flexi od/03.png"
            alt="Types of Overdrafts"
            className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          />
          <div>
            <h2 className="text-3xl font-semibold mb-4">Types of Overdrafts</h2>
            <ul className="space-y-6">
              {overdraftTypes.map(({ title, description, features }, idx) => (
                <li key={idx} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold mb-2">{title}</h3>
                  <p className="text-gray-700 mb-4">{description}</p>
                  {features.length > 0 && (
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      {features.map((feature, i) => (
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
        heading="Unlock the Benefits of Flexi OD Today"
        message="Manage your finances effortlessly with Flexi Overdraft. Enjoy flexible borrowing, interest-only on usage, and minimal hassle. Apply now and experience the freedom of smarter credit."
      />

      {/* Lenders Section */}
      <section className="mt-10 w-full max-w-4xl">
        <h2 className="text-3xl font-semibold mb-4 text-center">
          Where to Apply for Flexi OD
        </h2>
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <img
            src="/images/flexi od/04.jpg"
            alt="Where to Apply for Flexi OD"
            className="rounded-lg shadow-lg w-full lg:w-1/2 transition-transform duration-300 hover:scale-105"
          />
          <ul className="text-black-300 space-y-4 list-disc pl-6">
            {lenders.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="mt-10 w-full max-w-4xl text-center mb-10">
        <h2 className="text-3xl font-semibold mb-4">Conclusion</h2>
        <p className="text-black-300 leading-relaxed mb-6">
          Flexi Overdraft is a versatile financial tool that caters to both
          personal and business needs. By understanding the terms, comparing
          lenders, and choosing a suitable limit, you can manage your finances
          efficiently and stay financially secure.
        </p>
        <img
          src="/images/flexi od/05.jpg"
          alt="Conclusion"
          className="rounded-lg shadow-lg w-full transition-transform duration-300 hover:scale-105"
        />
      </section>
    </div>
  );
};

export default FlexiOD;
