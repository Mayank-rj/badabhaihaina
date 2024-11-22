// src/pages/AboutUs.js
import heroImg from "/images/about/images/about-hero2.jpg";

const AboutUs = () => {
  const companyName = "Bada Bhai Hai Na";

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[70vh] flex items-center justify-center w-full"
        style={{
          backgroundImage: `url(${heroImg})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-center text-white px-6 sm:px-0">
          <h1 className="text-5xl lg:text-6xl font-bold mb-4">
            Welcome to {companyName}
          </h1>
          <p className="text-lg lg:text-xl font-medium mb-6">
            Empowering your financial success with tailored solutions.
          </p>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300">
            Learn More About Us
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full py-10 sm:py-0 px-6 sm:px-0">
        <div className="w-full space-y-16 lg:p-16">
          {/* About Us Section */}
          <section
            id="about"
            className="flex flex-col lg:flex-row items-center gap-8 w-full"
          >
            <img
              src="/images/about/images/about-intro.jpg"
              alt="About Us"
              className="rounded-lg lg:w-1/2 w-full"
            />
            <div className="w-full">
              <h2 className="text-4xl font-bold text-indigo-700 mb-6 text-center lg:text-left">
                About Us – {companyName} Finance Consulting
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                At {companyName}, we specialize in providing expert financial
                consulting services that empower businesses and individuals to
                achieve their financial goals. With years of experience and a
                deep understanding of the ever-evolving financial landscape, we
                offer tailored solutions that help our clients navigate complex
                financial challenges, optimize their investments, and ensure
                long-term financial stability.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mt-4">
                Our team of seasoned professionals combines a wealth of
                knowledge in areas such as financial planning, investment
                management, tax strategy, risk mitigation, and business advisory
                services.
              </p>
            </div>
          </section>

          {/* Mission Section */}
          <section
            id="mission"
            className="flex flex-col lg:flex-row-reverse items-center gap-8 w-full"
          >
            <img
              src="/images/about/images/about-mission.jpg"
              alt="Our Mission"
              className="rounded-lg lg:w-1/2 w-full"
            />
            <div className="w-full">
              <h2 className="text-3xl font-semibold text-indigo-700 mb-4 text-center lg:text-left">
                Our Mission
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To provide strategic financial consulting that empowers our
                clients to make informed decisions, optimize their financial
                potential, and achieve lasting success.
              </p>
            </div>
          </section>

          {/* Vision Section */}
          <section
            id="vision"
            className="flex flex-col lg:flex-row items-center gap-8 w-full"
          >
            <img
              src="/images/about/images/about-vission.jpg"
              alt="Our Vision"
              className="rounded-lg lg:w-1/2 w-full"
            />
            <div className="w-full">
              <h2 className="text-3xl font-semibold text-indigo-700 mb-4 text-center lg:text-left">
                Our Vision
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To be a trusted partner for individuals and businesses,
                delivering innovative and customized financial solutions that
                pave the way for financial growth and security.
              </p>
            </div>
          </section>

          {/* Closing Statement */}
          <section id="closing" className="text-center">
            <p className="text-xl lg:text-2xl font-semibold text-gray-800 mt-8">
              {companyName} – Where your financial success is our priority.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
