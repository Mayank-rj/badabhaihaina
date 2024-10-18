import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };
  return (
    <>
     <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-lg font-semibold">BankBazaar Clone</div>

        {/* Toggle Button for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>
        </div>

        {/* Links */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex md:items-center space-x-6 w-full md:w-auto`}
        >
          <Link to="/" className="text-white py-2 md:py-0">Home</Link>

          {/* Home Loan Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('home-loan')}
              className="text-white py-2 md:py-0"
            >
              Home Loan
            </button>
            {openMenu === 'home-loan' && (
              <div className="absolute bg-white text-black mt-2 w-48 rounded shadow-lg">
                <Link to="/home-bt" className="block px-4 py-2">Home BT</Link>
                <Link to="/compare-home-loan" className="block px-4 py-2">Compare Home Loan Rate</Link>
                <Link to="/new-user-home-loan" className="block px-4 py-2">New User</Link>
              </div>
            )}
          </div>

          {/* Personal Loan Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('personal-loan')}
              className="text-white py-2 md:py-0"
            >
              Personal Loan
            </button>
            {openMenu === 'personal-loan' && (
              <div className="absolute bg-white text-black mt-2 w-48 rounded shadow-lg">
                <Link to="/home-bt-personal" className="block px-4 py-2">Home BT</Link>
                <Link to="/compare-personal-loan" className="block px-4 py-2">Compare Home Loan Rate</Link>
                <Link to="/new-user-personal-loan" className="block px-4 py-2">New User</Link>
              </div>
            )}
          </div>

          <Link to="/unsecured-business-loan" className="text-white py-2 md:py-0">Unsecured Business Loan</Link>
          <Link to="/flexi-od" className="text-white py-2 md:py-0">Flexi OD</Link>
          <Link to="/car-loan" className="text-white py-2 md:py-0">Car Loan</Link>

          {/* Loan Against Property Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('loan-against-property')}
              className="text-white py-2 md:py-0"
            >
              Loan Against Property
            </button>
            {openMenu === 'loan-against-property' && (
              <div className="absolute bg-white text-black mt-2 w-48 rounded shadow-lg">
                <Link to="/home-bt-property" className="block px-4 py-2">Home BT</Link>
                <Link to="/compare-property-loan" className="block px-4 py-2">Compare Home Loan Rate</Link>
                <Link to="/new-user-property-loan" className="block px-4 py-2">New User</Link>
              </div>
            )}
          </div>

          {/* Insurance Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('insurance')}
              className="text-white py-2 md:py-0"
            >
              Insurance
            </button>
            {openMenu === 'insurance' && (
              <div className="absolute bg-white text-black mt-2 w-48 rounded shadow-lg">
                <Link to="/term-life-insurance" className="block px-4 py-2">Term Life Insurance</Link>
                <Link to="/car-insurance" className="block px-4 py-2">Car Insurance</Link>
                <Link to="/health-insurance" className="block px-4 py-2">Health Insurance</Link>
                <Link to="/two-wheeler-insurance" className="block px-4 py-2">Two Wheeler Insurance</Link>
                <Link to="/travel-insurance" className="block px-4 py-2">Travel Insurance</Link>
                <Link to="/home-insurance" className="block px-4 py-2">Home Insurance</Link>
              </div>
            )}
          </div>

          <Link to="/about-us" className="text-white py-2 md:py-0">About Us</Link>
          <Link to="/contact-us" className="text-white py-2 md:py-0">Contact Us</Link>
        </div>
      </div>
    </nav>
    </>
  )
}
