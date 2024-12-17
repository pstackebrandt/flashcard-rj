const mongoose = require('mongoose');

beforeAll(async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            // depecated:
            //useNewUrlParser: true,
            //useUnifiedTopology: true
        });
        console.log('Test database connected');
    } catch (error) {
        console.error('Test database connection error:', error);
        throw error;
    }
});

afterAll(async () => {
    try {
        await mongoose.connection.close();
        console.log('Test database connection closed');
    } catch (error) {
        console.error('Error closing test database:', error);
        throw error;
    }
});