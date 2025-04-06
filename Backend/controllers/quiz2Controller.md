# Quiz2 Controller Documentation

This controller manages the 2 player quiz game logic, handling socket connections, game state, and matchmaking.

---

## 🔧 Dependencies
```js
const { v4: uuidv4 } = require("uuid");
const { saveTwoPlayerSession } = require("../config/db_fun");
const { fetchTopicData } = require("./quesController");
```

---

## 🔄 Core Components

### Global State
- `waitingQueue`: Queue for players waiting to be matched.
- `activePlayers`: Array of two players currently playing.
- `gameInProgress`: Boolean flag for ongoing game.
- `blockNewGame`: Prevents rapid successive game starts.
- `socketIdToUserId`: Maps socket IDs to user IDs.
- `UserIdToSocketId`: Reverse mapping of the above.
- `gameScores`: Stores game metadata per `gameId`.

---

## 🔌 Socket.IO

### `setSocketIo(socketIoInstance)`
Initializes the socket instance used for communication.

### `setupGameEndHandler(socket)`
Listens to two events:
- **`game_end`**: Handles score submissions and triggers game conclusion.
- **`disconnect`**: Cleans up state if a user disconnects.

---

## 🎮 Game Lifecycle Functions

### `startGame()`
Starts a game when two players are in the queue:
- Fetches random topic data.
- Assigns questions.
- Initializes `gameScores`.
- Emits `game_start` to both players.

### `finishGame(gameId)`
Called when both players submit scores or the game times out:
- Saves game result.
- Cleans up memory and mappings.
- Triggers next game after a 3-second delay.

---

## 🗂 Database Interaction

### `saveSession(gameId, player1, player2, player1Score, player2Score)`
Determines game result and saves it using `saveTwoPlayerSession`.

---

## 📥 HTTP Endpoints

### `joinQueue(req, res)`
- Adds the player to the matchmaking queue.
- Prevents multiple concurrent logins.
- Emits `queued` to the client.

### `leaveQueue(req, res)`
- Removes the player from the queue.
- Rejects if the user is in an active game.

---

## 🔍 Utility

### `findGameBySocketId(socketId)`
Returns the game ID for a player if found in `gameScores`.

---

## 📦 Exported Functions
```js
module.exports = {
  setSocketIo,
  setupGameEndHandler,
  joinQueue,
  leaveQueue
};
```
