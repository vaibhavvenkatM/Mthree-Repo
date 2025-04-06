# Multiplayer Game Backend Documentation

## Overview

This Node.js module implements a real-time multiplayer game system using Socket.io. The code manages player matchmaking, game sessions, score tracking, and database integration for a quiz-style game where players compete by answering questions on various topics.

## Key Components

### Socket Management
- `setSocketIo`: Initializes the Socket.io instance for communication
- `setupGameEndHandler`: Sets up event listeners for game completion and disconnections

### Game State Management
- Maintains several state trackers:
  - `waitingQueue`: Queue of players waiting to be matched
  - `activePlayers`: Currently playing players
  - `gameScores`: Tracks scores and game state for active games
  - `socketIdToUserId` and `UserIdToSocketId`: Bidirectional mappings between socket IDs and user IDs

### Game Lifecycle Functions

#### `joinQueue`
- Adds a player to the waiting queue
- Handles cases where a player is already in queue or active game
- Maps socket ID to user ID

#### `leaveQueue`
- Removes a player from the waiting queue
- Prevents leaving during an active game

#### `startGame`
- Matches two players from the waiting queue
- Generates a unique game ID
- Selects a random topic
- Fetches questions for the selected topic
- Initializes game state with player information
- Emits game start event to players

#### `finishGame`
- Called when both players submit scores or time expires
- Saves game results to database
- Cleans up game state
- Implements a cooldown period before allowing new games

#### `saveSession`
- Saves game data to the database
- Determines winner based on scores

## Game Flow

1. Players join the waiting queue
2. When at least two players are in queue, `startGame` is called
3. Players receive questions and begin playing
4. Players submit scores through `game_end` event
5. When both players submit or time expires, `finishGame` is called
6. Results are saved and game state is cleaned up

## Error Handling

- Comprehensive error handling throughout
- Recovery mechanisms for various failure scenarios
- Player reconnection management

## Socket Events

| Event | Description |
|-------|-------------|
| `game_start` | Sent to players when a game begins |
| `queued` | Confirmation that a player has joined the queue |
| `game_end` | Received when a player submits their score |
| `disconnect` | Handled when a player disconnects |

## Database Integration

- Game sessions are saved to database
- Player IDs, game results, and winner information is recorded

## Timeouts and Limits

- Games automatically end after 135 seconds (2m 15s)
- 3-second cooldown between games
- Automatic cleanup of disconnected players

## API Endpoints

- `/joinQueue`: Adds a player to the waiting queue
- `/leaveQueue`: Removes a player from the waiting queue
