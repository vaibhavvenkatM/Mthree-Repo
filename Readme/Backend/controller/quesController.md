# Topic & Question Controller Documentation

This module is responsible for retrieving topic and question data from the database using the provided topic ID.

---

## 🔧 Dependencies
```js
const { getTopicById, getQuestionsById } = require("../config/db_fun");
```

---



## 📥 Functions

### `fetchTopicData(topicId)`
Fetches topic and question data based on a given `topicId`:
- Calls `getTopicById(topicId)` to get topic metadata.
- Calls `getQuestionsById(topicId)` to get associated questions.
- Returns a structured response with `success`, `topic`, and `questions`.

#### Returns:
```js
{
    success: true | false,
    topicId: string,
    topic: [...],       // Topic metadata
    questions: [...]    // Array of questions
}
```

Returns `success: false` if topic or questions are not found, or if an error occurs.

---

### `getTopicData(req, res)`
Express route handler (mainly for debugging) to fetch topic data:
- Calls `fetchTopicData()` without a `topicId`.
- Responds with HTTP `200` on success, `404` on failure.

---

## 🔁 Error Handling
- Logs descriptive error messages to the console.
- Returns user-friendly messages on failure.

---

## 📦 Exported Functions
```js
module.exports = {
  getTopicData,
  fetchTopicData
};
```
