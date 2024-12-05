import { Link } from "react-router-dom";
import {
  FaHome,
  FaUserTie,
  FaBusinessTime,
  FaShieldAlt,
  FaHandshake,
  FaLaptopHouse,
} from "react-icons/fa";
import { useState } from "react";
import { IoPersonSharp } from "react-icons/io5";
import { IoLocation } from "react-icons/io5";
import { IoMdPersonAdd } from "react-icons/io";
import { TbSettingsDollar } from "react-icons/tb";
// import { FaHandshake } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai"; // Importing close icon
import { HiSwitchHorizontal } from "react-icons/hi";
import { BsFillBuildingsFill } from "react-icons/bs";
import { BiSolidDonateHeart } from "react-icons/bi";
import { menuData } from "../../assets/menuData";
import { RiCarFill, RiMoneyRupeeCircleFill } from "react-icons/ri";
import { MdHealthAndSafety } from "react-icons/md";
import { MdTwoWheeler } from "react-icons/md";

const iconMapping = {
  "Home Loan": <FaHome className="h-5 w-5 text-purple-600" />,
  "Compare Home Loan Rate": (
    <FaLaptopHouse className="h-5 w-5 text-purple-600" />
    // <FaMoneyBillWave className="h-5 w-5  text-purple-600" />
  ),
  "New User": <IoMdPersonAdd className="h-5 w-5 text-purple-600" />,
  "Personal Loan": <IoPersonSharp className="h-5 w-5 text-purple-600" />,
  "Compare Personal Loan Rate": (
    <HiSwitchHorizontal className="h-5 w-5 text-purple-600" />
    // <FaMoneyBillWave className="h-5 w-5 text-purple-600" />
  ),
  "Unsecured Business Loan": (
    <FaBusinessTime className="h-5 w-5 text-purple-600" />
  ),
  "Term Loan": <FaHandshake className="h-5 w-5 text-purple-600" />,
  "Working Capital": <TbSettingsDollar className="h-5 w-5 text-purple-600" />,
  "MSME Loan": <FaUserTie className="h-5 w-5 text-purple-600" />,
  Insurance: <FaShieldAlt className="h-5 w-5 text-purple-600" />,
  "Term Life Insurance": (
    <BiSolidDonateHeart className="h-5 w-5 text-purple-600" />
  ),
  "Car Insurance": <RiCarFill className="h-5 w-5 text-purple-600" />,
  "Health Insurance": <MdHealthAndSafety className="h-5 w-5 text-purple-600" />,
  "Two Wheeler Insurance": <MdTwoWheeler className="h-5 w-5 text-purple-600" />,
  "Travel Insurance": <IoLocation className="h-5 w-5 text-purple-600" />,
  "Home Insurance": <FaHome className="h-5 w-5 text-purple-600" />,
  "Stock Insurance": (
    <RiMoneyRupeeCircleFill className="h-5 w-5 text-purple-600" />
  ),
  "Loan Against Property": (
    <BsFillBuildingsFill className="h-5 w-5 text-purple-600" />
  ),
  "Compare Loan Against Property Rate": (
    <HiSwitchHorizontal className="h-5 w-5 text-purple-600" />
  ),
};

const DropDown = ({ item }) => {
  return (
    <div className="flex flex-col items-start">
      <div className="text-purple-600">
        {iconMapping[item.label] || (
          <FaUserTie className="h-5 w-5 text-purple-600" />
        )}
      </div>
      <Link to={item.path} className="text-gray-800 font-semibold">
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
          onClick={(e) => onClick(e,title)}
          className="text-gray-600 hover:text-gray-800"
        >
          {title}
        </Link>

        {/* Full-width Dropdown content (shown on hover on desktop) */}
        {!isMobile && (
          <div className="absolute z-10 left-0 top-full w-screen bg-white shadow-lg p-6 grid grid-cols-3 gap-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
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
  // console.log(isMobileMenuOpen);

  const handleMenuClick = (e,title) => {
    e.preventDefault();
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
            <Link to="/flexi-od" className="text-gray-600 hover:text-gray-800">
              Flexi OD
            </Link>
          </div>

          {/* Car Loan Button */}
          <div className="group ms-8 h-20 flex items-center">
            <Link to="/car-loan" className="text-gray-600 hover:text-gray-800">
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
                <DropDown key={index} item={{ ...item, path: item.path }} />
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
