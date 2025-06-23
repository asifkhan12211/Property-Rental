import React from 'react'

const TermsConditions = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10" id='Conditions'>
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Terms and Conditions
          </h1>
          <p className="text-gray-600 mb-4">
            <strong>Effective Date:</strong> [Insert Date]
          </p>
          <p className="text-gray-600 mb-4">
            Welcome to <strong>[Your Website Name]</strong> ("we," "our," "us"), you agree to these Terms and Conditions. If you do not agree, do not use the Site.
          </p>
    
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">1. User Registration</h2>
            <p className="text-gray-600">
              To access certain services, you must register an account. You are responsible for maintaining the confidentiality of your account.
            </p>
    
            <h2 className="text-xl font-semibold text-gray-800">2. Property Listings</h2>
            <p className="text-gray-600">
              We provide a platform for property owners (“Listers”) to list rental properties. Property availability and pricing are subject to change.
            </p>
    
            <h2 className="text-xl font-semibold text-gray-800">3. Booking Process</h2>
            <p className="text-gray-600">
              Renters can book properties through the Site, agreeing to the Lister’s rental terms. Bookings are subject to availability.
            </p>
    
            <h2 className="text-xl font-semibold text-gray-800">4. Payment</h2>
            <p className="text-gray-600">
              Payments are made through our secure payment system, and Renters must pay the full amount for their booking.
            </p>
    
            <h2 className="text-xl font-semibold text-gray-800">5. Cancellations and Refunds</h2>
            <p className="text-gray-600">
              Cancellations are subject to the Lister’s policy. Requests for refunds must be made to the Lister.
            </p>
    
            <h2 className="text-xl font-semibold text-gray-800">6. User Conduct</h2>
            <p className="text-gray-600">
              Users must not engage in unlawful activities or post harmful content on the Site.
            </p>
    
            <h2 className="text-xl font-semibold text-gray-800">7. Privacy</h2>
            <p className="text-gray-600">
              We collect and use personal information as described in our <a href="#Policy" className="text-blue-500 hover:underline">Privacy Policy</a>.
            </p>
    
            <h2 className="text-xl font-semibold text-gray-800">8. Limitation of Liability</h2>
            <p className="text-gray-600">
              We are not liable for damages or disputes between Renters and Listers. Our liability is limited to the fullest extent allowed by law.
            </p>
    
            <h2 className="text-xl font-semibold text-gray-800">9. Modifications</h2>
            <p className="text-gray-600">
              We may update these Terms at any time. Changes will be posted here with an updated “Effective Date.”
            </p>
    
            <h2 className="text-xl font-semibold text-gray-800">10. Governing Law</h2>
            <p className="text-gray-600">
              These Terms are governed by the laws of [Your Jurisdiction]. Any disputes will be resolved in the courts of [Your Jurisdiction].
            </p>
    
            <h2 className="text-xl font-semibold text-gray-800">11. Contact Us</h2>
            <p className="text-gray-600">
              For questions, contact us at: <a href="mailto:[Your Email]" className="text-blue-500 hover:underline">[Your Contact Information]</a>
            </p>
          </div>
        </div>
      );
    };


export default TermsConditions
