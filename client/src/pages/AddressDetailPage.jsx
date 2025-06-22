import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useTask } from "../context/TaskContext"
import { HelpCircle, MapPin, User, Phone, Mail, ArrowLeft, Stethoscope, Heart, Calendar } from "lucide-react"

const AddressDetailPage = () => {
  const navigate = useNavigate()
  const { addressDetails, updateAddressDetails } = useTask()
  const [showHelp, setShowHelp] = useState(false)

  const handleAddressSubmit = async (e) => {
    e.preventDefault()
    navigate("/task-execution")
  }

  const goBack = () => {
    navigate("/medical-service")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50 relative overflow-hidden">
      {/* Medical Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10">
          <Stethoscope className="w-32 h-32 text-blue-600" />
        </div>
        <div className="absolute top-32 right-20">
          <Heart className="w-24 h-24 text-red-400" />
        </div>
        <div className="absolute bottom-20 left-20">
          <Calendar className="w-28 h-28 text-emerald-600" />
        </div>
        <div className="absolute bottom-32 right-32">
          <Stethoscope className="w-20 h-20 text-blue-400" />
        </div>
      </div>

      <div className="relative z-10 py-8 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center">
              <button
                onClick={goBack}
                className="mr-4 p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-100 rounded-full transition-colors"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
            </div>
            <button
              onClick={() => setShowHelp(!showHelp)}
              className="p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-100 rounded-full transition-colors"
              title="Help"
            >
              <HelpCircle className="w-6 h-6" />
            </button>
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold bg-blue-600 text-white">
                1
              </div>
              <div className="w-16 h-1 bg-blue-600"></div>
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold bg-blue-600 text-white">
                2
              </div>
              <div className="w-16 h-1 bg-gray-200"></div>
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold bg-gray-200 text-gray-500">
                3
              </div>
            </div>
          </div>

          {/* Help Modal */}
          {showHelp && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
                <h3 className="text-xl font-bold mb-6 text-gray-800 flex items-center">
                  <Stethoscope className="w-6 h-6 mr-2 text-blue-600" />
                  How to use Medical AI Assistant
                </h3>
                <div className="space-y-4 text-sm text-gray-600">
                  <p>
                    • <strong>Step 1:</strong> Describe your medical need in natural language
                  </p>
                  <p>
                    • <strong>Step 2:</strong> Provide your contact and address details
                  </p>
                  <p>
                    • <strong>Step 3:</strong> Watch as we find and book your appointment
                  </p>
                  <p className="text-blue-600 font-medium">
                    Examples: "Book a dentist appointment", "Find a cardiologist near me"
                  </p>
                </div>
                <button
                  onClick={() => setShowHelp(false)}
                  className="mt-6 w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-3 rounded-xl hover:from-blue-700 hover:to-emerald-700 transition-all font-semibold"
                >
                  Got it!
                </button>
              </div>
            </div>
          )}

          {/* Main Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-blue-100">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Contact & Location Details</h2>
              <p className="text-gray-600">We need this information to book your appointment</p>
            </div>

            <form onSubmit={handleAddressSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={addressDetails.fullName}
                    onChange={(e) => updateAddressDetails("fullName", e.target.value)}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={addressDetails.phone}
                    onChange={(e) => updateAddressDetails("phone", e.target.value)}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email Address
                </label>
                <input
                  type="email"
                  value={addressDetails.email}
                  onChange={(e) => updateAddressDetails("email", e.target.value)}
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <MapPin className="w-4 h-4 inline mr-2" />
                  Street Address
                </label>
                <input
                  type="text"
                  value={addressDetails.address}
                  onChange={(e) => updateAddressDetails("address", e.target.value)}
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">City</label>
                  <input
                    type="text"
                    value={addressDetails.city}
                    onChange={(e) => updateAddressDetails("city", e.target.value)}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">ZIP Code</label>
                  <input
                    type="text"
                    value={addressDetails.zipCode}
                    onChange={(e) => updateAddressDetails("zipCode", e.target.value)}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-4 px-8 rounded-2xl font-bold text-lg hover:from-blue-700 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Book My Appointment →
              </button>
            </form>
          </div>

          {/* Footer */}
          <footer className="text-center mt-12">
            <p className="text-gray-500 text-sm flex items-center justify-center">
              Built with <Heart className="w-4 h-4 mx-1 text-red-500" /> at Hackathon 2025
            </p>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default AddressDetailPage
