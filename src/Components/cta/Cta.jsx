import React, { useState, useEffect } from "react";
import { EnquiryModal } from "../EnquiryModal/EnquiryModal";
import { ThankYouModal } from "../ThankYouModal/ThankYouModal";

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
