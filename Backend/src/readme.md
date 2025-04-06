A powerful, real-time multiplayer quiz application backend built with Express.js and Socket.io.

## 🚀 Features

- **Real-time Multiplayer:** Challenge friends to quiz battles using Socket.io
- **Authentication System:** Secure user registration and login
- **Multiple Quiz Types:** Support for different quiz formats
- **Leaderboards:** Track top performers
- **Friend System:** Connect with other quiz enthusiasts
- **Challenge System:** Create and participate in custom challenges
- **User Profiles:** Customize your quiz experience
- **Feedback System:** Help us improve with your suggestions

## 📋 Prerequisites

- Node.js (v14+)
- MongoDB database
- npm or yarn

## ⚙️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/quiz-master.git
   cd quiz-master
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Start the server:
   ```bash
   npm start
   ```

## 🔌 API Endpoints

| Route | Description |
|-------|-------------|
| `/auth` | User authentication (register, login) |
| `/leaderboard` | Global and friend leaderboards |
| `/quiz1` | Standard quiz operations |
| `/quiz2` | Multiplayer quiz operations |
| `/challenge` | Create and manage challenges |
| `/friend` | Friend system operations |
| `/profile` | User profile management |
| `/feedback` | User feedback submission |
| `/ping` | Server health check |

## 🎮 Multiplayer Features

The application uses Socket.io to provide real-time multiplayer quiz experiences:

- Live opponent matching
- Real-time score updates
- Game state synchronization
- Disconnection handling

## 🧩 Architecture

The backend follows a modular architecture:
- Express.js for RESTful API endpoints
- Socket.io for real-time communications
- MongoDB for data persistence
- MVC pattern for code organization

## 🛠️ Development

For development mode with auto-restart:
```bash
npm run dev
```

## 🔒 Security

- CORS enabled for cross-origin requests
- JWT authentication for protected routes
- Environment variable management with dotenv

