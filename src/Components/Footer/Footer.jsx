import { Link } from "react-router-dom";
const menuData = {
  "Home Loan": [
    {
      label: "Home BT(Balance Transfer)",
      description: "All the latest updates about Home BT in one place.",
      path: "/home-bt",
    },
    {
      label: "Compare Home Loan Rate",
      description: "Compare rates from multiple providers instantly.",
      path: "/compare-home-loan-rate",
    },
    {
      label: "New User",
      description: "Get started with your first home loan application today.",
      path: "/new-user-home-loan",
    },
  ],
  "Personal Loan": [
    {
      label: "Personal BT(Balance Transfer)",
      description: "Transfer your personal loan at lower interest rates.",
      path: "/personal-bt",
    },
    {
      label: "Compare Personal Loan Rate",
      description: "Find the best personal loan rates tailored to you.",
      path: "/compare-personal-loan-rate",
    },
    {
      label: "New User",
      description: "Start your personal loan journey with our experts.",
      path: "/new-user-personal-loan",
    },
  ],
  "Unsecured Business Loan": [
    {
      label: "Term Loan",
      description: "Get funding for business needs with flexible terms.",
      path: "/term-loan",
    },
    {
      label: "Working Capital",
      description: "Ensure liquidity for daily operations with working capital loans.",
      path: "/working-capital",
    },
    {
      label: "MSME Loan",
      description: "Special loans tailored for Micro, Small, and Medium Enterprises.",
      path: "/msme-loan",
    },
  ],
  "Loan Against Property": [
    {
      label: "Home BT(Balance Transfer)",
      description: "Refinance your loan against property with better terms.",
      path: "/home-bt-loan-against-property",
    },
    {
      label: "Compare Loan Against Property Rate",
      description: "Evaluate the best rates for loans against property.",
      path: "/compare-loan-against-property-rate",
    },
    {
      label: "New User",
      description: "Get assistance with your first loan against property.",
      path: "/new-user-loan-against-property",
    },
  ],
  Insurance: [
    {
      label: "Term Life Insurance",
      description: "Secure your loved ones with comprehensive term life plans.",
      path: "/term-life-insurance",
    },
    {
      label: "Car Insurance",
      description: "Get coverage for your vehicle with top car insurance plans.",
      path: "/car-insurance",
    },
    {
      label: "Health Insurance",
      description: "Protect your health with our range of insurance plans.",
      path: "/health-insurance",
    },
    {
      label: "Two Wheeler Insurance",
      description: "Affordable insurance for your bike or scooter.",
      path: "/two-wheeler-insurance",
    },
    {
      label: "Travel Insurance",
      description: "Ensure peace of mind on your travels with travel insurance.",
      path: "/travel-insurance",
    },
    {
      label: "Home Insurance",
      description: "Safeguard your home with reliable home insurance policies.",
      path: "/home-insurance",
    },
  ],
};


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
