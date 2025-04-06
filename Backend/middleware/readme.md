# JWT Authentication Middleware

A lightweight and secure JWT (JSON Web Token) authentication middleware for Express.js applications. This middleware verifies user authentication tokens and controls access to protected routes.

## Features

- 🔒 Secure API routes with JWT authentication
- ⚡ Lightweight implementation with minimal dependencies
- 🔑 Extracts and verifies tokens from Authorization headers
- 👤 Attaches decoded user data to request objects
- ⚙️ Environment-based configuration

## Installation

```bash
npm install jsonwebtoken dotenv
```

## Usage

### Basic Setup

```javascript
// Import the middleware
const { authenticateUser } = require('./authMiddleware');
const express = require('express');
const app = express();

// Protect routes with the middleware
app.get('/protected-route', authenticateUser, (req, res) => {
  // Access user data from the token
  const userId = req.user.id;
  
  res.json({ 
    message: "This is a protected route",
    user: req.user 
  });
});
```

### Environment Configuration

Create a `.env` file in your project root:

```
JWT_SECRET=your_strong_secret_key_here
```

## How It Works

1. The middleware extracts the JWT token from the `Authorization` header
2. It verifies the token using your secret key
3. If valid, it attaches the decoded user information to the request object
4. If invalid or missing, it returns appropriate error responses

## Error Responses

| Status | Message | Cause |
|--------|---------|-------|
| 401 | "Unauthorized: No token provided" | Missing token in request header |
| 403 | "Forbidden: Invalid token" | Token is invalid or expired |

## Security Best Practices

- Always use a strong, unique `JWT_SECRET` in your production environment
- Set appropriate token expiration times
- Use HTTPS in production to prevent token interception
- Consider implementing token refresh mechanisms for long-lived sessions


