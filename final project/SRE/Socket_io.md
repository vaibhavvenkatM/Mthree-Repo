# Real-Time Communication with Socket.IO in the Multiplayer Quiz Game App

## Overview

This document explains how **Socket.IO** was integrated into our **Real-Time Multiplayer Quiz Game App** to enable seamless, real-time interactions between players. The goal was to create a dynamic experience where users could join live quiz matches, answer questions simultaneously, and view results instantly—all made possible through bi-directional, event-driven communication.

---

## What is Socket.IO?

**Socket.IO** is a powerful JavaScript library that enables real-time, two-way communication between the server and the client. It is built on top of WebSockets but includes fallbacks (like long-polling) for environments where WebSockets are not supported.

### Features:
- Bi-directional, real-time communication
- Built-in fallback options
- Event-based architecture
- Room and namespace support for isolated communication
- Auto-reconnection and disconnection handling

---

## Why We Used Socket.IO

In our multiplayer quiz game, we needed a mechanism to:
- Match players in real time as they join
- Synchronize question delivery to all players simultaneously
- Enable instant answer submission and feedback
- Create isolated game sessions for each match

Socket.IO enabled all of these features through its low-latency communication and room-based architecture.

---

## Socket.IO in Action — Project Implementation

### 🖥️ Backend (Node.js + Express)

We initialized a Socket.IO server alongside our Express backend. As users connected, they were added to a queue. When two players were available:
- A new game room was created using a unique `sessionId`
- Both players were assigned to this room
- The quiz session started and events like `startGame`, `nextQuestion`, and `submitAnswer` were emitted

Here's a snippet from our code:
```js
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const { v4: uuidv4 } = require('uuid');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" }
});

let playerQueue = [];

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);
  playerQueue.push(socket);

  if (playerQueue.length >= 2) {
    const player1 = playerQueue.shift();
    const player2 = playerQueue.shift();
    const sessionId = uuidv4();

    player1.join(sessionId);
    player2.join(sessionId);

    io.to(sessionId).emit('startGame', { sessionId });
  }

  socket.on('submitAnswer', ({ sessionId, answer }) => {
    // Process and evaluate answer
    io.to(sessionId).emit('answerResult', { correct: true }); // example
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});
```
And how the frontend communicates with that:
```js
import { io } from "socket.io-client";
const socket = io("http://localhost:5000");

useEffect(() => {
  socket.on("startGame", ({ sessionId }) => {
    // Store sessionId and navigate to game screen
  });

  socket.on("answerResult", ({ correct }) => {
    // Show result to user
  });
}, []);
```
This approach allowed us to keep the UI responsive and update the game state in real time.
<hr>

## Features Powered by Socket.IO
🔁 Real-Time Player Matching
Instantly matches two players and starts a session using UUIDs.

🧠 Synchronized Questions
All players receive the same question at the same time, ensuring fairness.

⚡ Instant Feedback
Players receive real-time feedback on their submitted answers.

🔐 Session Isolation
Each match runs in a separate Socket.IO room, avoiding data mix-up.

🔄 Event-Driven Updates
Game states (questions, answers, results) are managed through custom events.