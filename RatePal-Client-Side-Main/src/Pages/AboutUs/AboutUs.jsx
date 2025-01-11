import React from 'react';
import { FaUsers, FaStar, FaTools } from 'react-icons/fa';
import { Link } from 'react-router';

const AboutUs = () => {
    document.title = "RatePal | About Us";
  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-green-100 via-white to-green-100 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-green-400">About RatePal</h1>
          <p className="mt-4 text-lg text-gray-600">
            Your trusted platform for service reviews and ratings.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Our Mission</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            At RatePal, we aim to empower users with genuine insights into the services they use, while providing companies with a platform to showcase and improve their offerings. Our goal is to foster transparency and trust between users and service providers.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
            Why Choose RatePal?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <FaUsers className="text-green-400 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-800">User-Centric</h3>
              <p className="mt-2 text-gray-600">
                Share your experiences and learn from others' reviews to make informed decisions.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <FaStar className="text-green-400 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-800">Authentic Ratings</h3>
              <p className="mt-2 text-gray-600">
                Explore genuine service ratings to find what suits you best.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <FaTools className="text-green-400 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-800">Company Tools</h3>
              <p className="mt-2 text-gray-600">
                Companies can manage their services and improve user satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">
            Ready to Explore?
          </h2>
          <p className="mt-4 text-gray-600">
            Join RatePal today to start sharing your reviews or managing your services.
          </p>
          <div className="mt-6">
            <Link to={'/allservices'} className="px-6 py-3 bg-green-400 text-white font-medium rounded-lg shadow-md hover:bg-green-500 transition duration-200">
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
