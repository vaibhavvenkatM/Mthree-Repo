# Feedback Controller Documentation

## Overview
This controller file manages the submission of user feedback to the database.

## Functions

### `save_feedback(req, res)`
An asynchronous controller function that processes and saves user feedback.

#### Parameters
- `req` - Express request object containing the feedback data in the request body
- `res` - Express response object used to return the operation status

#### Process Flow
1. Extracts the feedback data from the request body
2. Validates that feedback data is present
3. Calls `giveFeedback(data.fedbck)` to save the feedback to the database
4. Returns a success message with status 201 if successful
5. Returns error information with status 400 or 500 if the operation fails

#### Response Format
- Success (201):
  ```json
  {
    "message": "Feedback submitted successfully!"
  }
  ```
- Validation Error (400):
  ```json
  {
    "message": "Please enter feedback"
  }
  ```
- Server Error (500):
  ```json
  {
    "message": "Error sending Feedback:",
    "error": "[error message]"
  }
  ```

#### Error Handling
- Checks for missing feedback data and returns a 400 status code
- Catches any errors during database operations and returns a 500 status code
- Logs detailed error information to the console

## Dependencies
The controller depends on the following function imported from "../config/db_fun":
- `giveFeedback` - Saves user feedback to the database

## Export
The file exports an object containing the `save_feedback` function.