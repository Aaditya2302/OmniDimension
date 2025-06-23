import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { TaskProvider } from "./context/TaskContext"
import { AuthProvider } from "./context/AuthContext"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import MedicalServicePage from "./pages/MedicalServicePage"
import AddressDetailPage from "./pages/AddressDetailPage"
import TaskExecutionPage from "./pages/TaskExecutionPage"
import UserProtectedWrapper from "./pages/UserProtectedWrapper"
import "./App.css"

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <Router>
          <div className="min-h-screen">
            <Routes>
              <Route path="/" element={
                <UserProtectedWrapper>
                <HomePage />
                </UserProtectedWrapper>
                } />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/medical-service" element={<MedicalServicePage />} />
              <Route path="/address-details" element={<AddressDetailPage />} />
              <Route path="/task-execution" element={<TaskExecutionPage />} />
            </Routes>
          </div>
        </Router>
      </TaskProvider>
    </AuthProvider>
  )
}

export default App
