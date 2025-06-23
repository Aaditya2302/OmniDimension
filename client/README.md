# OmniDimension Client Documentation

This document describes every **component**, **page**, and **context** in the client, including their main functions, usage, and the expected server responses.

---

## Contexts

### 1. `UserContext` ([src/context/UserContext.jsx](src/context/UserContext.jsx))
- **Purpose:** Provides `user` and `setUser` globally.
- **Usage:**  
  ```js
  const { user, setUser } = useContext(UserDataContext)
  ```
- **Typical Server Response:**  
  On login/signup, expects:
  ```json
  {
    "user": { "_id": "...", "fullName": "...", "email": "..." },
    "token": "jwt_token"
  }
  ```

---

### 2. `AuthContext` ([src/context/AuthContext.jsx](src/context/AuthContext.jsx))
- **Purpose:** Handles authentication logic (login, signup, logout) and syncs with `UserContext`.
- **Functions:**
  - `login(email, password)`
  - `signup(name, email, password)`
  - `logout()`
- **Usage:**  
  ```js
  const { login, signup, logout, user } = useAuth()
  ```
- **Typical Server Response:**  
  Same as above for login/signup.

---

### 3. `TaskContext` ([src/context/TaskContext.jsx](src/context/TaskContext.jsx))
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

### 1. `HomePage` ([src/pages/HomePage.jsx](src/pages/HomePage.jsx))
- **Purpose:** Landing page, shows features, and allows navigation to login/signup or medical service.
- **Functions:**
  - `handleLogout`: Calls `/users/logout` (GET) on server, removes token, redirects to login.
- **Server Response Example:**
  ```json
  { "message": "Logged out successfully" }
  ```

---

### 2. `LoginPage` ([src/pages/LoginPage.jsx](src/pages/LoginPage.jsx))
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

---

### 3. `SignupPage` ([src/pages/SignupPage.jsx](src/pages/SignupPage.jsx))
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

---

### 4. `MedicalServicePage` ([src/pages/MedicalServicePage.jsx](src/pages/MedicalServicePage.jsx))
- **Purpose:** Collects the user's medical service/task request.
- **Functions:**
  - `handleTaskSubmit`: Navigates to address details page if task is provided.

---

### 5. `AddressDetailPage` ([src/pages/AddressDetailPage.jsx](src/pages/AddressDetailPage.jsx))
- **Purpose:** Collects user's contact and address details.
- **Functions:**
  - `handleAddressSubmit`: Navigates to task execution page.

---

### 6. `TaskExecutionPage` ([src/pages/TaskExecutionPage.jsx](src/pages/TaskExecutionPage.jsx))
- **Purpose:** Simulates booking process and shows status updates.
- **Functions:**
  - Simulates status updates (no server call in current code).

---

### 7. `UserProtectedWrapper` ([src/pages/UserProtectedWrapper.jsx](src/pages/UserProtectedWrapper.jsx))
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

### 1. `TaskExecuter` ([src/components/TaskExecuter/TaskExecuter.jsx](src/components/TaskExecuter/TaskExecuter.jsx))
- **Purpose:** Multi-step UI for describing a medical task, entering address, and showing booking status.
- **Functions:**
  - Handles step navigation, form state, and simulates status updates.

---

## Server Endpoints Used

- **POST `/users/register`**: Registers a new user.
- **POST `/users/login`**: Authenticates user.
- **GET `/users/profile`**: Gets current user profile (protected).
- **GET `/users/logout`**: Logs out user (blacklists token).

**Typical Error Response:**
```json
{ "message": "Unauthorized" }
```
or
```json
{ "errors": [ { "msg": "...", "param": "...", ... } ] }
```

---

## Notes

- All authentication tokens are stored in `localStorage` as `"token"`.
- Most forms expect and handle server error messages for user feedback.
- All context providers must wrap the app in `main.jsx` for global state to