# Leaderboard Controller Documentation

## Overview
This module provides functionality to fetch and return leaderboard data for both single-player and two-player game modes.

## Functions

### `get_leaderBoard(req, res)`
Fetches and returns leaderboard data from the database.

#### Description
This asynchronous function retrieves leaderboard data for both single-player and two-player modes. It handles proper error responses and provides appropriate HTTP status codes based on the operation outcome.

#### Parameters
- `req` - Express request object
- `res` - Express response object

#### Returns
- `200 OK` - Returns a JSON object containing:
  - `message` - Success message
  - `leaderboard1` - Array of single-player leaderboard entries (empty array if no data)
  - `leaderboard2` - Array of two-player leaderboard entries (empty array if no data)
- `500 Internal Server Error` - If database operation fails, returns:
  - `message` - Error description
  - `error` - Detailed error message

#### Dependencies
- `getSinglePlayerLeaderboard()` - Function to retrieve single-player leaderboard data
- `getTwoPlayerLeaderboard()` - Function to retrieve two-player leaderboard data

## Example Response
```json
{
  "message": "Leaderboard fetched successfully!",
  "leaderboard1": [
    // Single-player leaderboard entries
  ],
  "leaderboard2": [
    // Two-player leaderboard entries
  ]
}
```

## Error Handling
The controller implements proper error handling with descriptive error messages and appropriate HTTP status codes.

## Notes
- The controller ensures empty arrays are returned rather than null values when no data is found
- Debug logging is commented out in the production code
