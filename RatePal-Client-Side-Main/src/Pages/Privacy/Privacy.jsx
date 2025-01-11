import React from 'react';

const PrivacyPolicyPage = () => {
    document.title = "RatePal | Privacy & Policy";
  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-green-100 via-white to-green-100 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-green-400">Privacy Policy</h1>
          <p className="mt-4 text-lg text-gray-600">
            Learn how we handle your data responsibly and transparently.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6 text-gray-700">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Introduction</h2>
          <p className="mb-4">
            Welcome to RatePal. Your privacy is important to us. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our platform.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Information We Collect</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Personal Information: Name, email address, and other contact details provided during registration.</li>
            <li>Usage Data: Information about how you use our platform, such as pages viewed and actions taken.</li>
            <li>Cookies: Data collected through cookies to enhance user experience and improve our services.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mb-6">How We Use Your Information</h2>
          <p className="mb-4">
            We use your information to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide and improve our services.</li>
            <li>Communicate with you about updates, offers, and support.</li>
            <li>Ensure the security and functionality of our platform.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Sharing Your Information</h2>
          <p className="mb-4">
            We do not sell or rent your personal information to third parties. We may share your information with:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Service providers that assist us in operating the platform.</li>
            <li>Authorities when required by law or to protect our rights.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Your Rights</h2>
          <p className="mb-4">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Access, update, or delete your personal information.</li>
            <li>Opt-out of non-essential communications.</li>
            <li>Request information about how your data is being used.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Data Security</h2>
          <p className="mb-4">
            We implement industry-standard measures to protect your data from unauthorized access, disclosure, or loss.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Changes to This Policy</h2>
          <p className="mb-4">
            We may update this Privacy Policy periodically. We will notify you of significant changes through our platform or via email.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact Us</h2>
          <p className="mb-4">
            If you have any questions or concerns about this Privacy Policy, please contact us at:
          </p>
          <p className="text-gray-600">Email: privacy@ratepal.com</p>
          <p className="text-gray-600">Phone: +1 (123) 456-7890</p>

          <p className="mt-8 text-gray-600">
            By using RatePal, you agree to the terms outlined in this Privacy Policy.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
