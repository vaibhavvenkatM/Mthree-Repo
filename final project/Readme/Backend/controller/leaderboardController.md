# Leaderboard Controller Documentation

## Overview
This controller file manages the retrieval of leaderboard data for both single-player and two-player game modes.

## Functions

### `get_leaderBoard(req, res)`
An asynchronous controller function that fetches leaderboard data from the database and returns it in a structured format.

#### Parameters
- `req` - Express request object
- `res` - Express response object used to return the data or error response

#### Process Flow
1. Calls `getSinglePlayerLeaderboard()` to retrieve data for the single-player leaderboard
2. Calls `getTwoPlayerLeaderboard()` to retrieve data for the two-player leaderboard
3. Returns both sets of data in a JSON response with status 200 if successful
4. Returns error information with status 500 if database operations fail

#### Response Format
```json
{
  "message": "Leaderboard fetched successfully!",
  "leaderboard1": [], // Single-player leaderboard data
  "leaderboard2": []  // Two-player leaderboard data
}
```

#### Error Handling
- Catches any errors during database operations
- Logs detailed error information to the console
- Returns a 500 status code with error message to the client

## Dependencies
The controller depends on the following functions imported from "../config/db_fun":
- `getSinglePlayerLeaderboard` - Retrieves leaderboard data for single-player mode
- `getTwoPlayerLeaderboard` - Retrieves leaderboard data for two-player mode

## Notes
- Contains commented debug logging that is marked for future removal
- Returns empty arrays instead of null when no leaderboard data is available

## Export
The file exports an object containing the `get_leaderBoard` function.