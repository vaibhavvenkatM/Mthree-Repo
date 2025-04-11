# Authentication Controller Documentation

## Overview
This controller file manages user authentication, including user registration (signup) and login functionality. It implements secure password handling and JWT-based authentication.

## Dependencies
- `bcryptjs` - For password hashing and comparison
- `jsonwebtoken` - For generating and verifying JWT tokens
- `dotenv` - For loading environment variables
- Database functions from "../config/db_fun":
  - `createUser` - Creates a new user in the database
  - `findUserByUsername` - Retrieves user information by username
  - `update_log_date` - Updates the user's last login date


## Configuration
- Uses JWT_SECRET from environment variables (with fallback)
- JWT tokens expire in 1 hour

## Functions

### `signup(req, res)`
Handles user registration by creating new user accounts.

#### Parameters
- `req` - Express request object containing registration data in the request body:
  - `username` - User's desired username
  - `email` - User's email address
  - `password` - User's password
- `res` - Express response object used to return the operation status

#### Process Flow
1. Extracts user registration data from the request body
2. Validates that all required fields are present
3. Checks if a user with the same username already exists
4. Hashes the password using bcrypt (with salt factor 10)
5. Creates a new user record with the hashed password
6. Returns success message and user information on success
7. Returns error information if the operation fails

#### Response Format
- Success (201):
  ```json
  {
    "message": "User registered successfully!",
    "user": "[user data]"
  }
  ```
- Validation Error (400):
  ```json
  {
    "message": "All fields are required"
  }
  ```
- Duplicate User Error (400):
  ```json
  {
    "message": "User already exists!"
  }
  ```
- Server Error (500):
  ```json
  {
    "message": "Error registering user",
    "error": "[error details]"
  }
  ```

### `login(req, res)`
Authenticates users and provides JWT tokens for authorized access.

#### Parameters
- `req` - Express request object containing login credentials in the request body:
  - `username` - User's username
  - `password` - User's password
- `res` - Express response object used to return the authentication result

#### Process Flow
1. Extracts login credentials from the request body
2. Validates that all required fields are present
3. Retrieves user information based on the username
4. Compares the provided password with the stored hash
5. Generates a JWT token containing user identifier information
6. Updates the user's last login date
7. Returns success message, token, and limited user information
8. Returns error information if authentication fails


#### Response Format
- Success (200):
  ```json
  {
    "message": "Login successful!",
    "token": "[JWT token]",
    "user": {
      "username": "[username]",
      "email": "[email]"
    }
  }
  ```
- Validation Error (400):
  ```json
  {
    "message": "All fields are required"
  }
  ```
- User Not Found (400):
  ```json
  {
    "message": "User not found!"
  }
  ```
- Invalid Password (400):
  ```json
  {
    "message": "Invalid credentials!"
  }
  ```
- Server Error (500):
  ```json
  {
    "message": "Error logging in",
    "error": "[error details]"
  }
  ```

## Security Features
- Password hashing using bcrypt
- JWT-based authentication
- Limited user information in responses (no password exposure)
- Environment variable-based secret key configuration

## Export
The file exports the `signup` and `login` functions.