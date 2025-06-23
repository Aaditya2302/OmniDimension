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
import TermsPage from "./pages/TermsPage"
import PrivacyPage from "./pages/PrivacyPage"
import "./App.css"

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <Router>
          <div className="min-h-screen">
            <Routes>
              <Route path="/" element={<HomePage />
                } />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/medical-service" element={
                <UserProtectedWrapper>
                  <MedicalServicePage />
                </UserProtectedWrapper>
              } />
              <Route path="/address-details" element={
                <UserProtectedWrapper>
                  <AddressDetailPage />
                </UserProtectedWrapper>
              } />
              <Route path="/task-execution" element={
                <UserProtectedWrapper>
                  <TaskExecutionPage />
                </UserProtectedWrapper>
              } />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
            </Routes>
          </div>
        </Router>
      </TaskProvider>
    </AuthProvider>
  )
}

export default App
