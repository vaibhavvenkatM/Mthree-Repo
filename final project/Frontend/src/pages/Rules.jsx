import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/Rules.css";

// Import assets
import logo from "@images/swords.jpg";
import rulesBg from "@images/rulesbg.jpg";
import scrollBg from "@images/scroll.png";

const Rules = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const token = localStorage.getItem("token");
    if (!token){
      navigate("/login");
      return;
    }
    try {
      const response = await fetch("http://localhost:5000/auth/logout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (response.status === 200) {
        console.log("Logout logged successfully");
      } else if (response.status === 401 || response.status === 403) {
        console.warn("Token expired or invalid, still clearing localStorage");
      } else {
        console.warn("Unexpected logout response:", response.status);
      }
    } catch (error) {
      console.error("Logout request failed:", error);
    } finally {
      // Clear the token in all cases
      localStorage.removeItem("token");
      navigate("/login"); 
    }
  };  

  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    console.log("Rules Mounted");
    return () => console.log("Rules Unmounted");
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="container">
      {isSidebarOpen && <div className="overlay" onClick={() => setSidebarOpen(false)}></div>}

      <header className="navbar">
        <button onClick={toggleSidebar} className="menu-button">☰</button>
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="navbar-title">QUIZENA</h1>
        <nav className="nav">
          <button className="signup-button" onClick={handleLogout} title="">Log Out</button>
        </nav>  
      </header>

      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <img src={logo} alt="Profile" className="profile-img" />
          <h3>{localStorage.getItem("username")}</h3>
        </div>
        <nav>
          <ul className="nav-list">
            <li>
              <Link to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`}>
                <span className="icon">🏠</span> Home
              </Link>
            </li>
            <li>
              <Link to="/arena" className={`nav-link ${location.pathname === "/dashboard" ? "active" : ""}`}>
                <span className="icon">⚔️</span> Enter Arena
              </Link>
            </li>
            <li>
              <Link to="/profile" className={`nav-link ${location.pathname === "/profile" ? "active" : ""}`}>
                <span className="icon">👤</span> Profile
              </Link>
            </li>
            <li>
              <Link to="/friends" className={`nav-link ${location.pathname === "/friends" ? "active" : ""}`}>
                <span className="icon">🤝 </span>Friends
              </Link>
            </li>
            <li>
              <Link to="/leaderboard" className={`nav-link ${location.pathname === "/leaderboard" ? "active" : ""}`}>
                <span className="icon">🏆</span> Leaderboard
              </Link>
            </li>
            <li>
              <Link to="/rules" className={`nav-link ${location.pathname === "/rules" ? "active" : ""}`}>
                <span className="icon">📜</span> Rules
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <Box sx={{ backgroundImage: `url(${rulesBg})` }} className="main-content">
        <Box className="content-overlay">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: "easeOut" }}>
            <Box sx={{ backgroundImage: `url(${scrollBg})` }} className="scroll-box">
              <Typography variant="h3" className="scroll-title">RULES</Typography>

              <Box className="rule-list">
                {[
                  "Players join a queue and wait for their turn.",
                  "The first two players in the queue play against each other.",
                  "Each game consists of X questions (e.g., 5-10).",
                  "Players take turns answering questions, with 30 seconds to answer each.",
                  "1 point for each correct answer, 0 points for incorrect answers.",
                  "The player with the most points wins.",
                  "To participate, players must stay in the queue, canceling removes them.",
                  "No cheating, and good sportsmanship is required."
                ].map((rule, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, x: -20 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 0.8, delay: 0.2 * index }}
                  >
                    <Typography variant="body1" className="rule-item">
                      {index + 1}. {rule}
                    </Typography>
                  </motion.div>
                ))}
              </Box>
            </Box>
          </motion.div>
        </Box>
      </Box>
    </div>
  );
};

export default Rules;
