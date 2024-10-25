import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 p-8">
      {/* Contact Info Section */}
      <div className="w-full md:w-1/2 bg-white shadow-lg rounded-lg p-8 mb-8 md:mb-0 md:mr-4">
        <h2 className="text-3xl font-semibold text-purple-600 mb-6 text-center">Contact Us</h2>
        <div className="space-y-6">
          <div className="flex items-center">
            <FaPhone className="text-purple-600 w-8 h-8" />
            <p className="ml-4 text-gray-700">+1 234 567 890</p>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="text-purple-600 w-8 h-8" />
            <p className="ml-4 text-gray-700">contact@badabhai.com</p>
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-purple-600 w-8 h-8" />
            <p className="ml-4 text-gray-700">123 Main St, Hometown, CA</p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="w-full md:w-1/2 bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-semibold text-purple-600 mb-6 text-center">Get in Touch</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Your Message"
              rows="5"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
