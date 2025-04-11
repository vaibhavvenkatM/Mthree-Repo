# Supabase Integration in the Quiz Game Application

## How we set up Supabase (From Scratch)

1. **Created a Supabase Project**  
   - Go to [https://supabase.com](https://supabase.com)  
   - Signed up and created a new project with a name and password  
   - Copied the **project URL** and its **anon/public API key**

2. **Created Tables in SQL Editor**  
   Used the Supabase SQL Editor to define tables.

3. **Connected from Node.js**
   - Installed PostgreSQL client:
     ```bash
     npm install postgres dotenv
     ```
   - Added the database URL in `.env`:
     ```env
     DATABASE_URL=postgresql://<username>:<password>@<host>:<port>/<database>
     ```
   - Initialized connection in `db.js`:
     ```js
     import postgres from "postgres";
     import dotenv from "dotenv";

     dotenv.config();

     const sql = postgres(process.env.DATABASE_URL, { ssl: 'require' });

     export default sql;
     ```

---

##  How It’s Used in This Project

###  Environment Configuration

Sensitive database credentials are stored in a `.env` file and loaded securely with `dotenv`.

###  Key Files

- `config/db.js` — Handles DB connection  
- `config/db_fun.js` — Contains DB utility functions (user, quiz, responses, leaderboard)

---

##  App Communication with Supabase

The app uses the `postgres` package’s template literals to safely interact with Supabase. Example:

```js
const getUser = async (email) => {
  return sql`SELECT * FROM users WHERE email = ${email}`;
};
```
These are called in route controllers such as authController.js, quiz1Controller.js, and leaderboardController.js
<hr>

## Why Supabase?
✅ Zero DB Setup – Managed PostgreSQL
✅ Real-time – Optional subscriptions
✅ Scalable – For devs and production
✅ Secure – SSL & row-level policies
✅ Developer Friendly – Intuitive tools and SQL Editor
✅ Free Tier – Great for academic & student projects
<hr>

## Supabase Integration Flowchart
![](https://github.com/rhearobinson19/Quizena/blob/master/Images/supabase.jpeg)

<br>

## ER diagrams
![](https://github.com/rhearobinson19/Quizena/blob/master/Images/er1.png)
![](https://github.com/rhearobinson19/Quizena/blob/master/Images/er2.png)
![](https://github.com/rhearobinson19/Quizena/blob/master/Images/er3.png)
<br>

**Supabase helped us streamline database operations in our project, letting the team focus on building impactful features. Its ease of use and robust capabilities made it the ideal choice for our full-stack multiplayer quiz game.**