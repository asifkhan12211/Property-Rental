import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 py-10 px-4 sm:px-6 lg:px-8" id='Policy'>
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
          Privacy Policy
        </h1>
        <p className="text-gray-600 text-center mb-6">
          <strong>Effective Date:</strong> [Insert Date]
        </p>

        <div className="space-y-6">
          {/* Introduction Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">1. Introduction</h2>
            <p className="text-gray-700">
              Welcome to <strong>[Your Website Name]</strong> ("we," "our," or "us"). Your privacy is important to us, and this Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <a href="[Your Website URL]" className="text-blue-500 hover:underline">[Your Website URL]</a>.
            </p>
          </section>

          {/* Information We Collect Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">2. Information We Collect</h2>
            <ul className="list-disc pl-6 text-gray-700">
              <li><strong>Personal Information:</strong> Name, email address, phone number, and payment details (if applicable).</li>
              <li><strong>Property Listings Information:</strong> Details about properties, images, and related documents.</li>
              <li><strong>Usage Data:</strong> IP address, browser type, device information, and browsing activity.</li>
              <li><strong>Cookies and Tracking Technologies:</strong> To enhance user experience and improve website functionality.</li>
            </ul>
          </section>

          {/* How We Use Your Information Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">3. How We Use Your Information</h2>
            <p className="text-gray-700">
              We use the collected information to:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Facilitate property rentals and transactions.</li>
              <li>Provide customer support and respond to inquiries.</li>
              <li>Improve website functionality and user experience.</li>
              <li>Send notifications, updates, and promotional offers (with your consent).</li>
              <li>Comply with legal obligations.</li>
            </ul>
          </section>

          {/* How We Share Your Information Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">4. How We Share Your Information</h2>
            <p className="text-gray-700">
              We do not sell or rent your personal information. However, we may share information with:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li><strong>Service Providers:</strong> Third-party vendors assisting in website operation and payment processing.</li>
              <li><strong>Legal Authorities:</strong> When required by law or to protect our rights.</li>
              <li><strong>Business Transfers:</strong> In case of a merger, sale, or acquisition.</li>
            </ul>
          </section>

          {/* Data Security Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">5. Data Security</h2>
            <p className="text-gray-700">
              We implement security measures to protect your information. However, no online transmission is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          {/* Your Rights Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">6. Your Rights</h2>
            <p className="text-gray-700">
              Depending on your location, you may have rights such as:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Accessing, updating, or deleting your data.</li>
              <li>Opting out of marketing communications.</li>
              <li>Disabling cookies via browser settings.</li>
            </ul>
          </section>

          {/* Third-Party Links Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">7. Third-Party Links</h2>
            <p className="text-gray-700">
              Our website may contain links to third-party websites. We are not responsible for their privacy practices, and we encourage you to review their policies.
            </p>
          </section>

          {/* Changes to This Privacy Policy Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">8. Changes to This Privacy Policy</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy periodically. We will notify you of significant changes by updating the "Effective Date" above.
            </p>
          </section>

          {/* Contact Us Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">9. Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:[Your Contact Email]" className="text-blue-500 hover:underline">[Your Contact Email]</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy
