# Friendship Controller Documentation

This document outlines the controller functions related to user friendship management in the application.

## Overview

The friendship controller provides API endpoints to manage user relationships, including:
- Finding other users
- Sending friend requests
- Viewing received friend requests
- Accepting and rejecting friend requests
- Viewing current friends
- Removing friends

## Dependencies

The controller leverages database functions from the `../config/db_fun` module:

```javascript
const { 
    findUsers,
    addFriend,
    showFriendreq,
    acceptFriend,
    rejectFriend,
    displayFriend,
    removeFriend
} = require("../config/db_fun");
```

## API Endpoints

### Get Users

Retrieves a list of users excluding the requesting user.

```javascript
const Get_Users = async (req, res) => {
    const userid = req.user.userId;
    // Returns list of potential users to add as friends
}
```

- **Method**: GET
- **Auth Required**: Yes (userId from req.user)
- **Success Response**: 200 OK with array of user objects
- **Error Response**: 500 Internal Server Error

### Send Friend Request

Sends a friend request from the authenticated user to another user.

```javascript
const Send_FriendReq = async (req, res) => {
    const user1id = req.user.userId;
    const user2id = req.body.userId;
    // Sends friend request
}
```

- **Method**: POST
- **Auth Required**: Yes (userId from req.user)
- **Request Body**: `{ userId: "recipient_user_id" }`
- **Success Response**: 200 OK
- **Error Response**: 500 Internal Server Error

### Show Friend Requests

Returns a list of pending friend requests for the authenticated user.

```javascript
const Show_FriendReq = async(req, res) => {
    const userid = req.user.userId;
    // Returns list of friend requests
}
```

- **Method**: GET
- **Auth Required**: Yes (userId from req.user)
- **Success Response**: 200 OK with array of friend request objects
- **Error Response**: 500 Internal Server Error

### Accept Friend Request

Accepts a pending friend request.

```javascript
const Accept_FriendReq = async(req, res) => {
    const user1id = req.user.userId;
    const user2id = req.body.userId;
    // Accepts friend request
}
```

- **Method**: POST
- **Auth Required**: Yes (userId from req.user)
- **Request Body**: `{ userId: "requester_user_id" }`
- **Success Response**: 200 OK
- **Error Response**: 500 Internal Server Error

### Reject Friend Request

Declines a pending friend request.

```javascript
const Reject_FriendReq = async(req, res) => {
    const user1id = req.user.userId;
    const user2id = req.body.userId;
    // Rejects friend request
}
```

- **Method**: POST
- **Auth Required**: Yes (userId from req.user)
- **Request Body**: `{ userId: "requester_user_id" }`
- **Success Response**: 200 OK
- **Error Response**: 500 Internal Server Error

### Fetch Friends

Retrieves the list of friends for the authenticated user.

```javascript
const Fetch_Friends = async(req, res) => {
    const userid = req.user.userId;
    // Returns list of friends
}
```

- **Method**: GET
- **Auth Required**: Yes (userId from req.user)
- **Success Response**: 200 OK with array of friend objects
- **Error Response**: 500 Internal Server Error

### Remove Friend

Removes a user from the authenticated user's friend list.

```javascript
const Remove_Friend = async(req, res) => {
    const user1id = req.user.userId;
    const user2id = req.body.userId;
    // Removes friend relationship
}
```

- **Method**: POST
- **Auth Required**: Yes (userId from req.user)
- **Request Body**: `{ userId: "friend_user_id" }`
- **Success Response**: 200 OK
- **Error Response**: 500 Internal Server Error

## Error Handling

All endpoints include error handling with:
- Console logging of errors
- Appropriate HTTP status codes
- Error messages in response body

## Module Exports

```javascript
module.exports = { 
    Get_Users,
    Send_FriendReq,
    Show_FriendReq,
    Accept_FriendReq,
    Reject_FriendReq,
    Fetch_Friends,
    Remove_Friend,
}
```
