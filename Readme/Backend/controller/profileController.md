# Profile Controller Documentation

## Overview
The `profileController.js` file contains functionality for retrieving user profile data. It exports a single controller function that aggregates various profile-related information.

## Functions

### `getProfile(req, res)`
An asynchronous controller function that fetches and returns profile data for the authenticated user.

#### Parameters
- `req` - Express request object containing the authenticated user information
- `res` - Express response object used to return the data or error response

#### Process Flow
1. Extracts the user ID from the request object
2. Initializes a data structure to hold profile information
3. Uses `Promise.all` to concurrently fetch different profile data components:
   - Pie chart data (`PiechartResult`)
   - Match count data (`CountMatch`)
   - Basic user information (`basicinfo`)
   - Daily streak information (`dailystreak`)
   - Longest streak information (`longeststreak`)
4. Returns all collected data in a JSON response with status 200 if successful
5. Returns appropriate error information with status 500 if any data fetch fails

#### Response Format
```json
{
  "PiechartResult_data": [],
  "CountMatch_data": [],
  "basicinfo_data": [],
  "dailystreak_data": 1,
  "longeststreak_data": 1
}
```

#### Error Handling
- Each promise is wrapped with individual error handlers to identify which function failed
- Errors include the source of the failure and the original error message
- All errors are logged to the console with user ID context

## Dependencies
The controller depends on the following functions imported from "../config/profile_fun":
- `PiechartResult` - Retrieves data for generating pie charts
- `basicinfo` - Retrieves basic user information
- `CountMatch` - Retrieves match counting information
- `dailystreak` - Retrieves information about the user's current streak
- `longeststreak` - Retrieves information about the user's longest streak

## Export
The file exports an object containing the `getProfile` function.