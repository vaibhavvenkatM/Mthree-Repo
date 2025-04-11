# 🚀 Mthree Project - Frontend  

This is the **frontend** of the Mthree Project, built using **React (Vite) and Supabase**. The frontend is responsible for rendering the UI, managing user interactions, handling authentication, and communicating with the backend.

---
## 🛠 Tech Stack

### **Frontend Technologies**
- **React 19** – Modern UI library for building interactive user interfaces
- **React Router DOM** – Declarative routing for single-page applications
- **Vite** – Fast build tool and development server
- **MUI (Material UI)** – Component library for responsive, accessible UIs
- **Framer Motion** – Smooth animations and transitions
- **Recharts** – Declarative charts for data visualization
- **Axios** – HTTP client for API calls
- **Emotion** – CSS-in-JS styling with `@emotion/react` and `@emotion/styled`

---
## 🔥 Why We Chose React?  

### 🟢 **React**
1. **Component-Based Architecture**:  
   - Breaks UI into reusable components (e.g., Buttons, Forms, Cards).  
   - Easier to manage and scale.  

2. **Efficient Performance**:  
   - Uses a **Virtual DOM**, so only changed elements re-render.  
   - Faster UI updates compared to traditional DOM manipulations.  

3. **React Router for Navigation**:  
   - Allows **single-page application (SPA)** experience.  
   - No full-page reloads when switching pages.  

4. **State Management (React Context & Hooks)**:  
   - Centralized user authentication state using `useContext()`.  
   - Local component states managed with `useState()`.  

---


# 🏗️ Flow of the Application

This is how the **QUIZENA** frontend works step by step:

---

## 🔹 1. Application Entry Point (`index.html` & `main.jsx`)

### **1.1 `index.html` (Root HTML File)**
- Contains a `<div id="root"></div>` where React renders the entire application.
- Includes the `<script>` tag to load `main.jsx`.

### **1.2 `main.jsx` (React Entry Point)**
- Uses `createRoot(document.getElementById('root'))` to render the React application.
- Loads the `Approutes` component, which manages navigation within the app.

---

## 🔹 2. Routing & Page Rendering (`Approutes.jsx`)

- **React Router** handles navigation.
- **Protected routes** prevent unauthorized access.
- The app dynamically updates content **without reloading the page**.

---

## 🔹 3. Home Page (`Home.jsx`)

### **3.1 State Initialization**
- The `useLocation()` hook determines the current URL.
- `useState` is used for:
  - `showTitle` & `showButtons` (for animation effects).
  - `isSidebarOpen` (for toggling the sidebar menu).

### **3.2 Animation & Sidebar Handling**
- When the homepage loads:
  - **Title appears after 500ms** (`setTimeout(() => setShowTitle(true), 500)`).
  - **Buttons appear after 1200ms** (`setTimeout(() => setShowButtons(true), 1200)`).
- The sidebar automatically closes when the page changes (`useEffect` with `location.pathname`).

### **3.3 Logout Functionality**
- Clicking **"Log Out"** removes the authentication token from `localStorage`.

---

## 🔹 4. Sidebar Navigation

The sidebar allows users to navigate through different sections:

| Navigation Option  | Functionality |
|-------------------|--------------|
| 🏠 **Home** | Redirects to the home page. |
| ⚔️ **Enter Arena** | Takes the user to the game arena. |
| 👤 **Profile** | Displays user details. |
| 🤝 **Friends** | Allows managing friends and requests. |
| 🏆 **Leaderboard** | Shows ranking of players. |
| 📜 **Rules** | Displays game rules and instructions. |
| 📝 **Feedback** | Redirects to the feedback page. |

- The **sidebar opens and closes** using the `toggleSidebar` function.

---

## 🔹 5. Background Image & Welcome Message

- The background image is dynamically set using:
  ```jsx
  <div className="background" style={{ backgroundImage: `url(${loginImage})` }}>
  ```
- The welcome message is personalized using:
  ```jsx
  localStorage.getItem("username").toUpperCase()
  ```
- This displays:
  ```
  WELCOME "USERNAME" TO THE BATTLES OF THE QUIZ LORDS
  ```

---

## 🔹 6. Hover Buttons for Challenges

- Two buttons:
  1. **Create Challenge** → Redirects to `/challenge`
  2. **Show Challenges** → Redirects to `/showchallenge`

- Button styles change on hover using the `HoverButton` component:
  ```jsx
  className={`button ${hover ? "hover" : ""}`}
  ```

---

# 🏗️ Lets discuss more

### 1️⃣ **User Authentication (Login & Signup)**  
- Users land on `Login.jsx` or `Registration.jsx`.  
- Supabase handles authentication.  

## 🚦 Routing & Authentication (AppRoutes.jsx)  

Routing is handled in the `AppRoutes.jsx` file, which defines all the paths in the app using **React Router**.

### 🔐 Authentication Logic
- The app stores an **authentication token** in `localStorage`.  
- `getCookie()` checks if the user is logged in.  
- `ping()` verifies if the token is valid by making a backend request.  
- If the token is **expired**, it is removed from storage.  


- Uses `react-router-dom` for navigation.  
- **Protected routes** prevent unauthenticated access.  

### 3️⃣ **Game & Challenges Flow**  
- Users enter **Arena (`Arena.jsx`)** to start a game (single player or multi-player).  
- There is a create challenge functionality in home page which allow to add sample question. We can view them in  **Show Challenges (`Challenges.jsx`)**.  
- Users take a quiz (`Quiz1.jsx`, `Quiz2.jsx`), depending upon single player or multi-player game.  
- Scores update in **Leaderboard (`Leaderboard.jsx`)**.  

### 4️⃣ **Profile & Friends**  
### 1. User Profile
- View user details including username and points.
- Edit profile information (future enhancement).
- Access friends, leaderboard, and game statistics.

### 2. Friends & Connections
The Friends system allows users to:
- View their current friends list.
- Accept or reject pending friend requests.
- Search for new users and send friend requests.
- Remove existing friends.

#### Friends System Breakdown:
- **My Friends:** Displays all added friends along with their points.
- **Pending Requests:** Shows friend requests sent by others, allowing users to accept or reject them.
- **Add Friend:** Allows searching for new players and sending friend requests. 

### 4️⃣ **Feedback System**  
 
1. **User enters feedback** in the provided text area.  
2. **Feedback is submitted** to the backend API (`/feedback`).  
3. **Success message appears** upon successful submission.  
4. **User is redirected** to the home page after a short delay.  
5. **Error message appears** if submission fails.  

### 🚀 Implementation  

#### **Frontend - `Feedback.js`**  
- Uses **React hooks (`useState`, `useNavigate`)** to manage state and navigation.  
- Sends a `POST` request with the user's feedback to the backend.  
- Handles success and error states with appropriate messages.  
- Uses `setTimeout` to redirect users after successful submission.  

---
