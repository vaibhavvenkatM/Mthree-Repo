# Authentication Middleware

## Overview
This module provides authentication middleware for securing API endpoints using JSON Web Tokens (JWT).

## File
`authMiddleware.js`

## Dependencies
- `jsonwebtoken`: For JWT verification
- `dotenv`: For loading environment variables

## Configuration
The middleware uses a secret key defined in the environment variables:
```
JWT_SECRET=your_secret_key_here
```

If no environment variable is set, it falls back to a default value (`"needs_to_be_changed"`), which should be changed in production.

## Functions

### `authenticateUser(req, res, next)`
Middleware function that verifies a JWT token from the Authorization header.

#### Parameters
- `req`: Express request object
- `res`: Express response object
- `next`: Express next middleware function

#### Process
1. Extracts the token from the Authorization header (format: `Bearer <token>`)
2. Verifies the token using the secret key
3. If valid, attaches the decoded user information to the request object as `req.user`
4. If invalid or missing, returns appropriate error responses

#### Returns
- On success: Calls `next()` to proceed to the next middleware/route handler
- On failure: Returns a JSON response with appropriate status code
  - `401 Unauthorized`: No token provided
  - `403 Forbidden`: Invalid token

## Usage Example
```javascript
const { authenticateUser } = require('./path/to/authMiddleware');

// Apply to individual routes
app.get('/protected-route', authenticateUser, (req, res) => {
  // Access user info with req.user
  res.json({ message: `Hello ${req.user.username}!` });
});

// Or apply to all routes under a certain path
app.use('/api/protected', authenticateUser);
app.use('/api/protected', protectedRoutes);
```

## Security Notes
- Make sure to set a strong `JWT_SECRET` environment variable in production
- The default fallback secret should never be used in production environments
- The middleware does not check token expiration explicitly (handled by jwt.verify)