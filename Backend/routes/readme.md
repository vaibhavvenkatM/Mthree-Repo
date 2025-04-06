## 🚀 Overview

QuizMaster is a comprehensive quiz platform API that allows users to participate in various quiz challenges, compete with friends, track progress on leaderboards, and engage in a social gaming experience. Built with Express.js, the platform features robust authentication, friend management, and quiz gameplay systems.

## ✨ Features

- **User Authentication** - Secure signup and login system
- **Profile Management** - User profile creation and retrieval
- **Quiz Challenges** - Multiple quiz formats and challenges
- **Multiplayer Support** - Join queues and compete with others
- **Friend System** - Send/accept friend requests and manage connections
- **Leaderboards** - Track top performers
- **Challenge Creation** - Create and share custom challenges
- **Feedback System** - Submit feedback on quiz experience

## 🔧 API Routes

### Authentication

| Method | Endpoint      | Description                 | Authentication Required |
|--------|---------------|-----------------------------|------------------------|
| POST   | /auth/signup  | Register a new user         | No                     |
| POST   | /auth/login   | Login to existing account   | No                     |
| GET    | /auth/        | Check authentication status | No                     |

### Profile

| Method | Endpoint      | Description                 | Authentication Required |
|--------|---------------|-----------------------------|------------------------|
| GET    | /profile/     | Get user profile data       | Yes                    |

### Quiz & Questions

| Method | Endpoint      | Description                 | Authentication Required |
|--------|---------------|-----------------------------|------------------------|
| GET    | /ques/        | Get topic/question data     | No (temporary)         |
| POST   | /quiz1/start  | Start a quiz game           | Yes                    |
| POST   | /quiz1/end    | End a quiz game             | Yes                    |
| POST   | /quiz2/join   | Join multiplayer queue      | Yes                    |
| POST   | /quiz2/leave  | Leave multiplayer queue     | Yes                    |

### Challenges

| Method | Endpoint      | Description                 | Authentication Required |
|--------|---------------|-----------------------------|------------------------|
| POST   | /challenge/   | Save a new challenge        | Yes                    |
| GET    | /challenge/show | View available challenges | Yes                    |

### Friends

| Method | Endpoint                 | Description                | Authentication Required |
|--------|--------------------------|----------------------------|------------------------|
| GET    | /friends/get_users       | Get available users        | Yes                    |
| POST   | /friends/send_req        | Send a friend request      | Yes                    |
| GET    | /friends/show_req        | View pending requests      | Yes                    |
| POST   | /friends/accept_req      | Accept a friend request    | Yes                    |
| POST   | /friends/reject_req      | Reject a friend request    | Yes                    |
| GET    | /friends/get_friends     | View your friends list     | Yes                    |
| POST   | /friends/remove_friend   | Remove a friend            | Yes                    |

### Leaderboard

| Method | Endpoint      | Description                 | Authentication Required |
|--------|---------------|-----------------------------|------------------------|
| GET    | /leaderboard/ | Get global leaderboard data | Yes                    |

### Feedback

| Method | Endpoint      | Description                 | Authentication Required |
|--------|---------------|-----------------------------|------------------------|
| POST   | /feedback/    | Submit feedback             | Yes                    |

### System

| Method | Endpoint      | Description                 | Authentication Required |
|--------|---------------|-----------------------------|------------------------|
| GET    | /ping/        | Verify token/connection     | Yes                    |

## 🔒 Authentication

The API uses token-based authentication through the `authenticateUser` middleware. Most endpoints require a valid authentication token, which can be obtained through the login process.

## 📋 Getting Started

1. Clone the repository
2. Install dependencies
   ```
   npm install
   ```
3. Configure your environment variables
4. Start the server
   ```
   npm start
   ```

## 🛠️ Technologies Used

- Express.js
- Node.js
- MongoDB (implied by the structure)
- JSON Web Tokens (for authentication)



