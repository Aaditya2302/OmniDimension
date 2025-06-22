"use client"

import { useState } from "react"
import {
  HelpCircle,
  CheckCircle,
  Clock,
  AlertCircle,
  MapPin,
  User,
  Phone,
  Mail,
  ArrowLeft,
  Stethoscope,
  Calendar,
  Heart,
} from "lucide-react"

const TaskExecutor = () => {
  const [currentStep, setCurrentStep] = useState(1) // 1: Task Input, 2: Address Details, 3: Status Updates
  const [task, setTask] = useState("")
  const [addressDetails, setAddressDetails] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
  })
  const [isExecuting, setIsExecuting] = useState(false)
  const [statusUpdates, setStatusUpdates] = useState([])
  const [showHelp, setShowHelp] = useState(false)

  const mockStatusUpdates = [
    { id: 1, message: "🔍 Analyzing your medical request...", status: "processing", timestamp: new Date() },
    {
      id: 2,
      message: "🏥 Searching for doctors and clinics in your area...",
      status: "processing",
      timestamp: new Date(Date.now() + 1000),
    },
    {
      id: 3,
      message: "✅ Found 8 available healthcare providers nearby",
      status: "success",
      timestamp: new Date(Date.now() + 2000),
    },
    {
      id: 4,
      message: "📅 Checking appointment availability...",
      status: "processing",
      timestamp: new Date(Date.now() + 3000),
    },
    {
      id: 5,
      message: "📞 Contacting Dr. Sarah Johnson's clinic...",
      status: "processing",
      timestamp: new Date(Date.now() + 4000),
    },
    {
      id: 6,
      message: "🎉 Appointment confirmed for tomorrow at 2:00 PM",
      status: "success",
      timestamp: new Date(Date.now() + 5000),
    },
    {
      id: 7,
      message: "📱 Appointment added to your calendar",
      status: "success",
      timestamp: new Date(Date.now() + 6000),
    },
    {
      id: 8,
      message: "📧 Confirmation email sent to your address",
      status: "success",
      timestamp: new Date(Date.now() + 7000),
    },
  ]

  const handleTaskSubmit = () => {
    if (!task.trim()) return
    setCurrentStep(2)
  }

  const handleAddressSubmit = async (e) => {
    e.preventDefault()
    setCurrentStep(3)
    setIsExecuting(true)
    setStatusUpdates([])

    // Simulate real-time status updates
    for (let i = 0; i < mockStatusUpdates.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setStatusUpdates((prev) => [...prev, mockStatusUpdates[i]])
    }

    setIsExecuting(false)
  }

  const handleInputChange = (field, value) => {
    setAddressDetails((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case "success":
        return <CheckCircle className="w-5 h-5 text-emerald-500" />
      case "processing":
        return <Clock className="w-5 h-5 text-blue-500 animate-spin" />
      case "error":
        return <AlertCircle className="w-5 h-5 text-red-500" />
      default:
        return <Clock className="w-5 h-5 text-gray-500" />
    }
  }

  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString("en-US", {
      hour12: true,
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const goBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
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
              {currentStep > 1 && (
                <button
                  onClick={goBack}
                  className="mr-4 p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-100 rounded-full transition-colors"
                >
                  <ArrowLeft className="w-6 h-6" />
                </button>
              )}
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
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  currentStep >= 1 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-500"
                }`}
              >
                1
              </div>
              <div className={`w-16 h-1 ${currentStep >= 2 ? "bg-blue-600" : "bg-gray-200"}`}></div>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  currentStep >= 2 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-500"
                }`}
              >
                2
              </div>
              <div className={`w-16 h-1 ${currentStep >= 3 ? "bg-blue-600" : "bg-gray-200"}`}></div>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  currentStep >= 3 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-500"
                }`}
              >
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

          {/* Step 1: Task Input */}
          {currentStep === 1 && (
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-blue-100">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl mb-4">
                  <Stethoscope className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                  Medical AI Assistant
                </h1>
                <p className="text-gray-600">Describe your healthcare needs and we'll handle the rest</p>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  What medical service do you need?
                </label>
                <textarea
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                  placeholder="e.g., Book a dentist appointment for teeth cleaning, Find a cardiologist for heart checkup, Schedule eye exam with optometrist..."
                  className="w-full h-40 p-6 border-2 border-gray-200 rounded-2xl resize-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all text-gray-700 placeholder-gray-400"
                />
              </div>

              <button
                onClick={handleTaskSubmit}
                disabled={!task.trim()}
                className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-4 px-8 rounded-2xl font-bold text-lg hover:from-blue-700 hover:to-emerald-700 disabled:from-gray-400 disabled:to-gray-400 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Continue to Details →
              </button>
            </div>
          )}

          {/* Step 2: Address Details */}
          {currentStep === 2 && (
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
                      onChange={(e) => handleInputChange("fullName", e.target.value)}
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
                      onChange={(e) => handleInputChange("phone", e.target.value)}
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
                    onChange={(e) => handleInputChange("email", e.target.value)}
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
                    onChange={(e) => handleInputChange("address", e.target.value)}
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
                      onChange={(e) => handleInputChange("city", e.target.value)}
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">ZIP Code</label>
                    <input
                      type="text"
                      value={addressDetails.zipCode}
                      onChange={(e) => handleInputChange("zipCode", e.target.value)}
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
          )}

          {/* Step 3: Status Updates */}
          {currentStep === 3 && (
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-blue-100">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl mb-4">
                  {isExecuting ? (
                    <Clock className="w-8 h-8 text-white animate-spin" />
                  ) : (
                    <CheckCircle className="w-8 h-8 text-white" />
                  )}
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  {isExecuting ? "Processing Your Request..." : "Appointment Booked Successfully!"}
                </h2>
                <p className="text-gray-600">
                  {isExecuting ? "Please wait while we handle everything for you" : "Here's what we accomplished"}
                </p>
              </div>

              <div className="space-y-4 max-h-96 overflow-y-auto">
                {statusUpdates.map((update, index) => (
                  <div
                    key={update.id}
                    className={`flex items-start space-x-4 p-6 rounded-2xl border-l-4 transition-all duration-500 ${
                      update.status === "success" ? "bg-emerald-50 border-emerald-500" : "bg-blue-50 border-blue-500"
                    } transform ${index === statusUpdates.length - 1 ? "scale-105" : ""}`}
                  >
                    <div className="flex-shrink-0 mt-1">{getStatusIcon(update.status)}</div>
                    <div className="flex-1">
                      <p className="text-gray-800 font-medium">{update.message}</p>
                      <p className="text-sm text-gray-500 mt-1">{formatTime(update.timestamp)}</p>
                    </div>
                  </div>
                ))}
              </div>

              {!isExecuting && statusUpdates.length > 0 && (
                <div className="mt-8 p-6 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl border border-emerald-200">
                  <h3 className="font-bold text-emerald-800 mb-2">🎉 All Done!</h3>
                  <p className="text-emerald-700">
                    Your appointment has been successfully booked. You'll receive a confirmation email shortly with all
                    the details.
                  </p>
                </div>
              )}

              {statusUpdates.length === 0 && !isExecuting && (
                <div className="text-center py-12">
                  <Clock className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                  <p className="text-gray-500">Waiting to process your request...</p>
                </div>
              )}
            </div>
          )}

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

export default TaskExecutor
