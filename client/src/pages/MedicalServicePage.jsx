import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useTask } from "../context/TaskContext"
import { HelpCircle, Stethoscope, Heart, Calendar, ArrowLeft, Pill } from "lucide-react"

const MedicalServicePage = () => {
  const navigate = useNavigate()
  const { task, setTask } = useTask()
  const [showHelp, setShowHelp] = useState(false)

  const handleTaskSubmit = () => {
    if (!task.trim()) return
    navigate("/address-details")
  }

  const goBack = () => {
    navigate("/")
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
              <div className="w-16 h-1 bg-gray-200"></div>
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold bg-gray-200 text-gray-500">
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
                  <Pill className="w-6 h-6 mr-2 text-blue-600" />
                  How to use Botsy AI
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
                  className="mt-6 w-full bg-gradient-to-r from-[#162942] to-[#428ce2] text-white py-3 rounded-xl hover:from-[#428ce2] hover:to-[#162942] transition-all font-semibold"
                >
                  Got it!
                </button>
              </div>
            </div>
          )}

          {/* Main Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-blue-100">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#162942] to-[#428ce2] rounded-2xl mb-4">
                <Stethoscope className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-[#162942] to-[#428ce2] bg-clip-text text-transparent mb-2">
                Botsy AI 
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
              className="w-full bg-gradient-to-r from-[#162942] to-[#428ce2] text-white py-4 px-8 rounded-2xl font-bold text-lg hover:from-[#428ce2] hover:to-[#162942] disabled:from-gray-400 disabled:to-gray-400 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Continue to Details →
            </button>
          </div>

          {/* Footer */}
          <footer className="text-center mt-12">
            <p className="text-gray-500 text-sm flex items-center justify-center">
              
            </p>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default MedicalServicePage
