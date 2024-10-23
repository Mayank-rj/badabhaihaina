import { Link } from "react-router-dom";
import {
  FaHome,
  FaMoneyBillWave,
  FaUserTie,
  FaBusinessTime,
  FaShieldAlt,
} from "react-icons/fa";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai"; // Importing close icon

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

const DropDown = ({ item }) => {
  return (
    <div className="flex flex-col items-start">
      <div className="text-purple-600">
        {iconMapping[item.label] || (
          <FaUserTie className="h-5 w-5 text-purple-600" />
        )}
      </div>
      <Link to="/" className="text-gray-800 font-semibold">
        {item.label}
      </Link>
      <p className="text-gray-500 text-sm">{item.description}</p>
    </div>
  );
};

const Menu = ({ title, items, onClick, isMobile }) => {
  return (
    <>
      <div className="group ms-8 h-20 flex items-center">
        <Link
          to="/"
          onClick={() => onClick(title)}
          className="text-gray-600 hover:text-gray-800"
        >
          {title}
        </Link>

        {/* Full-width Dropdown content (shown on hover on desktop) */}
        {!isMobile && (
          <div className="absolute left-0 top-full w-screen bg-white shadow-lg p-6 grid grid-cols-3 gap-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
            {items.map((item, index) => (
              <DropDown key={index} item={item} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // state for hamburger menu

  const isMobile = window.innerWidth <= 768; // Adjust as needed
  console.log(isMobileMenuOpen);
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

  const handleMenuClick = (title) => {
    if (isMobile) setActiveMenu(title);
  };

  const handleBackClick = () => {
    setActiveMenu(null);
  };

  return (
    <nav className="bg-white shadow-md relative">
      <div
        className={"md:container mx-auto md:flex justify-between items-center"}
      >
        {/* Logo */}
        <div className="flex justify-between px-5">
          <div className="text-gray-800 text-lg font-semibold text-center">
            <Link to="/" className="flex flex-col items-center">
              <img src="./hug.png" alt="Logo" style={{ height: "50px" }} />
              Bada Bhai Hai Na
            </Link>
          </div>

          {/* Hamburger Button for Mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden block focus:outline-none"
          >
            {!isMobileMenuOpen ? (
              <div className="space-y-2">
                <span className="block w-8 h-0.5 bg-gray-800"></span>
                <span className="block w-8 h-0.5 bg-gray-800"></span>
                <span className="block w-8 h-0.5 bg-gray-800"></span>
              </div>
            ) : (
              <AiOutlineClose className="text-2xl text-gray-800" />
            )}
          </button>
        </div>
        {/* Menu Items */}
        <div
          className={`${
            isMobileMenuOpen ? "max-h-screen" : "max-h-0"
          } md:flex space-x-8 items-center transition-max-height duration-300 ease-in-out overflow-hidden md:overflow-visible`}
        >
          {!activeMenu
            ? Object.keys(menuData).map((key) => (
                <Menu
                  key={key}
                  title={key}
                  items={menuData[key]}
                  onClick={handleMenuClick}
                  isMobile={isMobile}
                />
              ))
            : null}

          {/* Flexi OD Button */}
          <div className="group ms-8 h-20 flex items-center">
            <Link to="/" className="text-gray-600 hover:text-gray-800">
              Flexi OD
            </Link>
          </div>

          {/* Car Loan Button */}
          <div className="group ms-8 h-20 flex items-center">
            <Link to="/" className="text-gray-600 hover:text-gray-800">
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

        {/* Submenu for Mobile */}
        {isMobile && activeMenu && (
          <div className="fixed inset-0 bg-white z-50 p-6">
            {/* Close (Cross) Icon at the Top Right */}
            <button
              onClick={() => setActiveMenu(null)}
              className="absolute top-4 right-4 text-2xl"
            >
              <AiOutlineClose />
            </button>

            <button
              onClick={handleBackClick}
              className="text-purple-600 font-semibold mb-4"
            >
              &larr; Back
            </button>

            <div className="grid grid-cols-2 gap-4">
              {menuData[activeMenu].map((item, index) => (
                <DropDown key={index} item={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
