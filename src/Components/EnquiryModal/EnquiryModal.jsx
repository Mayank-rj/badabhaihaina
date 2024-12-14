import { useEffect, useRef, useState } from "react";
import { sendEmail } from "../../assets/sendEmail";

export const EnquiryModal = ({
  isOpen,
  onClose,
  onSuccess,
  setIsThankYouModalOpen,
}) => {
  const formRef = useRef();
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
      sendEmail(formRef.current, "Enquiry Form");
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
      setIsThankYouModalOpen(true);
    }
  };

  // Disable body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden"; // Disable scroll
    } else {
      document.documentElement.style.overflow = "auto"; // Enable scroll
    }

    return () => {
      document.documentElement.style.overflow = "auto"; // Reset scroll when modal is unmounted
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
          <form ref={formRef} onSubmit={handleSubmit} className="mt-6">
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
