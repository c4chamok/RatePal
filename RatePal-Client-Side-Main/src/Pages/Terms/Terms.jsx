import React from 'react';

const TermsAndConditionsPage = () => {
    document.title = "RatePal | Terms & Condition";
  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-green-100 via-white to-green-100 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-green-400">Terms and Conditions</h1>
          <p className="mt-4 text-lg text-gray-600">
            Understand the terms of use before engaging with RatePal services.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6 text-gray-700">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Introduction</h2>
          <p className="mb-4">
            Welcome to RatePal. By accessing or using our platform, you agree to comply with and be bound by these terms and conditions. Please read them carefully.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Use of Our Platform</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Users must be at least 18 years old or have parental consent to use our services.</li>
            <li>You agree to provide accurate and complete information during registration and use.</li>
            <li>Any unauthorized use of the platform is prohibited.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mb-6">User Responsibilities</h2>
          <p className="mb-4">
            As a user of RatePal, you agree to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Ensure all content you post is lawful, truthful, and non-offensive.</li>
            <li>Respect the intellectual property rights of others.</li>
            <li>Refrain from any actions that may disrupt or harm the platform.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Prohibited Activities</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Using the platform for fraudulent or illegal purposes.</li>
            <li>Uploading malicious software or engaging in hacking activities.</li>
            <li>Harvesting user data without consent.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Limitation of Liability</h2>
          <p className="mb-4">
            RatePal is not liable for:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Errors, omissions, or inaccuracies in user reviews.</li>
            <li>Losses or damages resulting from unauthorized access to your account.</li>
            <li>Service interruptions or technical issues.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Termination of Access</h2>
          <p className="mb-4">
            We reserve the right to terminate or suspend access to the platform for users who violate these terms or engage in harmful activities.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Changes to Terms</h2>
          <p className="mb-4">
            We may update these terms periodically. Continued use of the platform after updates constitutes acceptance of the revised terms.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact Us</h2>
          <p className="mb-4">
            If you have any questions or concerns about these terms and conditions, please contact us at:
          </p>
          <p className="text-gray-600">Email: support@ratepal.com</p>
          <p className="text-gray-600">Phone: +1 (123) 456-7890</p>

          <p className="mt-8 text-gray-600">
            By using RatePal, you acknowledge that you have read, understood, and agreed to these terms and conditions.
          </p>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditionsPage;
