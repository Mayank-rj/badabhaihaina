// src/pages/TermsAndConditions.js
import React from "react";

const TermsAndConditions = () => {
  const companyName = "[Your Company Name]";
  const websiteName = "[Website Name]";
  const websiteURL = "[Website URL]";
  const emailAddress = "[Your Email Address]";
  const phoneNumber = "[Your Phone Number]";
  const lastUpdated = "[Date]";
  const governingLaw = "[Your State or Country]";

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="bg-indigo-600 text-white py-20 text-center">
        <h1 className="text-4xl font-bold">Terms and Conditions</h1>
        <p className="mt-4 text-lg">
          Welcome to {websiteName}. Last Updated: {lastUpdated}
        </p>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-12 lg:px-20 bg-white shadow-lg rounded-lg mt-6">
        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-semibold text-indigo-700">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-700 mt-2">
              By accessing our website, you accept and agree to these Terms and
              Conditions, which may be updated from time to time without prior
              notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-indigo-700">
              2. Services
            </h2>
            <p className="text-gray-700 mt-2">
              The services provided by {companyName} on this website include
              financial consulting, advice, training, and related resources. All
              services are subject to availability and may change at our
              discretion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-indigo-700">
              3. User Responsibilities
            </h2>
            <ul className="list-disc pl-6 mt-2 text-gray-700">
              <li>
                You must provide accurate and complete information when using
                our services.
              </li>
              <li>
                You are responsible for maintaining the confidentiality of your
                account information.
              </li>
              <li>
                You agree not to use the website for any unlawful or prohibited
                activities.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-indigo-700">
              4. Intellectual Property
            </h2>
            <p className="text-gray-700 mt-2">
              All content, trademarks, and other intellectual property on this
              website are the property of {companyName} or its licensors.
              Unauthorized use of any materials may result in legal action.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-indigo-700">
              5. Disclaimer of Warranties
            </h2>
            <ul className="list-disc pl-6 mt-2 text-gray-700">
              <li>
                The information and services on this website are provided "as
                is" without warranties of any kind.
              </li>
              <li>
                We do not guarantee that the services will be uninterrupted or
                error-free.
              </li>
              <li>
                You are solely responsible for any financial decisions made
                based on the information provided.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-indigo-700">
              6. Limitation of Liability
            </h2>
            <p className="text-gray-700 mt-2">
              In no event shall {companyName} be liable for any direct,
              indirect, incidental, special, or consequential damages arising
              from the use of or inability to use our services, even if we have
              been advised of the possibility of such damages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-indigo-700">
              7. Third-Party Links
            </h2>
            <p className="text-gray-700 mt-2">
              Our website may contain links to third-party websites. We do not
              endorse or assume any responsibility for the content, privacy
              policies, or practices of these websites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-indigo-700">
              8. Payment Terms
            </h2>
            <p className="text-gray-700 mt-2">
              If applicable, all payments for services must be made in
              accordance with our specified payment methods and terms. All fees
              are non-refundable unless otherwise stated.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-indigo-700">
              9. Privacy Policy
            </h2>
            <p className="text-gray-700 mt-2">
              Your privacy is important to us. Please review our Privacy Policy,
              which governs the use of personal information you provide to us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-indigo-700">
              10. Governing Law
            </h2>
            <p className="text-gray-700 mt-2">
              These Terms and Conditions shall be governed by and construed in
              accordance with the laws of {governingLaw}, without regard to its
              conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-indigo-700">
              11. Changes to Terms
            </h2>
            <p className="text-gray-700 mt-2">
              We reserve the right to modify these Terms and Conditions at any
              time. Any changes will be effective immediately upon posting on
              this website. Your continued use of the website after changes are
              made constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-indigo-700">
              12. Contact Information
            </h2>
            <p className="text-gray-700 mt-2">
              If you have any questions about these Terms and Conditions, please
              contact us at:
            </p>
            <ul className="mt-2 text-gray-700">
              <li>Email: {emailAddress}</li>
              <li>Phone: {phoneNumber}</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
