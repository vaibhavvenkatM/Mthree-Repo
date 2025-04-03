const express = require("express");
const { authenticateUser } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", authenticateUser, (req, res)=>{
    console.log(`${req.user.userId} pinged`);
    res.status(200).json({
        msg:"Valid token",
    });
});

module.exports = router;