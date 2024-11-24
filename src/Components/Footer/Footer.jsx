import { Link } from "react-router-dom";
import { menuData } from "../../assets/menuData";

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-800 text-gray-100 p-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-8">
          {/* Loan Categories */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold mb-4">Loan Categories</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.keys(menuData).map((category, idx) => (
                <li key={idx} className="mb-2">
                  <h4 className="text-purple-400 font-semibold">{category}</h4>
                  <ul className="pl-4">
                    {menuData[category].map((item, index) => (
                      <li key={index}>
                        <Link to={item.path} className="hover:underline">
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>

          {/* More Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">More Services</h3>
            <ul>
              <li className="mb-2">
                <Link to="/flexi-od" className="hover:underline">
                  Flexi OD
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/car-loan" className="hover:underline">
                  Car Loan
                </Link>
              </li>
            </ul>
          </div>

          {/* Additional Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Additional Links</h3>
            <ul>
              <li className="mb-2">
                <Link to="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/terms-and-conditions" className="hover:underline">
                  Terms and Conditions
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/help" className="hover:underline">
                  Help
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-600" />

        {/* Footer Bottom */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 mt-10">
          <div className="logo flex items-center gap-4 justify-center md:justify-start">
            <img src="./hug.png" alt="logo" className="h-12" />
            <p className="text-2xl font-medium"> Bada Bhai Hai Na</p>
          </div>
          <div className="text-center text-sm text-gray-400 mt-4 md:mt-0">
            Made with ❤️ in India
          </div>
          <div className="text-center text-sm text-gray-400 mt-4 md:mt-0">
            © 2024 BBHN. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
