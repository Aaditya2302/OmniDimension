import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import {
  CheckCircle,
  Clock,
  AlertCircle,
  ArrowLeft,
  Stethoscope,
  Heart,
  Calendar,
  MapPin,
  PhoneCall,
  PartyPopper,
  Smartphone,
  Mail
} from "lucide-react"

const TaskExecutionPage = () => {
  const navigate = useNavigate()
  const [isExecuting, setIsExecuting] = useState(true)
  const [statusUpdates, setStatusUpdates] = useState([])

  const mockStatusUpdates = [
    { id: 1, message: "Analyzing your medical request...", status: "processing", icon: <Clock /> },
    { id: 2, message: "Searching for doctors and clinics in your area...", status: "processing", icon: <MapPin /> },
    { id: 3, message: "Found 8 available healthcare providers nearby", status: "success", icon: <CheckCircle /> },
    { id: 4, message: "Checking appointment availability...", status: "processing", icon: <Calendar /> },
    { id: 5, message: "Contacting Dr. Sarah Johnson's clinic...", status: "processing", icon: <PhoneCall /> },
    { id: 6, message: "Appointment confirmed for tomorrow at 2:00 PM", status: "success", icon: <PartyPopper /> },
    { id: 7, message: "Appointment added to your calendar", status: "success", icon: <Smartphone /> },
    { id: 8, message: "Confirmation email sent to your address", status: "success", icon: <Mail /> }
  ]

  useEffect(() => {
    const executeTask = async () => {
      setStatusUpdates([])
      for (let i = 0; i < mockStatusUpdates.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        setStatusUpdates((prev) => [...prev, mockStatusUpdates[i]])
      }
      setIsExecuting(false)
    }
    executeTask()
  }, [])

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

  const goBack = () => navigate("/address-details")
  const goHome = () => navigate("/")

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50 relative overflow-hidden">
      {/* Background Icons */}
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
            {isExecuting && (
              <button
                onClick={goBack}
                className="mr-4 p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-100 rounded-full transition-colors"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
            )}
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-4">
              {[1, 2, 3].map((step) => (
                <>
                  <div key={step} className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold bg-blue-600 text-white">
                    {step}
                  </div>
                  {step < 3 && <div className="w-16 h-1 bg-blue-600"></div>}
                </>
              ))}
            </div>
          </div>

          {/* Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-blue-100">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#162942] to-[#428ce2] rounded-2xl mb-4">
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
                  <div className="flex-shrink-0 mt-1 text-blue-600">
                    {update.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-800 font-medium">{update.message}</p>
                    <p className="text-sm text-gray-500 mt-1">{formatTime(new Date())}</p>
                  </div>
                </div>
              ))}
            </div>

            {!isExecuting && statusUpdates.length > 0 && (
              <>
                <div className="mt-8 p-6 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl border border-emerald-200">
                  <h3 className="font-bold text-emerald-800 mb-2">🎉 All Done!</h3>
                  <p className="text-emerald-700">
                    Your appointment has been successfully booked. You'll receive a confirmation email shortly with all
                    the details.
                  </p>
                </div>
                <button
                  onClick={goHome}
                  className="w-full mt-6 bg-gradient-to-r from-[#162942] to-[#428ce2] text-white py-4 px-8 rounded-2xl font-bold text-lg hover:from-[#428ce2] hover:to-[#162942] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Book Another Appointment
                </button>
              </>
            )}

            {statusUpdates.length === 0 && isExecuting && (
              <div className="text-center py-12">
                <Clock className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                <p className="text-gray-500">Initializing your request...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskExecutionPage
