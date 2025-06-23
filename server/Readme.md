# User API Endpoints Documentation

This document describes all user-related API endpoints for the OmniDimension backend.

---

## Base URL

```
http://localhost:3000/users
```

---

## 1. Register User

- **Endpoint:** `/register`
- **Method:** `POST`
- **Description:** Registers a new user.

### Request Body

```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "password": "yourpassword"
}
```

### Validation

- `email`: Must be a valid email.
- `fullName`: Minimum 3 characters.
- `password`: Minimum 6 characters.

### Success Response

- **Status:** `201 Created`
- **Body:**
```json
{
  "user": {
    "_id": "user_id",
    "fullName": "John Doe",
    "email": "john@example.com"
  },
  "token": "jwt_token"
}
```

### Error Response

- **Status:** `400 Bad Request`
- **Body:**
```json
{
  "errors": [
    { "msg": "Full name must be at least 3 characters", "param": "fullName", ... }
  ]
}
```

---

## 2. Login User

- **Endpoint:** `/login`
- **Method:** `POST`
- **Description:** Authenticates a user and returns a JWT token.

### Request Body

```json
{
  "email": "john@example.com",
  "password": "yourpassword"
}
```

### Validation

- `email`: Must be a valid email.
- `password`: Minimum 6 characters.

### Success Response

- **Status:** `200 OK`
- **Body:**
```json
{
  "user": {
    "_id": "user_id",
    "fullName": "John Doe",
    "email": "john@example.com"
  },
  "token": "jwt_token"
}
```

### Error Response

- **Status:** `400 Bad Request` or `401 Unauthorized`
- **Body:**
```json
{
  "message": "Invalid credentials"
}
```

---

## 3. Get User Profile

- **Endpoint:** `/profile`
- **Method:** `GET`
- **Description:** Returns the authenticated user's profile.
- **Auth Required:** Yes (JWT token in `Authorization` header or `token` cookie)

### Headers

```
Authorization: Bearer <jwt_token>
```

### Success Response

- **Status:** `200 OK`
- **Body:**
```json
{
  "_id": "user_id",
  "fullName": "John Doe",
  "email": "john@example.com"
}
```

### Error Response

- **Status:** `401 Unauthorized`
- **Body:**
```json
{
  "message": "Unauthorized"
}
```

---

## 4. Logout User

- **Endpoint:** `/logout`
- **Method:** `GET`
- **Description:** Logs out the user by blacklisting the JWT token.
- **Auth Required:** Yes

### Headers

```
Authorization: Bearer <jwt_token>
```

### Success Response

- **Status:** `200 OK`
- **Body:**
```json
{
  "message": "Logged out successfully"
}
```

### Error Response

- **Status:** `401 Unauthorized`
- **Body:**
```json
{
  "message": "Unauthorized"
}
```

---

## Notes

- All endpoints return JSON responses.
- For protected routes, send the JWT token in the `Authorization` header as `Bearer <token>` or as a `token` cookie.
- Validation errors return an array of error objects.

---