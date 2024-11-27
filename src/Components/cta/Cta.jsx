import React from "react";

export const Cta = ({ heading, message }) => {
  return (
    <>
      {" "}
      <section className="mt-16 bg-gradient-to-r from-teal-500 via-blue-500 to-indigo-600 text-white py-12 px-8 rounded-lg shadow-lg">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">{heading}</h2>
          <p className="text-lg mb-8 leading-relaxed">{message}</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-gray-100 transition-all duration-300">
              Learn More
            </button>
            <button className="bg-blue-700 hover:bg-blue-800 font-semibold py-3 px-8 rounded-lg shadow-md transition-all duration-300">
              Query
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
