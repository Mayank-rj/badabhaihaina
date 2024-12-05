import React, { useState, useEffect } from "react";

export const EnquiryModal = ({ isOpen, onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    enquiryFor: "",
    unsecuredLoanType: "",
    securedLoanType: "",
    occupation: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    contactNumber: "",
    enquiryFor: "",
    unsecuredLoanType: "",
    securedLoanType: "",
    occupation: "",
  });

  const unsecuredLoanOptions = [
    "Business Loan",
    "Overdraft Limit",
    "Dropline Overdraft Limit",
    "Professional Loan",
    "Personal Loan",
  ];

  const securedLoanOptions = [
    "Home Loan",
    "Loan Against Property",
    "Secured Overdraft Limit",
    "Balance Transfer of Secured Loan",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Clear the error message for the specific field if user starts typing
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "", // Clear error for the specific field
    }));
  };

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!formData.fullName.trim()) {
      formErrors.fullName = "Full Name is required.";
      isValid = false;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.contactNumber || !phoneRegex.test(formData.contactNumber)) {
      formErrors.contactNumber =
        "Valid contact number is required (10 digits).";
      isValid = false;
    }

    if (!formData.enquiryFor) {
      formErrors.enquiryFor = "Please select an enquiry type.";
      isValid = false;
    }

    if (
      formData.enquiryFor === "Unsecured Loan" &&
      !formData.unsecuredLoanType
    ) {
      formErrors.unsecuredLoanType = "Please select a loan type.";
      isValid = false;
    }

    if (formData.enquiryFor === "Secured Loan" && !formData.securedLoanType) {
      formErrors.securedLoanType = "Please select a loan type.";
      isValid = false;
    }

    if (!formData.occupation.trim()) {
      formErrors.occupation = "Occupation is required.";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted", formData);
      onSuccess(); // Trigger success callback to show Thank You modal
      onClose(); // Close the modal after successful submission
      // Reset form data and errors
      setFormData({
        fullName: "",
        contactNumber: "",
        enquiryFor: "",
        unsecuredLoanType: "",
        securedLoanType: "",
        occupation: "",
      });
      setErrors({
        fullName: "",
        contactNumber: "",
        enquiryFor: "",
        unsecuredLoanType: "",
        securedLoanType: "",
        occupation: "",
      });
    }
  };

  // Disable body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    isOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Enquiry Form</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              &times;
            </button>
          </div>
          <form onSubmit={handleSubmit} className="mt-6">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg"
              />
              {errors.fullName && (
                <span className="text-red-500 text-sm">{errors.fullName}</span>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Contact Number
              </label>
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg"
              />
              {errors.contactNumber && (
                <span className="text-red-500 text-sm">
                  {errors.contactNumber}
                </span>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Enquiry for
              </label>
              <select
                name="enquiryFor"
                value={formData.enquiryFor}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg"
              >
                <option value="">Select Enquiry Type</option>
                <option value="Unsecured Loan">Unsecured Loan</option>
                <option value="Secured Loan">Secured Loan</option>
              </select>
              {errors.enquiryFor && (
                <span className="text-red-500 text-sm">
                  {errors.enquiryFor}
                </span>
              )}

              {formData.enquiryFor === "Unsecured Loan" && (
                <div className="mt-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Select Loan Type
                  </label>
                  <select
                    name="unsecuredLoanType"
                    value={formData.unsecuredLoanType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg"
                  >
                    <option value="">Select Loan Type</option>
                    {unsecuredLoanOptions.map((loanType, index) => (
                      <option key={index} value={loanType}>
                        {loanType}
                      </option>
                    ))}
                  </select>
                  {errors.unsecuredLoanType && (
                    <span className="text-red-500 text-sm">
                      {errors.unsecuredLoanType}
                    </span>
                  )}
                </div>
              )}

              {formData.enquiryFor === "Secured Loan" && (
                <div className="mt-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Select Loan Type
                  </label>
                  <select
                    name="securedLoanType"
                    value={formData.securedLoanType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg"
                  >
                    <option value="">Select Loan Type</option>
                    {securedLoanOptions.map((loanType, index) => (
                      <option key={index} value={loanType}>
                        {loanType}
                      </option>
                    ))}
                  </select>
                  {errors.securedLoanType && (
                    <span className="text-red-500 text-sm">
                      {errors.securedLoanType}
                    </span>
                  )}
                </div>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Occupation
              </label>
              <input
                type="text"
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg"
              />
              {errors.occupation && (
                <span className="text-red-500 text-sm">
                  {errors.occupation}
                </span>
              )}
            </div>

            <div className="mt-6 text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export const ThankYouModal = ({ isOpen, onClose }) => {
  return (
    isOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
            <p className="text-lg mb-6">
              Your enquiry has been successfully submitted. We'll get back to
              you shortly.
            </p>
            <button
              onClick={onClose}
              className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export const Cta = ({ heading, message }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isThankYouModalOpen, setIsThankYouModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSuccess = () => {
    setIsThankYouModalOpen(true); // Open Thank You Modal on form success
  };

  const handleCloseThankYouModal = () => {
    setIsThankYouModalOpen(false);
  };

  return (
    <>
      <section className="my-16 bg-gradient-to-r from-teal-500 via-blue-500 to-indigo-600 text-white py-12 px-8 rounded-lg shadow-lg">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">{heading}</h2>
          <p className="text-lg mb-8 leading-relaxed">{message}</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={handleOpenModal}
              className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-gray-100 transition-all duration-300"
            >
              For Query
            </button>
          </div>
        </div>
      </section>

      {/* Enquiry Modal */}
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSuccess={handleSuccess}
      />

      {/* Thank You Modal */}
      <ThankYouModal
        isOpen={isThankYouModalOpen}
        onClose={handleCloseThankYouModal}
      />
    </>
  );
};
