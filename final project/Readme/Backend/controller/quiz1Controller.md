# Single Player Game Controller Documentation

This controller handles the single-player quiz game logic, including game session management, question assignment, and score saving.

---

## 🔧 Dependencies
```js
const { v4: uuidv4 } = require("uuid");
const { saveSinglePlayerSession } = require("../config/db_fun");
const { fetchTopicData } = require("./quesController");
```

---

## 🧠 Global State

### `userGameMap`
Stores ongoing game session data for each user:
- `gameId`: Unique ID for the session.
- `score`: Player's score.
- `timer`: Timeout object for automatic game end.

---

## 💾 Database Interaction

### `saveSession(gameId, playerId, playerScore)`
Saves the single-player game result into the database using `saveSinglePlayerSession`.

---

## 🎮 Game Logic

### `handleGameEnd(userId, gameId)`
Ends a game session:
- Validates the game.
- Saves the session.
- Cleans up from `userGameMap`.

### `startGame(req, res)`
Starts a new game:
- Generates a game ID.
- Picks a random topic.
- Fetches questions.
- Stores session in `userGameMap` with a 75-second timer.
- Responds with game data.

### `endGame(req, res)`
Manually ends a game session:
- Validates the session.
- Updates the score.
- Clears timeout and ends game.

---

## ⚙️ HTTP Endpoints

- **`POST /startGame`** — Starts a new game for the user.
- **`POST /endGame`** — Ends an ongoing game and saves the score.

---

## 📦 Exported Functions
```js
module.exports = {
  startGame,
  endGame
};
```
