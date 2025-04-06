# Profile Controller Documentation

## Overview

This module contains the `getProfile` controller function that aggregates user profile data from multiple sources. The controller fetches various profile metrics and information in parallel to optimize performance.

## Function: `getProfile`

Asynchronously retrieves a comprehensive set of profile data for the authenticated user.

### Dependencies

```javascript
const { 
    PiechartResult,
    basicinfo,
    CountMatch,
    dailystreak,
    longeststreak
} = require("../config/profile_fun");
```

### Parameters

- `req`: Express request object containing user authentication data
- `res`: Express response object used to send the data back to the client

### Data Structure

The function returns a data object with the following structure:

```javascript
let data = {
    PiechartResult_data: [],    // Chart data visualization 
    CountMatch_data: [],        // Match statistics
    basicinfo_data: [],         // User profile information
    dailystreak_data: 1,        // Current daily streak count
    longeststreak_data: 1       // Longest achieved streak count
};
```

### Implementation Details

The function:
1. Extracts the user ID from the request object
2. Initializes a data structure to hold the results
3. Uses `Promise.all()` to execute all data fetching operations in parallel for improved performance
4. Handles errors by identifying which specific operation failed
5. Returns the aggregated data as a JSON response with HTTP status 200 on success
6. Returns an error message with HTTP status 500 on failure

### Error Handling

The function implements comprehensive error handling that:
- Identifies which specific data fetching operation failed
- Logs detailed error information to the console
- Returns a meaningful error response to the client

### Response Format

#### Success (HTTP 200)
```json
{
    "PiechartResult_data": [...],
    "CountMatch_data": [...],
    "basicinfo_data": [...],
    "dailystreak_data": 1,
    "longeststreak_data": 1
}
```

#### Error (HTTP 500)
```json
{
    "message": "Error fetching [source] data",
    "error": "Detailed error message"
}
```

## Usage

This controller is designed to be used as an Express route handler, typically with authentication middleware:

```javascript
router.get('/profile', authMiddleware, profileController.getProfile);
```
