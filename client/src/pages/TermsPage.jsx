import { Link } from "react-router-dom";

const TermsPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50 flex flex-col items-center justify-center px-4 py-12">
    <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 border border-blue-100">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-[#162942] to-[#428ce2] bg-clip-text text-transparent mb-6 text-center">
        Terms of Service
      </h1>
      <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
        <li>
          <strong>Use of Service:</strong> Botoupsy is an AI-powered assistant to help you book healthcare appointments and manage related tasks.
        </li>
        <li>
          <strong>Account Responsibility:</strong> You are responsible for maintaining the confidentiality of your account and password.
        </li>
        <li>
          <strong>Prohibited Actions:</strong> You agree not to misuse the service, attempt unauthorized access, or use the platform for unlawful activities.
        </li>
        <li>
          <strong>Service Changes:</strong> We may update or discontinue features at any time to improve your experience.
        </li>
        <li>
          <strong>Termination:</strong> Accounts may be suspended or terminated for violating these terms.
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

export default TermsPage;