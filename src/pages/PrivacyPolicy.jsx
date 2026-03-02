const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl md:text-4xl font-bold mb-8">
          Privacy Policy
        </h1>

        <p className="text-gray-400 mb-6">
          Effective Date: October 14, 2025
        </p>

        <h2 className="font-semibold mt-8 mb-3">1. Introduction</h2>
        <p className="text-gray-400">
          At ContentVault Pro, we value your privacy. This Privacy Policy explains 
          how we collect, use, and protect your information when you visit or 
          purchase from our website.
        </p>

        <h2 className="font-semibold mt-8 mb-3">2. Information We Collect</h2>
        <p className="text-gray-400">
          We may collect the following information:
        </p>
        <ul className="text-gray-400 list-disc ml-6 mt-2 space-y-1">
          <li>Email address</li>
          <li>Payment transaction details (processed securely via Razorpay)</li>
          <li>Technical data such as browser type and device information</li>
        </ul>

        <h2 className="font-semibold mt-8 mb-3">3. How We Use Your Information</h2>
        <p className="text-gray-400">
          We use your information to:
        </p>
        <ul className="text-gray-400 list-disc ml-6 mt-2 space-y-1">
          <li>Process payments</li>
          <li>Grant access to purchased content</li>
          <li>Provide customer support</li>
          <li>Improve our website and services</li>
        </ul>

        <h2 className="font-semibold mt-8 mb-3">4. Payment Security</h2>
        <p className="text-gray-400">
          All payments are securely processed through Razorpay. 
          We do not store your card, UPI, or banking details on our servers.
        </p>

        <h2 className="font-semibold mt-8 mb-3">5. Cookies</h2>
        <p className="text-gray-400">
          We may use cookies and similar tracking technologies to improve user 
          experience and analyze website performance.
        </p>

        <h2 className="font-semibold mt-8 mb-3">6. Data Protection</h2>
        <p className="text-gray-400">
          We implement reasonable security measures to protect your personal 
          information from unauthorized access or disclosure.
        </p>

        <h2 className="font-semibold mt-8 mb-3">7. Third-Party Services</h2>
        <p className="text-gray-400">
          We may use third-party services such as payment processors and analytics 
          tools. These services have their own privacy policies governing their practices.
        </p>

        <h2 className="font-semibold mt-8 mb-3">8. Your Rights</h2>
        <p className="text-gray-400">
          You may request access, correction, or deletion of your personal data 
          by contacting us.
        </p>

        <h2 className="font-semibold mt-8 mb-3">9. Contact Us</h2>
        <p className="text-gray-400">
          For privacy-related inquiries, contact:
          <br />
          support@contentvaultpro.com
        </p>

      </div>
    </div>
  );
};

export default PrivacyPolicy;