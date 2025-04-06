# Quiz Application

A robust multiplayer quiz platform with social features, user profiles, and leaderboards.


## 📋 Overview

This application is a feature-rich quiz platform that supports both single-player and two-player modes. Users can create accounts, maintain profiles, participate in quiz challenges, create their own questions, and connect with friends.

## ✨ Features

- **User Authentication**: Secure login and registration system
- **Multiple Game Modes**:
  - Single-player quiz challenges
  - Two-player competitive mode
- **Social Features**:
  - Friend requests and management
  - Challenge friends to quiz battles
- **Leaderboards**: Track top performers in both game modes
- **Custom Questions**: Create and share your own challenge questions
- **User Profiles**:
  - Performance statistics
  - Daily and longest streaks
  - Match history and results visualization

## 🔧 Technical Architecture

The application is built with a PostgreSQL database backend with a Node.js server layer:

### Database Connection
```javascript
// Database connection is secured via environment variables
const postgres = pg(process.env.DATABASE_URL, {
    ssl: "require", 
});
```

### Core Functionality

- **User Management**: Registration, authentication, and profile maintenance
- **Quiz System**: Topic-based questions with multiple-choice options
- **Game Sessions**: Recording and tracking of game results
- **Social Network**: Friend management system with requests and connections
- **Analytics**: Performance tracking and visualization

## 📊 Data Visualization

The application includes comprehensive profile analytics:

- Pie charts for quiz result summaries
- Daily and longest streaks tracking
- Match count statistics
- Performance history

## 🤝 Social Features

Users can:
- Find and add friends
- Send friend requests
- Accept or reject incoming requests
- Remove existing connections
- See friends' performance statistics

## 📱 Usage Examples

### Creating a New User

```javascript
const newUser = await createUser("username", "email@example.com", "hashedPassword");
```

### Retrieving Leaderboard Data

```javascript
// For single-player mode
const singlePlayerLeaders = await getSinglePlayerLeaderboard();

// For two-player mode
const twoPlayerLeaders = await getTwoPlayerLeaderboard();
```

### Managing Friend Connections

```javascript
// Send a friend request
await addFriend(currentUserId, targetUserId);

// Accept a request
await acceptFriend(requesterId, currentUserId);
```

## 🛠️ Setup and Installation

1. Clone the repository
2. Create a `.env` file with your `DATABASE_URL`
3. Install dependencies:
   ```
   npm install
   ```
4. Verify database connection:
   ```javascript
   const { checkConnection } = require("./db");
   checkConnection();
   ```

## 🔒 Environment Variables

The application requires the following environment variable:
- `DATABASE_URL`: Your PostgreSQL connection string

## 🤔 Feedback

The application includes a feedback system for users to provide suggestions and report issues:

```javascript
await giveFeedback("Your feedback message");
```

