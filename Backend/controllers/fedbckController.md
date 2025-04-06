# Feedback Controller

This module handles the API endpoint for saving user feedback to the database.

## Overview

The `save_feedback` controller receives feedback data submitted by users, validates it, and stores it in the database using the `giveFeedback` function from the database configuration.

## Functions

### save_feedback

Processes incoming feedback submissions.

```javascript
const save_feedback = async (req, res) => {
  try {
    const data = req.body
    if (!data) {
      return res.status(400).json({ message: 'Please enter feedback' });
    }
    
    await giveFeedback(data.fedbck);
    
    res.status(201).json({ message: "Feedback submitted successfully!"});
    
  } catch (error) {
    console.error("Error sending Feedback:", error);
    res.status(500).json({ message: "Error sending Feedback:", error: error.message });
  }
};
```

#### Parameters

- `req`: The HTTP request object containing the feedback data in the request body
- `res`: The HTTP response object used to send back status and messages

#### Process

1. Extracts feedback data from request body
2. Validates that data exists
3. Calls the `giveFeedback` database function to store the feedback
4. Returns appropriate success or error responses

#### Response Codes

- `201`: Feedback successfully submitted
- `400`: Missing feedback data
- `500`: Server error during processing

## Dependencies

- `giveFeedback`: Database function imported from "../config/db_fun"

## Exports

- `save_feedback`: The feedback controller function
