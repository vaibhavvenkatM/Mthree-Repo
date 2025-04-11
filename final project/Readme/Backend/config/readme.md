# Database Module Documentation

## 1. Database Connection (`db.js`)

### Overview
This module establishes and maintains a connection to the PostgreSQL database.

### Dependencies
- `postgres`: PostgreSQL client for Node.js
- `dotenv`: For loading environment variables

### Configuration
The module requires a `DATABASE_URL` environment variable to be set in the `.env` file.

### Functions

#### `checkConnection()`
Validates the database connection by executing a simple query.

**Returns:**
- Logs success or failure message to the console

### Usage Example
```javascript
const { postgres, checkConnection } = require('./path/to/db');

// Check database connection on server startup
(async () => {
  await checkConnection();
})();
```

## 2. Database Functions (`db_fun.js`)

### Overview
This module provides functions to interact with the database, including user management, quiz functionality, and social features.

### Dependencies
- Local `db.js` module

### User Management Functions

#### `createUser(username, email, hashedPassword)`
Creates a new user in the database.

#### `findUserByUsername(username)`
Retrieves user information by username.

#### `update_log_date(userid, date)`
Updates the last login date for a user.

### Quiz & Game Functions

#### `getTopicById(topicId)`
Retrieves a topic by its ID.

#### `getQuestionsById(topicId)`
Retrieves questions for a specific topic.

#### `saveChallenge(userid, que, qo1, qo2, qo3, qo4, qans)`
Saves a new challenge question created by a user.

#### `getChallenge()`
Retrieves all challenge questions.

#### `getChallengebyPalyer(userid)`
Retrieves challenges created by a specific user.

### Leaderboard Functions

#### `getSinglePlayerLeaderboard()`
Retrieves the leaderboard for single-player games.

#### `getTwoPlayerLeaderboard()`
Retrieves the leaderboard for two-player games.

### Game Session Functions

#### `saveSinglePlayerSession(gameId, playerid, result)`
Saves the result of a single-player game session.

#### `saveTwoPlayerSession(gameId, player1, player2, result)`
Saves the result of a two-player game session.

### Social Features Functions

#### `findUsers(userid)`
Finds users that can be added as friends.

#### `addFriend(userid1, userid2)`
Sends a friend request to another user.

#### `showFriendreq(userid1)`
Retrieves friend requests for a user.

#### `acceptFriend(userid1, userid2)`
Accepts a friend request.

#### `rejectFriend(userid1, userid2)`
Rejects a friend request.

#### `displayFriend(userid1)`
Retrieves a user's friends list.

#### `removeFriend(userid1, userid2)`
Removes a friend relationship.

#### `giveFeedback(fedbck)`
Saves user feedback.

## 3. Profile Functions (`profile_fun.js`)

### Overview
This module provides functions to retrieve user profile information and statistics.

### Dependencies
- Local `db.js` module

### Functions

#### `PiechartResult(userid)`
Retrieves data for generating a pie chart of user results.

#### `CountMatch(userid)`
Retrieves the count of matches played by a user.

#### `basicinfo(userid)`
Retrieves basic profile information for a user.

#### `dailystreak(userid)`
Retrieves a user's current daily streak information.

#### `longeststreak(userid)`
Retrieves a user's longest streak information.

### Usage Example
```javascript
const { basicinfo, PiechartResult } = require('./path/to/profile_fun');

app.get('/api/profile/:userId', authenticateUser, async (req, res) => {
  try {
    const userId = req.params.userId;
    const basicInfo = await basicinfo(userId);
    const chartData = await PiechartResult(userId);
    
    res.json({ basicInfo, chartData });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving profile data" });
  }
});
```