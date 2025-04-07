# Server Configuration Documentation

## Overview
This file serves as the main entry point for the Quiz application backend. It configures the Express server, sets up Socket.IO for real-time communication, connects various routes, and initializes the database connection.


## File
`server.js`


## Dependencies
- `express`: Web server framework
- `dotenv`: For loading environment variables
- `http`: Node.js HTTP module for creating the server
- `cors`: Cross-Origin Resource Sharing middleware
- `socket.io`: Real-time communication library

## Configuration
The server utilizes environment variables through dotenv:
```
PORT=5000  # Default port if not specified in environment
```

## Server Setup
1. Creates an Express application
2. Sets up an HTTP server using the Express app
3. Configures Socket.IO with CORS settings to allow connections from any origin
4. Defines the port (from environment variables or default 5000)

## Middleware
- `express.json()`: Parses JSON request bodies
- `cors`: Configured to allow requests from any origin with credentials

## Socket.IO Integration
- Socket.IO instance is stored in the Express app for controllers to access
- Tracks player connections and disconnections
- Sets up game end handlers for multiplayer functionality

## Routes
The server includes the following API routes:

| Route Path     | Module                | Purpose                              |
|----------------|----------------------|--------------------------------------|
| `/auth`        | `authRoutes`         | User authentication                  |
| `/leaderboard` | `leaderboardRoutes`  | Player rankings                      |
| `/quiz1`       | `quiz1Routes`        | Single-player quiz functionality     |
| `/quiz2`       | `quiz2Routes`        | Multiplayer quiz functionality       |
| `/challenge`   | `challengeRoutes`    | User-created challenges              |
| `/friend`      | `friendRoutes`       | Friend system management             |
| `/profile`     | `profileRouter`      | User profile data                    |
| `/feedback`    | `fedbckRoutes`       | User feedback submission             |
| `/ping`        | `pingRoutes`         | Server health checks                 |

## Server Initialization
1. Checks database connection before starting the server
2. If database connection is successful:
   - Starts server on the configured port
   - Logs success message
3. If database connection fails:
   - Logs error message
   - Exits the process

## Shutdown Handling
Gracefully handles server shutdown on SIGINT signal (Ctrl+C):
1. Closes the server
2. Logs shutdown message
3. Exits the process

## Base Route
The root route (`/`) returns a welcome message, useful for basic server health checks.

## Usage Example
```javascript
// Start the server
node src/server.js

// In development with hot reloading
npm run dev
```