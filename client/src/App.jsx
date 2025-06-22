import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { TaskProvider } from "./context/TaskContext"
import HomePage from "./pages/HomePage"
import MedicalServicePage from "./pages/MedicalServicePage"
import AddressDetailPage from "./pages/AddressDetailPage"
import TaskExecutionPage from "./pages/TaskExecutionPage"
import "./App.css"

function App() {
  return (
    <TaskProvider>
      <Router>
        <div className="min-h-screen">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/medical-service" element={<MedicalServicePage />} />
            <Route path="/address-details" element={<AddressDetailPage />} />
            <Route path="/task-execution" element={<TaskExecutionPage />} />
          </Routes>
        </div>
      </Router>
    </TaskProvider>
  )
}

export default App
