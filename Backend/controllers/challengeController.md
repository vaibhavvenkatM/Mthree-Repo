# Challenge Controller

This file contains controller functions for managing challenges in the application. It provides endpoints for creating new challenges and retrieving both user-specific and all challenges.

## Dependencies
```javascript
const { saveChallenge, getChallenge, getChallengebyPalyer } = require("../config/db_fun");
```

## Functions

### save_Challenge
Creates a new challenge in the system.

**Route Handler**: `POST /challenges` (implied)

**Authentication**: Required (uses `req.user.userId`)

**Request Body**:
- `que`: Question text
- `qo1`: Option 1
- `qo2`: Option 2
- `qo3`: Option 3
- `qo4`: Option 4
- `qans`: Correct answer

**Responses**:
- `201`: Challenge created successfully
- `400`: Missing required fields
- `500`: Server error

**Example Usage**:
```javascript
// POST /challenges
{
  "que": "What is the capital of France?",
  "qo1": "London",
  "qo2": "Paris",
  "qo3": "Berlin",
  "qo4": "Madrid",
  "qans": "Paris"
}
```

### show_challenge
Retrieves challenges from the system.

**Route Handler**: `GET /challenges` (implied)

**Authentication**: Required (uses `req.user.userId`)

**Responses**:
- `200`: Challenges fetched successfully
  - Returns both user-created challenges and all challenges
- `500`: Server error

**Response Format**:
```javascript
{
  "message": "Challenges fetched successfully!",
  "ChallengebyPlayer": [...], // Array of challenges created by the requesting user
  "Challenge": [...] // Array of all challenges
}
```

## Error Handling
Both functions include try-catch blocks to handle exceptions and return appropriate error messages and status codes.

## Export
```javascript
module.exports = { save_Challenge, show_challenge };
```
