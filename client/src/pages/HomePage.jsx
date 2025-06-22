import { useNavigate } from "react-router-dom"
import { Stethoscope, Heart, Calendar, Shield, Users, Award, ArrowRight } from "lucide-react"

const HomePage = () => {
  const navigate = useNavigate()

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

      <div className="relative z-10">
        {/* Header */}
        <header className="flex justify-between items-center p-6">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl flex items-center justify-center">
              <Stethoscope className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              MedicalAI
            </span>
          </div>
          <div className="space-x-4">
            <button className="px-6 py-2 text-blue-600 hover:text-blue-800 font-semibold transition-colors">
              Login
            </button>
            <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-xl hover:from-blue-700 hover:to-emerald-700 transition-all font-semibold">
              Sign Up
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent mb-6">
              Your AI-Powered
              <br />
              Healthcare Assistant
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Experience the future of healthcare booking. Simply describe what you need, and our AI will find the right
              doctor, book your appointment, and add it to your calendar - all in minutes.
            </p>
            <button
              onClick={() => navigate("/medical-service")}
              className="inline-flex items-center px-12 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-2xl font-bold text-lg hover:from-blue-700 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Started
              <ArrowRight className="w-6 h-6 ml-2" />
            </button>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <Stethoscope className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Smart Booking</h3>
              <p className="text-gray-600">
                Our AI understands your needs and finds the perfect healthcare provider in your area, checking
                availability in real-time.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Seamless Integration</h3>
              <p className="text-gray-600">
                Appointments are automatically added to your calendar with reminders, and confirmation emails are sent
                instantly.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Secure & Private</h3>
              <p className="text-gray-600">
                Your health information is protected with enterprise-grade security and HIPAA-compliant data handling.
              </p>
            </div>
          </div>

          {/* About Us Section */}
          <div className="bg-white rounded-3xl p-12 shadow-2xl border border-blue-100">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">About MedicalAI</h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                We're revolutionizing healthcare accessibility by combining artificial intelligence with human-centered
                design. Our mission is to make quality healthcare just a conversation away.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">50K+</h3>
                <p className="text-gray-600">Happy Patients</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Stethoscope className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">1000+</h3>
                <p className="text-gray-600">Partner Doctors</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">99%</h3>
                <p className="text-gray-600">Success Rate</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center py-12">
          <p className="text-gray-500 text-sm flex items-center justify-center">
            Built with <Heart className="w-4 h-4 mx-1 text-red-500" /> at Hackathon 2025
          </p>
        </footer>
      </div>
    </div>
  )
}

export default HomePage
