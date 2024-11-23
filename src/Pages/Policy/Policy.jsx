const PrivacyPolicy = () => {
  const companyName = "Bada Bhai Hai Na";
  const effectiveDate = "13-11-2024";
  const websiteURL = "[website URL]";
  const contactEmail = "[your email]";
  const contactPhone = "+91 98734 23583";
  const contactAddress = "T-6, Kallu Sarai, Anupam Plaza, New Delhi 110016";

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="bg-purple-600 text-white py-20 text-center">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>
        <p className="mt-4 text-lg">
          <strong>Effective Date:</strong> {effectiveDate}
        </p>
      </div>

      {/* <div className="md:max-w-5xl md:mx-auto md:bg-white md:p-8 md:shadow-lg md:rounded-lg"> */}
      <div className="container mx-auto px-6 py-12 lg:px-20 bg-white shadow-lg rounded-lg my-6">
        {/* Section 1 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-600">
            1. Introduction
          </h2>
          <p className="text-gray-700 leading-relaxed mt-2">
            {companyName} (referred to as “we,” “us,” or “our”) is committed to
            protecting your privacy. This Privacy Policy explains how we
            collect, use, and safeguard your information when you visit our
            website {websiteURL} (the “Site”), and/or use our services. By using
            our Site, you agree to the collection and use of information in
            accordance with this policy.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-600">
            2. Information We Collect
          </h2>
          <p className="text-gray-700 leading-relaxed mt-2">
            We may collect and process the following types of information:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4">
            <li>
              <strong>Personal Information:</strong> Includes your name, email
              address, phone number, mailing address, social security number,
              and any other information you provide while using our services.
            </li>
            <li>
              <strong>Financial Information:</strong> Includes your income, loan
              amounts requested, credit history, and other financial data
              relevant to your loan consultation.
            </li>
            <li>
              <strong>Non-Personal Information:</strong> Includes browser type,
              IP address, pages visited, and other analytical data to improve
              our services.
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-600">
            3. How We Use Your Information
          </h2>
          <p className="text-gray-700 leading-relaxed mt-2">
            We use the information we collect for the following purposes:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4">
            <li>To provide, maintain, and improve our services.</li>
            <li>
              To communicate with you, including responding to inquiries and
              sending you updates.
            </li>
            <li>To analyze usage of our Site and improve user experience.</li>
            <li>To comply with legal obligations and protect our rights.</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-600">
            4. Sharing Your Information
          </h2>
          <p className="text-gray-700 leading-relaxed mt-2">
            We may share your information with:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4">
            <li>
              <strong>Third-Party Service Providers:</strong> To facilitate our
              services, provide them on our behalf, or assist us in analyzing
              how our service is used.
            </li>
            <li>
              <strong>Legal Authorities:</strong> If required to do so by law or
              in response to valid requests by public authorities.
            </li>
          </ul>
        </section>

        {/* Remaining Sections */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-600">
            5. Cookies and Tracking Technologies
          </h2>
          <p className="text-gray-700 leading-relaxed mt-2">
            We use cookies and similar tracking technologies to track activity
            on our Site and hold certain information. You can instruct your
            browser to refuse all cookies or indicate when a cookie is being
            sent. However, if you do not accept cookies, you may not be able to
            use some portions of our Site.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-600">
            6. Data Security
          </h2>
          <p className="text-gray-700 leading-relaxed mt-2">
            The security of your data is important to us. While we strive to use
            commercially acceptable means to protect your personal information,
            we cannot guarantee its absolute security.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-600">
            7. Your Data Protection Rights
          </h2>
          <p className="text-gray-700 leading-relaxed mt-2">
            Depending on your location, you may have the right to access,
            update, delete, or object to the processing of your personal data.
            To exercise these rights, please contact us at {contactEmail}.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-600">
            8. Links to Other Sites
          </h2>
          <p className="text-gray-700 leading-relaxed mt-2">
            Our Site may contain links to other sites that are not operated by
            us. We strongly advise you to review the Privacy Policy of any
            third-party site you visit.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-600">
            9. Changes to This Privacy Policy
          </h2>
          <p className="text-gray-700 leading-relaxed mt-2">
            We may update our Privacy Policy from time to time. You are advised
            to review this page periodically for any changes. Changes are
            effective when posted.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-600">
            10. Contact Us
          </h2>
          <p className="text-gray-700 leading-relaxed mt-2">
            If you have any questions, please contact us:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4">
            <li>Email: {contactEmail}</li>
            <li>Phone: {contactPhone}</li>
            <li>Address: {contactAddress}</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
