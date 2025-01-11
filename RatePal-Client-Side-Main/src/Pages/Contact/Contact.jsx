import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactPage = () => {
    document.title = "RatePal | Contact";
  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-green-100 via-white to-green-100 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-green-400">Contact Us</h1>
          <p className="mt-4 text-lg text-gray-600">
            We are here to help you with any questions or support you need.
          </p>
        </div>
      </div>

      {/* Contact Information Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Get in Touch</h2>
          <p className="mt-4 text-gray-600">
            Reach out to us through any of the following methods.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="flex flex-col items-center">
              <FaPhoneAlt className="text-green-400 text-4xl mb-4" />
              <h3 className="text-xl font-medium text-gray-800">Phone</h3>
              <p className="mt-2 text-gray-600">+1 (123) 456-7890</p>
            </div>
            {/* Email */}
            <div className="flex flex-col items-center">
              <FaEnvelope className="text-green-400 text-4xl mb-4" />
              <h3 className="text-xl font-medium text-gray-800">Email</h3>
              <p className="mt-2 text-gray-600">support@ratepal.com</p>
            </div>
            {/* Address */}
            <div className="flex flex-col items-center">
              <FaMapMarkerAlt className="text-green-400 text-4xl mb-4" />
              <h3 className="text-xl font-medium text-gray-800">Address</h3>
              <p className="mt-2 text-gray-600">123 RatePal Street, Suite 456, Cityville, USA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-green-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
            Send Us a Message
          </h2>
          <form className="bg-white shadow-md rounded-lg p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-2 w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-2 w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div className="mt-6">
              <label htmlFor="message" className="block text-gray-700 font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="mt-2 w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="mt-6 text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-green-400 text-white font-medium rounded-lg shadow-md hover:bg-green-500 transition duration-200"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
