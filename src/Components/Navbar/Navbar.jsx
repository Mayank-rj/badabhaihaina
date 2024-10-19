import { Link } from "react-router-dom";
import {
  FaHome,
  FaMoneyBillWave,
  FaUserTie,
  FaBusinessTime,
  FaShieldAlt,
} from "react-icons/fa";

const iconMapping = {
  "Home BT(Balance Transfer)": <FaHome className="h-5 w-5 text-purple-600" />,
  "Compare Home Loan Rate": (
    <FaMoneyBillWave className="h-5 w-5 text-purple-600" />
  ),
  "New User": <FaUserTie className="h-5 w-5 text-purple-600" />,
  "Personal BT(Balance Transfer)": (
    <FaHome className="h-5 w-5 text-purple-600" />
  ),
  "Compare Personal Loan Rate": (
    <FaMoneyBillWave className="h-5 w-5 text-purple-600" />
  ),
  "Unsecured Business Loan": (
    <FaBusinessTime className="h-5 w-5 text-purple-600" />
  ),
  "Term Loan": <FaMoneyBillWave className="h-5 w-5 text-purple-600" />,
  "Working Capital": <FaBusinessTime className="h-5 w-5 text-purple-600" />,
  "MSME Loan": <FaUserTie className="h-5 w-5 text-purple-600" />,
  Insurance: <FaShieldAlt className="h-5 w-5 text-purple-600" />,
  "Term Life Insurance": <FaShieldAlt className="h-5 w-5 text-purple-600" />,
  "Car Insurance": <FaShieldAlt className="h-5 w-5 text-purple-600" />,
  "Health Insurance": <FaShieldAlt className="h-5 w-5 text-purple-600" />,
  "Two Wheeler Insurance": <FaShieldAlt className="h-5 w-5 text-purple-600" />,
  "Travel Insurance": <FaShieldAlt className="h-5 w-5 text-purple-600" />,
  "Home Insurance": <FaShieldAlt className="h-5 w-5 text-purple-600" />,
};

const DropDown = ({ item, categoryIcon }) => {
  console.log(categoryIcon);
  return (
    <>
      {/* Dropw Down */}
      <div className="flex flex-col items-start">
        <div className="text-purple-600">
          {iconMapping[item.label] || (
            <FaUserTie className="h-5 w-5 text-purple-600" />
          )}
        </div>
        <Link to="/news" className="text-gray-800 font-semibold">
          {item.label}
        </Link>
        <p className="text-gray-500 text-sm">{item.description}</p>
      </div>
    </>
  );
};

const Menu = ({ title, items }) => {
  return (
    <>
      <div className="group h-20 flex items-center">
        <Link to="/resources" className="text-gray-600 hover:text-gray-800">
          {title}
        </Link>

        {/* Full-width Dropdown content (shown on hover) */}
        <div className="absolute left-0 top-full w-screen bg-white shadow-lg p-6 grid grid-cols-3 gap-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
          {items.map((item, index) => (
            <DropDown key={index} item={item} categoryIcon={title} />
          ))}
        </div>
      </div>
    </>
  );
};

const Navbar = () => {
  const menuData = {
    "Home Loan": [
      {
        label: "Home BT(Balance Transfer)",
        description: "All the latest updates about Home BT in one place.",
      },
      {
        label: "Compare Home Loan Rate",
        description: "Compare rates from multiple providers instantly.",
      },
      {
        label: "New User",
        description: "Get started with your first home loan application today.",
      },
    ],
    "Personal Loan": [
      {
        label: "Personal BT(Balance Transfer)",
        description: "Transfer your personal loan at lower interest rates.",
      },
      {
        label: "Compare Personal Loan Rate",
        description: "Find the best personal loan rates tailored to you.",
      },
      {
        label: "New User",
        description: "Start your personal loan journey with our experts.",
      },
    ],
    "Unsecured Business Loan": [
      {
        label: "Term Loan",
        description: "Get funding for business needs with flexible terms.",
      },
      {
        label: "Working Capital",
        description:
          "Ensure liquidity for daily operations with working capital loans.",
      },
      {
        label: "MSME Loan",
        description:
          "Special loans tailored for Micro, Small, and Medium Enterprises.",
      },
    ],
    "Loan Against Property": [
      {
        label: "Home BT(Balance Transfer)",
        description: "Refinance your loan against property with better terms.",
      },
      {
        label: "Compare Loan Against Property Rate",
        description: "Evaluate the best rates for loans against property.",
      },
      {
        label: "New User",
        description: "Get assistance with your first loan against property.",
      },
    ],
    Insurance: [
      {
        label: "Term Life Insurance",
        description:
          "Secure your loved ones with comprehensive term life plans.",
      },
      {
        label: "Car Insurance",
        description:
          "Get coverage for your vehicle with top car insurance plans.",
      },
      {
        label: "Health Insurance",
        description: "Protect your health with our range of insurance plans.",
      },
      {
        label: "Two Wheeler Insurance",
        description: "Affordable insurance for your bike or scooter.",
      },
      {
        label: "Travel Insurance",
        description:
          "Ensure peace of mind on your travels with travel insurance.",
      },
      {
        label: "Home Insurance",
        description:
          "Safeguard your home with reliable home insurance policies.",
      },
    ],
  };

  return (
    <nav className="bg-white shadow-md relative">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-gray-800 text-lg font-semibold text-center">
          <Link to="/" className="flex flex-col items-center">
            <img src="./hug.png" alt="Logo" style={{height:"50px"}}/>
            Bada Bhai  Hai Na
          </Link>
        </div>

        {/* Menu Items */}
        <div className="hidden md:flex space-x-8 items-center">
          {Object.keys(menuData).map((key) => (
            <Menu key={key} title={key} items={menuData[key]} />
          ))}
          <Link to="/what-we-do" className="text-gray-600 hover:text-gray-800">
            Flexi OD
          </Link>
          <Link to="/who-we-help" className="text-gray-600 hover:text-gray-800">
            Car Loan
          </Link>
        </div>

        {/* Contact Us Button */}
        <Link
          to="/contact"
          className="hidden md:block bg-purple-600 text-white py-2 px-4 rounded-full hover:bg-purple-700"
        >
          Contact us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
