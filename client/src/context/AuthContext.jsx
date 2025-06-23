import { createContext, useContext, useState, useEffect } from "react"
import { UserDataContext } from "./UserContext" // 💡 import user context

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const { setUser: setUserData } = useContext(UserDataContext) // 💡 grab userContext updater

  useEffect(() => {
    const savedUser = localStorage.getItem("user")
    if (savedUser) {
      const parsed = JSON.parse(savedUser)
      setUser(parsed)
      setUserData(parsed) // 💡 update userContext as well
    }
    setIsLoading(false)
  }, [])

  const login = async (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email && password) {
          const userData = {
            id: 1,
            email,
            name: email.split("@")[0],
            createdAt: new Date().toISOString(),
          }
          setUser(userData)
          setUserData(userData) // 💡 update userContext
          localStorage.setItem("user", JSON.stringify(userData))
          resolve(userData)
        } else {
          reject(new Error("Invalid credentials"))
        }
      }, 1000)
    })
  }

  const signup = async (name, email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (name && email && password) {
          const userData = {
            id: Date.now(),
            email,
            name,
            createdAt: new Date().toISOString(),
          }
          setUser(userData)
          setUserData(userData) // 💡 update userContext
          localStorage.setItem("user", JSON.stringify(userData))
          resolve(userData)
        } else {
          reject(new Error("All fields are required"))
        }
      }, 1000)
    })
  }

  const logout = () => {
    setUser(null)
    setUserData(null) // 💡 clear userContext
    localStorage.removeItem("user")
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        login,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
