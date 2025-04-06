# Authentication Controller

A Node.js authentication module that handles user signup and login operations using JWT (JSON Web Token) for authentication.

## Dependencies

- bcryptjs: Password hashing library
- jsonwebtoken: JWT implementation for token generation
- dotenv: Environment variable management
- Database functions from `../config/db_fun.js`

## Environment Setup

The controller uses a JWT secret key from environment variables:

```javascript
const SECRET_KEY = process.env.JWT_SECRET || "needs_to_be_changed";
```

> **Important**: Ensure you set a secure `JWT_SECRET` in your `.env` file in production.

## Functions

### Signup

Registers a new user in the system.

```javascript
signup(req, res)
```

**Request Body Parameters:**
- `username`: User's unique identifier
- `email`: User's email address
- `password`: Password for authentication

**Process:**
1. Validates all required fields are present
2. Checks if username already exists in the database
3. Hashes the password using bcrypt (10 salt rounds)
4. Creates new user record in the database
5. Returns success message and user data

**Response:**
- 201: User registered successfully
- 400: Missing fields or user already exists
- 500: Server error

### Login

Authenticates a user and provides a JWT token.

```javascript
login(req, res)
```

**Request Body Parameters:**
- `username`: User's identifier
- `password`: User's password

**Process:**
1. Validates all required fields are present
2. Checks if the user exists in the database
3. Compares provided password with stored hash
4. Generates a JWT token with user ID and username
5. Updates the user's last login date
6. Returns token and user information

**Response:**
- 200: Login successful (includes token)
- 400: Missing fields, user not found, or invalid credentials
- 500: Server error

## Security Considerations

- Passwords are hashed using bcrypt with 10 rounds of salt
- JWT tokens expire after 1 hour
- Authentication errors return generic messages to prevent username enumeration
