const mongoose = require('mongoose');

async function mongoDbConnection(url) {
    try {
        await mongoose.connect(url);
        console.log("MongoDB Connected !!");
    } catch (error) {
        console.log("Error in connecting database:", error);   
    }
}

module.exports = {
    mongoDbConnection
}