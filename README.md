# 🧠 OmniDimension – Smart Task Assistant

A user-friendly, AI-powered assistant that automates everyday tasks through natural language commands — from booking appointments to adding events to your calendar, making calls, and more.

---

## ✨ Features

- 🗣️ Understands tasks in plain English
- 🤖 Multi-agent system to handle booking, calendar, calling, etc.
- 📞 Integrates with APIs like Twilio, Google Calendar, and booking services
- 🔄 Real-time execution and follow-ups
- 📆 Adds tasks to user calendar automatically
- 🧠 Keeps checking for better time slots or availability

---

## 🏗️ Project Structure

```bash
OmniDimension/
├── client/          # Frontend React app (user interface)
├── server/          # Backend Node.js/Express API (business logic, DB)
├── README.md
└── .gitignore
```

---

## 🖼️ Example Use Case

> "Find a doctor near me, book the earliest appointment, add it to my calendar, and keep checking for better slots."

---

# 📦 Client (Frontend)

A modern React app using [React Router](https://reactrouter.com/), [Context API](https://react.dev/reference/react/useContext), [Tailwind CSS](https://tailwindcss.com/), and [Axios](https://axios-http.com/).

### Main Folders

- `src/components/` – Reusable UI components (e.g., TaskExecuter)
- `src/pages/` – Page-level components (e.g., HomePage, LoginPage)
- `src/context/` – Global state management (User, Auth, Task)
- `src/assets/` – Static assets (SVGs, images)

---

## Contexts

### 1. `UserContext`
- **Purpose:** Provides `user` and `setUser` globally.
- **Usage:**  
  ```js
  const { user, setUser } = useContext(UserDataContext)
  ```
- **Server Response Example:**  
  ```json
  {
    "user": { "_id": "...", "fullName": "...", "email": "..." },
    "token": "jwt_token"
  }
  ```

### 2. `AuthContext`
- **Purpose:** Handles authentication logic (login, signup, logout) and syncs with `UserContext`.
- **Functions:**
  - `login(email, password)`
  - `signup(name, email, password)`
  - `logout()`
- **Usage:**  
  ```js
  const { login, signup, logout, user } = useAuth()
  ```

### 3. `TaskContext`
- **Purpose:** Manages the current medical task and address details for booking.
- **Functions:**
  - `setTask(task)`
  - `updateAddressDetails(field, value)`
- **Usage:**  
  ```js
  const { task, setTask, addressDetails, updateAddressDetails } = useTask()
  ```

---

## Pages

### 1. `HomePage`
- **Purpose:** Landing page, shows features, and allows navigation to login/signup or medical service.
- **Functions:**
  - `handleLogout`: Calls `/users/logout` (GET) on server, removes token, redirects to login.
- **Server Response Example:**
  ```json
  { "message": "Logged out successfully" }
  ```

### 2. `LoginPage`
- **Purpose:** User login form.
- **Functions:**
  - `submitHandler`: Sends POST to `/users/login` with email and password.
- **Server Response Example:**
  ```json
  {
    "user": { "_id": "...", "fullName": "...", "email": "..." },
    "token": "jwt_token"
  }
  ```

### 3. `SignupPage`
- **Purpose:** User registration form.
- **Functions:**
  - `submitHandler`: Sends POST to `/users/register` with fullName, email, password.
- **Server Response Example:**
  ```json
  {
    "user": { "_id": "...", "fullName": "...", "email": "..." },
    "token": "jwt_token"
  }
  ```

### 4. `MedicalServicePage`
- **Purpose:** Collects the user's medical service/task request.
- **Functions:**
  - `handleTaskSubmit`: Navigates to address details page if task is provided.

### 5. `AddressDetailPage`
- **Purpose:** Collects user's contact and address details.
- **Functions:**
  - `handleAddressSubmit`: Navigates to task execution page.

### 6. `TaskExecutionPage`
- **Purpose:** Simulates booking process and shows status updates.
- **Functions:**
  - Simulates status updates (no server call in current code).

### 7. `UserProtectedWrapper`
- **Purpose:** Protects routes that require authentication.
- **Functions:**
  - On mount, sends GET to `/users/profile` with JWT token.
  - If unauthorized, redirects to login.
- **Server Response Example:**
  ```json
  {
    "_id": "...",
    "fullName": "...",
    "email": "..."
  }
  ```

---

## Components

### 1. `TaskExecuter`
- **Purpose:** Multi-step UI for describing a medical task, entering address, and showing booking status.
- **Functions:**
  - Handles step navigation, form state, and simulates status updates.

---

## 🛠️ Server (Backend)

A Node.js/Express REST API with MongoDB (via Mongoose), JWT authentication, and cookie/session management.

### Main Folders

- `controllers/` – Route handlers (e.g., user registration, login)
- `models/` – Mongoose schemas (User, BlacklistToken)
- `routes/` – Express route definitions
- `middlewares/` – Authentication middleware
- `services/` – Business logic (e.g., user creation)
- `db/` – Database connection logic

---

## User API Endpoints

**Base URL:** `http://localhost:3000/users`

### 1. Register User

- **POST** `/register`
- **Body:**
  ```json
  {
    "fullName": "John Doe",
    "email": "john@example.com",
    "password": "yourpassword"
  }
  ```
- **Success Response:**
  ```json
  {
    "user": { "_id": "...", "fullName": "...", "email": "..." },
    "token": "jwt_token"
  }
  ```
- **Error Response:**
  ```json
  {
    "errors": [
      { "msg": "Full name must be at least 3 characters", "param": "fullName" }
    ]
  }
  ```

### 2. Login User

- **POST** `/login`
- **Body:**
  ```json
  {
    "email": "john@example.com",
    "password": "yourpassword"
  }
  ```
- **Success Response:**
  ```json
  {
    "user": { "_id": "...", "fullName": "...", "email": "..." },
    "token": "jwt_token"
  }
  ```
- **Error Response:**
  ```json
  { "message": "Invalid credentials" }
  ```

### 3. Get User Profile

- **GET** `/profile`
- **Headers:** `Authorization: Bearer <jwt_token>`
- **Success Response:**
  ```json
  {
    "_id": "...",
    "fullName": "...",
    "email": "..."
  }
  ```
- **Error Response:**
  ```json
  { "message": "Unauthorized" }
  ```

### 4. Logout User

- **GET** `/logout`
- **Headers:** `Authorization: Bearer <jwt_token>`
- **Success Response:**
  ```json
  { "message": "Logged out successfully" }
  ```
- **Error Response:**
  ```json
  { "message": "Unauthorized" }
  ```

---

## 🧩 How It All Works

- **User flow:**  
  1. User signs up or logs in (JWT token issued and stored).
  2. User describes a medical need (e.g., "Book a dentist appointment").
  3. User provides contact/address details.
  4. System simulates booking and status updates.
  5. User can log out, which blacklists the JWT token.

- **Security:**  
  - JWT tokens are used for authentication.
  - Logout blacklists tokens to prevent reuse.
  - Passwords are hashed with bcrypt.
  - CORS and cookie management for secure cross-origin requests.

- **Extensibility:**  
  - The backend is ready for more agents (calendar, calling, etc.).
  - The frontend is modular, with clear separation of concerns.

---

## 📝 Notes

- All authentication tokens are stored in `localStorage` as `"token"`.
- Most forms expect and handle server error messages for user feedback.
- All context providers must wrap the app in `main.jsx` for global state to work.
- The backend uses environment variables for secrets and DB connection.

---

## 📚 Further Reading

- [React Context API](https://react.dev/reference/react/useContext)
- [React Router](https://reactrouter.com/)
- [Express.js](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [JWT Authentication](https://jwt.io/)
