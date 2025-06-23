import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import UserContext from "./context/UserContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <UserContext>
  <AuthProvider>
    <App />
  </AuthProvider>
  </UserContext>
);
