import { createContext, useContext, useState } from "react"

const TaskContext = createContext()

export const useTask = () => {
  const context = useContext(TaskContext)
  if (!context) {
    throw new Error("useTask must be used within a TaskProvider")
  }
  return context
}

export const TaskProvider = ({ children }) => {
  const [task, setTask] = useState("")
  const [addressDetails, setAddressDetails] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
  })

  const updateAddressDetails = (field, value) => {
    setAddressDetails((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  return (
    <TaskContext.Provider
      value={{
        task,
        setTask,
        addressDetails,
        setAddressDetails,
        updateAddressDetails,
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}
