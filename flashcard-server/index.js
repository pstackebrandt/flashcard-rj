const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();


// -- MongoDB Connection we will use it in the future
let dbConnection;

async function connectToMongoDB() {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI, {});
        console.log('Connected to MongoDB at', new Date().toLocaleString());

        // Test a simple command
        const collections = await mongoose.connection.db.listCollections().toArray();
        if (collections.length === 0) {
            console.log('No collections found in the database.');
        } else {
            console.log('Collections:', collections);
        }

        return connection;
    } catch (err) {
        console.error('Failed to connect to MongoDB', err, ' at', new Date().toLocaleString());
        return null; // Return null if connection fails
    }
}

// 
(async () => {
    dbConnection = await connectToMongoDB();
    if (!dbConnection) {
        console.error('Exiting application due to failed database connection.');
        process.exit(1); // Exit the process with a non-zero status code
    }
})();

// Handle process termination signals to gracefully close the connection
process.on('SIGINT', async () => {
    if (dbConnection) {
        console.log('SIGINT received: closing MongoDB connection');
        await mongoose.disconnect();
    }
    process.exit(0);
});

// Close the connection by sending a SIGTERM signal
process.on('SIGTERM', async () => {
    if (dbConnection) {
        console.log('SIGTERM received: closing MongoDB connection');
        await mongoose.disconnect();
    }
    process.exit(0);
});

// Create Express app
const app = express();
// -- Middleware
app.use(express.json());
app.use(cors());

// Root Route
app.get('/', (req, res) => {
    res.send('Server is running...');
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
