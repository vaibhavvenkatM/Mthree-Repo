# Friend Controller Documentation

## Overview
This controller file manages user friendship operations, including sending, accepting, and rejecting friend requests, as well as displaying and removing friends.

## Functions

### `Get_Users(req, res)`
Retrieves users that can be added as friends.

#### Parameters
- `req` - Express request object containing the authenticated user information
- `res` - Express response object

#### Process Flow
1. Extracts the user ID from the request object
2. Calls `findUsers(userid)` to retrieve potential friends
3. Returns the data in a JSON response with status 200 if successful
4. Returns error information with status 500 if the operation fails

### `Send_FriendReq(req, res)`
Sends a friend request to another user.

#### Parameters
- `req` - Express request object containing the authenticated user ID and target user ID
- `res` - Express response object

#### Process Flow
1. Extracts the sender's user ID from the request object
2. Extracts the recipient's user ID from the request body
3. Calls `addFriend(user1id, user2id)` to create a friend request
4. Returns a success message with status 200 if successful
5. Returns error information with status 500 if the operation fails

### `Show_FriendReq(req, res)`
Retrieves pending friend requests for the authenticated user.

#### Parameters
- `req` - Express request object containing the authenticated user information
- `res` - Express response object

#### Process Flow
1. Extracts the user ID from the request object
2. Calls `showFriendreq(userid)` to retrieve pending friend requests
3. Returns the data in a JSON response with status 200 if successful
4. Returns error information with status 500 if the operation fails

### `Accept_FriendReq(req, res)`
Accepts a pending friend request.

#### Parameters
- `req` - Express request object containing the authenticated user ID and requester's user ID
- `res` - Express response object

#### Process Flow
1. Extracts the recipient's user ID from the request object
2. Extracts the requester's user ID from the request body
3. Calls `acceptFriend(user1id, user2id)` to accept the friend request
4. Returns a success message with status 200 if successful
5. Returns error information with status 500 if the operation fails

### `Reject_FriendReq(req, res)`
Rejects a pending friend request.

#### Parameters
- `req` - Express request object containing the authenticated user ID and requester's user ID
- `res` - Express response object

#### Process Flow
1. Extracts the recipient's user ID from the request object
2. Extracts the requester's user ID from the request body
3. Calls `rejectFriend(user1id, user2id)` to reject the friend request
4. Returns a success message with status 200 if successful
5. Returns error information with status 500 if the operation fails

### `Fetch_Friends(req, res)`
Retrieves the list of friends for the authenticated user.

#### Parameters
- `req` - Express request object containing the authenticated user information
- `res` - Express response object

#### Process Flow
1. Extracts the user ID from the request object
2. Calls `displayFriend(userid)` to retrieve the user's friends
3. Returns the data in a JSON response with status 200 if successful
4. Returns error information with status 500 if the operation fails

### `Remove_Friend(req, res)`
Removes a user from the authenticated user's friends list.

#### Parameters
- `req` - Express request object containing the authenticated user ID and friend's user ID
- `res` - Express response object

#### Process Flow
1. Extracts the user ID from the request object
2. Extracts the friend's user ID from the request body
3. Calls `removeFriend(user1id, user2id)` to remove the friendship
4. Returns a success message with status 200 if successful
5. Returns error information with status 500 if the operation fails

## Dependencies
The controller depends on the following functions imported from "../config/db_fun":
- `findUsers` - Retrieves potential friends
- `addFriend` - Creates a friend request
- `showFriendreq` - Retrieves pending friend requests
- `acceptFriend` - Accepts a friend request
- `rejectFriend` - Rejects a friend request
- `displayFriend` - Retrieves the user's friends
- `removeFriend` - Removes a friendship

## Error Handling
- Each function includes dedicated error handling
- All errors are logged to the console with relevant user IDs for context
- Errors return a 500 status code with descriptive messages

## Export
The file exports all seven friend management functions.