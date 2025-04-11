# Routes Documentation

## Overview
This document provides an overview of all route files in the QuizMaster API, detailing each endpoint's purpose, required authentication, and relation to the corresponding controllers.

## Authentication Routes (`authRoutes.js`)
Manages user registration and authentication.

| Method | Endpoint      | Function  | Description                     | Auth Required |
|--------|---------------|-----------|----------------------------------|---------------|
| GET    | /auth/        | -         | Welcome message                  | No            |
| GET    | /auth/signup  | -         | Welcome to signup page (debug)   | No            |
| POST   | /auth/signup  | `signup`  | Register a new user              | No            |
| GET    | /auth/login   | -         | Welcome to login page (debug)    | No            |
| POST   | /auth/login   | `login`   | Authenticate a user              | No            |

**Controller Dependencies:**
- `authController.js` - Provides signup and login functions

## Challenge Routes (`challengeRoutes.js`)
Handles the creation and retrieval of user-created challenges.

| Method | Endpoint         | Function         | Description                | Auth Required |
|--------|------------------|------------------|----------------------------|---------------|
| POST   | /challenge/      | `save_Challenge` | Create a new challenge     | Yes           |
| GET    | /challenge/show  | `show_challenge` | Retrieve all challenges    | Yes           |

**Controller Dependencies:**
- `challengeController.js` - Provides challenge management functions
- `authMiddleware.js` - For user authentication

## Feedback Routes (`fedbckRoutes.js`)
Manages submission of user feedback.

| Method | Endpoint      | Function        | Description           | Auth Required |
|--------|---------------|-----------------|------------------------|---------------|
| POST   | /feedback/    | `save_feedback` | Submit user feedback   | Yes           |

**Controller Dependencies:**
- `fedbckController.js` - Provides feedback submission functionality
- `authMiddleware.js` - For user authentication

## Friend Routes (`friendRoutes.js`)
Handles all friend-related operations including sending requests, accepting/rejecting requests, and managing friend lists.

| Method | Endpoint                 | Function            | Description              | Auth Required |
|--------|--------------------------|---------------------|--------------------------|---------------|
| GET    | /friends/get_users       | `Get_Users`         | Get available users      | Yes           |
| POST   | /friends/send_req        | `Send_FriendReq`    | Send a friend request    | Yes           |
| GET    | /friends/show_req        | `Show_FriendReq`    | View friend requests     | Yes           |
| POST   | /friends/accept_req      | `Accept_FriendReq`  | Accept a friend request  | Yes           |
| POST   | /friends/reject_req      | `Reject_FriendReq`  | Reject a friend request  | Yes           |
| GET    | /friends/get_friends     | `Fetch_Friends`     | View friends list        | Yes           |
| POST   | /friends/remove_friend   | `Remove_Friend`     | Remove a friend          | Yes           |

**Controller Dependencies:**
- `friendsController.js` - Provides friend management functions
- `authMiddleware.js` - For user authentication

## Leaderboard Routes (`leaderboardRoutes.js`)
Retrieves leaderboard data for the application.

| Method | Endpoint        | Function          | Description                | Auth Required |
|--------|-----------------|-------------------|----------------------------|---------------|
| GET    | /leaderboard/   | `get_leaderBoard` | Get leaderboard data       | Yes           |

**Controller Dependencies:**
- `leaderboardController.js` - Provides leaderboard data retrieval
- `authMiddleware.js` - For user authentication

## Ping Routes (`pingRoutes.js`)
Simple utility route to verify token validity and connection status.

| Method | Endpoint    | Function              | Description              | Auth Required |
|--------|-------------|------------------------|--------------------------|---------------|
| GET    | /ping/      | Anonymous function    | Verify token validity    | Yes           |

**Controller Dependencies:**
- `authMiddleware.js` - For user authentication

## Profile Routes (`profileRouter.js`)
Manages user profile retrieval.

| Method | Endpoint     | Function      | Description              | Auth Required |
|--------|--------------|---------------|--------------------------|---------------|
| GET    | /profile/    | `getProfile`  | Retrieve user profile    | Yes           |

**Controller Dependencies:**
- `profileController.js` - Provides profile data retrieval
- `authMiddleware.js` - For user authentication

## Question Routes (`quesRoutes.js`)
Handles topic and question data retrieval.

| Method | Endpoint    | Function       | Description                | Auth Required |
|--------|-------------|----------------|----------------------------|---------------|
| GET    | /ques/      | `getTopicData` | Get topic/question data    | No (temporary)|

**Notes:**
- This route is temporarily set without authentication for debugging purposes
- Will require authentication in production

**Controller Dependencies:**
- `quesController.js` - Provides topic data retrieval functions

## Quiz 1 Routes (`quiz1Routes.js`)
Manages single-player quiz game sessions.

| Method | Endpoint      | Function    | Description          | Auth Required |
|--------|---------------|-------------|----------------------|---------------|
| POST   | /quiz1/start  | `startGame` | Start a quiz game    | Yes           |
| POST   | /quiz1/end    | `endGame`   | End a quiz game      | Yes           |

**Controller Dependencies:**
- `quiz1Controller.js` - Provides game management functions
- `authMiddleware.js` - For user authentication

## Quiz 2 Routes (`quiz2Routes.js`)
Manages multiplayer quiz game matchmaking.

| Method | Endpoint      | Function     | Description              | Auth Required |
|--------|---------------|--------------|--------------------------|---------------|
| POST   | /quiz2/join   | `joinQueue`  | Join multiplayer queue   | Yes           |
| POST   | /quiz2/leave  | `leaveQueue` | Leave multiplayer queue  | Yes           |

**Controller Dependencies:**
- `quiz2Controller.js` - Provides multiplayer queue management
- `authMiddleware.js` - For user authentication

## Authentication Middleware
Most routes use the `authenticateUser` middleware from `authMiddleware.js` to verify the user's authentication token before allowing access to protected endpoints.