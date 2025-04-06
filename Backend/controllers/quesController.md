# Topic Data Functions

This module provides functions for fetching topic and question data from a database.

## Functions

### `fetchTopicData(topicId)`

Fetches topic and question data for a specified topic ID.

#### Parameters
- `topicId` (string|number): The ID of the topic to fetch

#### Returns
- `Object`: Response object with the following properties:
  - `success` (boolean): Indicates if the operation was successful
  - `topicId` (string|number): The requested topic ID
  - `topic` (Array): Topic data retrieved from the database (if successful)
  - `questions` (Array): Associated questions for the topic (if successful)
  - `message` (string): Error message (if unsuccessful)
  - `error` (Object): Error object (if an exception occurred)

#### Example Response (Success)
```javascript
{
  success: true,
  topicId: "123",
  topic: [{ /* topic data */ }],
  questions: [{ /* question data */ }, { /* question data */ }]
}
```

#### Example Response (Failure)
```javascript
{
  success: false,
  message: "Topic or questions not found.",
  topicId: "123",
  topic: [],
  questions: []
}
```

### `getTopicData(req, res)`

Express route handler for debugging purposes. Calls `fetchTopicData()` and returns appropriate HTTP response.

#### Parameters
- `req` (Object): Express request object
- `res` (Object): Express response object

#### Returns
- HTTP 200 response with topic data (if successful)
- HTTP 404 response with error message (if unsuccessful)

## Dependencies

This module requires the following functions from the database configuration:
- `getTopicById`: Retrieves topic data by ID
- `getQuestionsById`: Retrieves questions associated with a topic ID

## Usage Example

```javascript
const { fetchTopicData } = require('./path/to/this/module');

// In an async function
const result = await fetchTopicData('topic123');
if (result.success) {
  console.log('Topic:', result.topic);
  console.log('Questions:', result.questions);
} else {
  console.error('Error:', result.message);
}
```

## Notes

- The `getTopicData` route handler can be removed as noted in the comments
- Error handling is implemented for both database retrieval failures and empty results
