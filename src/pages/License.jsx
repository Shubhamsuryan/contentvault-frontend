const License = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl md:text-4xl font-bold mb-8">
          License Agreement
        </h1>

        <p className="text-gray-400 mb-6">
          Effective Date: October 14, 2025
        </p>

        <h2 className="font-semibold mt-8 mb-3">1. License Grant</h2>
        <p className="text-gray-400">
          Upon purchase, ContentVault Pro grants you a non-exclusive, 
          non-transferable license to use and resell the individual 
          digital assets included in the bundle.
        </p>

        <h2 className="font-semibold mt-8 mb-3">2. What You Are Allowed To Do</h2>
        <ul className="text-gray-400 list-disc ml-6 mt-2 space-y-1">
          <li>Use the digital assets for personal or commercial purposes.</li>
          <li>Resell individual videos, templates, or digital files.</li>
          <li>Edit and modify content before resale.</li>
        </ul>

        <h2 className="font-semibold mt-8 mb-3">3. What You Are NOT Allowed To Do</h2>
        <ul className="text-gray-400 list-disc ml-6 mt-2 space-y-1">
          <li>Resell or redistribute the entire bundle as a single package.</li>
          <li>Share the Google Drive access with others.</li>
          <li>Claim ownership of the original bundle.</li>
          <li>Upload the full bundle to public platforms for free distribution.</li>
        </ul>

        <h2 className="font-semibold mt-8 mb-3">4. Violations</h2>
        <p className="text-gray-400">
          Violation of this License Agreement may result in immediate 
          termination of access and potential legal action.
        </p>

        <h2 className="font-semibold mt-8 mb-3">5. Intellectual Property</h2>
        <p className="text-gray-400">
          All intellectual property rights remain with ContentVault Pro 
          and/or its licensors.
        </p>

        <h2 className="font-semibold mt-8 mb-3">6. Contact</h2>
        <p className="text-gray-400">
          For license-related questions, contact:
          <br />
          support@contentvaultpro.com
        </p>

      </div>
    </div>
  );
};

export default License;