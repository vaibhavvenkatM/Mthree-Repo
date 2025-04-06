# Game Controller Module

This module manages game sessions for single-player quiz games.

## Dependencies

```javascript
const { v4: uuidv4 } = require("uuid");
const { saveSinglePlayerSession } = require("../config/db_fun");
const { fetchTopicData } = require("./quesController");
```

## Data Structures

- `userGameMap`: An object that maps user IDs to their active game details, including:
  - `gameId`: Unique identifier for the game session
  - `score`: Player's current score
  - `timer`: Timeout reference for automatic game termination

## Core Functions

### saveSession(gameId, playerId, playerScore)

Saves a completed game session to the database.

**Parameters:**
- `gameId`: Unique identifier for the game
- `playerId`: User ID of the player
- `playerScore`: Final score achieved by the player

**Behavior:**
- Validates player ID before attempting to save
- Logs success or failure of the database operation

### handleGameEnd(userId, gameId)

Handles the logic when a game session ends.

**Parameters:**
- `userId`: User ID of the player
- `gameId`: Unique identifier for the game

**Behavior:**
- Verifies the game belongs to the user
- Saves the final session data to the database
- Cleans up game resources by removing the entry from `userGameMap`
- Logs completion of the game cleanup

### startGame(req, res)

Initiates a new game session for a user.

**Parameters:**
- `req`: Express request object containing user authentication
- `res`: Express response object for sending back game data

**Behavior:**
- Generates a unique game ID
- Selects a random topic (ID 1-5)
- Fetches questions for the selected topic
- Checks if the user is already in an active game
- Sets up a 75-second game timer
- Returns game details, questions, and topic information to the client

### endGame(req, res)

Ends a game session manually before the timer expires.

**Parameters:**
- `req`: Express request object containing user authentication and game details
- `res`: Express response object for sending confirmation

**Behavior:**
- Validates the game session belongs to the requesting user
- Updates the final score
- Cancels the automatic timeout
- Cleans up game resources
- Sends success confirmation to the client

## Module Exports

```javascript
module.exports = { startGame, endGame };
```
