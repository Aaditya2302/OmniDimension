import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import axios from "axios";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Stethoscope,
  Heart,
  Calendar,
  ArrowLeft,
  Loader2,
  Pill,
} from "lucide-react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserDataContext);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const submitHandler = async(e)=>{
    e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
        const userData = {
            email: email,
            password: password
        }
        setEmail('');
        setPassword('');
    
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData);
        if(response.status === 200){
          const data = response.data;
          setUser(data.user)
          localStorage.setItem('token', data.token);
          navigate('/');
    }
    } catch (err) {
      setError(err.response.data.message || "Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  const goBack = () => {
    navigate("/");
  };

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
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={goBack}
              className="p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-100 rounded-full transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-blue-100">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#162942] to-[#428ce2] rounded-2xl mb-4">
                <Pill className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-[#162942] to-[#428ce2] bg-clip-text text-transparent mb-2">
                Welcome Back
              </h1>
              <p className="text-gray-600">Sign in to your Botoupsy account</p>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}

            <form onSubmit={(e)=>{submitHandler(e)}} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Lock className="w-4 h-4 inline mr-2" />
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) =>
                      setPassword(e.target.value)
                    }
                    className="w-full p-4 pr-12 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-600">
                    Remember me
                  </span>
                </label>
                <Link
                  to="/forgot-password"
                  className="text-sm text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-[#162942] to-[#428ce2] text-white py-4 px-8 rounded-2xl font-bold text-lg hover:from-[#428ce2] hover:to-[#162942] disabled:from-gray-400 disabled:to-gray-400 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Signing In...
                  </>
                ) : (
                  "Sign In"
                )}
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Sign up here
                </Link>
              </p>
            </div>

            <div className="mt-8 relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              
            </div>
          </div>

          {/* Footer */}
          <footer className="text-center mt-12">
            <p className="text-gray-500 text-sm flex items-center justify-center">
             
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
