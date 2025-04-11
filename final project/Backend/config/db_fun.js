const { postgres } = require("./db");

// Function to create a user
const createUser = async (username, email, hashedPassword) => {
    return postgres`
        INSERT INTO users(username, email, password)
        VALUES (${username}, ${email}, ${hashedPassword})
        RETURNING id, username, email;
    `;
};

// Function to find user by email
const findUserByUsername = async (username) => {
    return postgres`
        SELECT * FROM users
        WHERE username = ${username};
    `;
};

const findUserByEmail = async (email) => {
    return postgres`
        SELECT * FROM users
        WHERE email = ${email};
    `;
};

// Function to Log LastLogin Date
const update_log_date = async(userid,date)=>{
    await postgres`
        UPDATE lastlogin
        SET date=${date}
        WHERE userid=${userid};    
    `
}

// Function to get TopicDetails
const getTopicById = async (topicId) => {
    return postgres`
        SELECT * FROM topics
        WHERE id = ${topicId};
    `;
}

// Function to get QuestionDetails
const getQuestionsById = async (topicId) => {
    return postgres`
        SELECT * FROM queoptn
        WHERE topic_id = ${topicId};
    `;
}

// get single Player Leaderboard
const getSinglePlayerLeaderboard =async() =>{
    return postgres`
        SELECT uh.userid, u.username, uh.total, uh.points
        FROM "userhistory1" uh
        JOIN "users" u ON uh.userid = u.id
        ORDER BY uh.points DESC;
    `;
}

// get Two Player Leaderboard
const getTwoPlayerLeaderboard =async() =>{
    return postgres`
        SELECT uh.userid, u.username, uh.points, uh.win, uh.loss, uh.draw 
        FROM "userhistory2" uh
        JOIN "users" u ON uh.userid = u.id
        ORDER BY uh.points DESC, uh.win DESC;
    `;
}

// Save Single Player Data
const saveSinglePlayerSession=async (gameId, playerid, result) =>{
    await postgres`
        INSERT INTO sessionspec1 (gameid, userid, result) 
        VALUES (${gameId}, ${playerid}, ${result});
    `;
}

// Save Two Player Data
const saveTwoPlayerSession=async (gameId, player1, player2, result) =>{
    await postgres`
        INSERT INTO sessionspec2 (game_id, user1id, user2id, result) 
        VALUES (${gameId}, ${player1}, ${player2}, ${result});
    `;
}

//saving new Challenge
const saveChallenge = async (userid,que,qo1,qo2,qo3,qo4,qans) =>{
    await postgres`
        INSERT INTO createchallenge (que, qo1,qo2,qo3,qo4,qans,userid) 
        VALUES (${que}, ${qo1}, ${qo2}, ${qo3} , ${qo4} , ${qans} , ${userid});
    `;
}

// Fetch existing Challenges
const  getChallenge = async ()=>{
    return postgres`
        SELECT * FROM createchallenge ORDER BY created_at;
    `;
}

// Fetch Challenege by a Player
const  getChallengebyPlayer = async (userid)=>{
    return await postgres`
        SELECT * FROM createchallenge WHERE userid=${userid};
    `;
}

// Find Users to make them friend
const findUsers = async (userid) => {
    return await postgres`
        SELECT u.id , u.username , uh.points
        FROM "userhistory2" uh
        JOIN "users" u ON uh.userid = u.id 
        JOIN "frienddisplay" f on u.id = f.user2id
        where f.isbool = 0 and f.user1id = ${userid}
        ORDER by u.id;
    `;
};

// Send friend req from user1 to user2
const addFriend = async (userid1,userid2) =>{
    await postgres`
        INSERT INTO friendreq (user1id,user2id) 
        VALUES (${userid1} , ${userid2});
    `;
    await postgres`
        UPDATE frienddisplay
            SET isbool = 1
            WHERE user1id=${userid1} and user2id = ${userid2};
    `;
}

// Show friend res for user
const showFriendreq = async (userid1) =>{
    return await postgres`
        Select u.id , u.username 
        from friendreq fr 
        Join users u on u.id = fr.user1id 
        where fr.user2id = ${userid1};
    `;
}

// Accept Friend Req
const acceptFriend = async (userid1,userid2) => {
    await postgres`
        INSERT INTO friend (user1id,user2id) 
        VALUES (${userid1} , ${userid2});
    `;
    await postgres`
        INSERT INTO friend (user1id,user2id) 
        VALUES (${userid2} , ${userid1});
    `;
    await postgres`
        UPDATE frienddisplay
            SET isbool = 1
            WHERE user1id=${userid1} and user2id = ${userid2};
    `;
    await postgres`
        UPDATE frienddisplay
            SET isbool = 1
            WHERE user1id=${userid2} and user2id = ${userid1};
    `;
    await postgres`
        DELETE FROM friendreq
        WHERE user1id=${userid2} and user2id = ${userid1};
`;
}

// User1 rejects Friend Req for user2
const rejectFriend = async(userid1,userid2) =>{
    await postgres`
         DELETE FROM friendreq
         WHERE user1id=${userid2} and user2id = ${userid1};
    `;
    await postgres`
        UPDATE frienddisplay
            SET isbool = 0
            WHERE user1id=${userid2} and user2id = ${userid1};
    `;
}

// Fetch Friends
const displayFriend = async (userid1) => {
    return await postgres`
        Select u.id, u.username, uh.points 
        from users u 
        join friend f on f.user2id = u.id 
        join userhistory2 uh on uh.userid= u.id 
        where f.user1id =${userid1};
    `;
}

// Remove user2 from friend
const removeFriend = async (userid1,userid2) =>{
    await postgres`
         DELETE FROM friend
         WHERE user1id=${userid2} and user2id = ${userid1};
    `;
    await postgres`
         DELETE FROM friend
         WHERE user1id=${userid1} and user2id = ${userid2};
    `;

    await postgres`
        UPDATE frienddisplay
            SET isbool = 0
            WHERE user1id=${userid1} and user2id = ${userid2};
    `;
    await postgres`
        UPDATE frienddisplay
            SET isbool = 0
            WHERE user1id=${userid2} and user2id = ${userid1};
    `;
}

// Insert a Feedback
const giveFeedback=async (fedbck) =>{
    await postgres`
        INSERT INTO feedback (fedbck) 
        VALUES (${fedbck});
    `;
}

module.exports = { 
    createUser,
    findUserByUsername,
    update_log_date,
    getTopicById,
    getQuestionsById,
    findUserByEmail,
    getSinglePlayerLeaderboard,
    getTwoPlayerLeaderboard,
    saveSinglePlayerSession,
    saveTwoPlayerSession,
    saveChallenge,
    getChallenge,
    getChallengebyPlayer,
    findUsers,
    addFriend,
    acceptFriend,
    showFriendreq,
    rejectFriend,
    removeFriend,
    displayFriend,
    giveFeedback

 };