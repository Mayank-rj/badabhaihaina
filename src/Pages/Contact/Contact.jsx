import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useEffect, useRef, useState } from "react";
import { sendEmail } from "../../assets/sendEmail";

const Contact = () => {
  const [popupVisible, setPopupVisible] = useState(false);

  const formRef = useRef(null);

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    contact: Yup.string().required("Contact details are required"),
    message: Yup.string().required("Message is required"),
  });

  // Disable body scroll when modal is open
  useEffect(() => {
    if (popupVisible) {
      document.documentElement.style.overflow = "hidden"; // Disable scroll
    } else {
      document.documentElement.style.overflow = "auto"; // Enable scroll
    }

    return () => {
      document.documentElement.style.overflow = "auto"; // Reset scroll when modal is unmounted
    };
  }, [popupVisible]);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 p-8">
      {/* Contact Info Section */}
      <div className="w-full md:w-1/2 bg-white shadow-lg rounded-lg p-8 mb-8 md:mb-0 md:mr-4">
        <h2 className="text-3xl font-semibold text-purple-600 mb-6 text-center">
          Contact Us
        </h2>
        <div className="space-y-6">
          <div className="flex items-center">
            <FaPhone className="text-purple-600 w-8 h-8" />
            <p className="ml-4 text-gray-700">+91 98734 23583</p>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="text-purple-600 w-8 h-8" />
            <p className="ml-4 text-gray-700">contact@badabhaihaina.com</p>
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-purple-600 w-8 h-8" />
            <p className="ml-4 text-gray-700">
              T-6, Kallu Sarai, Anupam Plaza, New Delhi 110016
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="w-full md:w-1/2 bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-semibold text-purple-600 mb-6 text-center">
          Get in Touch
        </h2>
        <Formik
          initialValues={{
            name: "",
            email: "",
            contact: "",
            message: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            console.log("Form submitted:", values);
            console.log("useRef FormData:", formRef.current);
            sendEmail(formRef.current, "contactForm");
            setPopupVisible(true);
            resetForm();
            setTimeout(() => setPopupVisible(false), 3000);
          }}
        >
          {({ touched, errors }) => (
            <Form ref={formRef} className="space-y-4">
              <div>
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 ${
                    touched.name && errors.name ? "border-red-500" : ""
                  }`}
                  placeholder="Your Name"
                />
                <ErrorMessage
                  name="name"
                  component="p"
                  className="text-red-500 text-sm"
                />
              </div>

              <div>
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 ${
                    touched.email && errors.email ? "border-red-500" : ""
                  }`}
                  placeholder="Your Email"
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-red-500 text-sm"
                />
              </div>

              <div>
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="contact"
                >
                  Contact
                </label>
                <Field
                  type="text"
                  id="contact"
                  name="contact"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 ${
                    touched.contact && errors.contact ? "border-red-500" : ""
                  }`}
                  placeholder="Your Contact Details"
                />
                <ErrorMessage
                  name="contact"
                  component="p"
                  className="text-red-500 text-sm"
                />
              </div>

              <div>
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 ${
                    touched.message && errors.message ? "border-red-500" : ""
                  }`}
                  placeholder="Your Message"
                  rows="5"
                />
                <ErrorMessage
                  name="message"
                  component="p"
                  className="text-red-500 text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300"
              >
                Send Message
              </button>
            </Form>
          )}
        </Formik>
      </div>

      {/* Popup Message */}
      {popupVisible && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md shadow-lg text-center max-w-sm">
            <h3 className="text-xl font-semibold text-purple-600">
              Thank You!
            </h3>
            <p className="text-gray-700">We will get back to you soon.</p>
            <button
              onClick={() => setPopupVisible(false)}
              className="mt-4 bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
