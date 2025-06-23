import { Link } from "react-router-dom";

const PrivacyPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50 flex flex-col items-center justify-center px-4 py-12">
    <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 border border-blue-100">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-[#162942] to-[#428ce2] bg-clip-text text-transparent mb-6 text-center">
        Privacy Policy
      </h1>
      <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
        <li>
          <strong>Information Collection:</strong> We collect your name, email, and password to create your account. All passwords are securely hashed.
        </li>
        <li>
          <strong>Usage Data:</strong> We may collect information about your interactions with the platform to improve our services.
        </li>
        <li>
          <strong>Data Security:</strong> Your data is protected with industry-standard security and is never shared with third parties except as required by law.
        </li>
        <li>
          <strong>Cookies & Tokens:</strong> We use cookies and JWT tokens for authentication and session management.
        </li>
        <li>
          <strong>Data Deletion:</strong> You may request deletion of your account and data at any time by contacting support.
        </li>
      </ul>
      <div className="text-center">
        <Link
          to="/signup"
          className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-[#162942] to-[#428ce2] text-white rounded-xl font-semibold hover:from-[#428ce2] hover:to-[#162942] transition-all"
        >
          Back to Sign Up
        </Link>
      </div>
    </div>
  </div>
);

export default PrivacyPage;