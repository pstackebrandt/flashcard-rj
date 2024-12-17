const request = require('supertest');
const { app } = require('../index');

describe('API Endpoints', () => {
    describe('GET /', () => {
        it('should return server running message', async () => {
            const res = await request(app)
                .get('/')
                .expect(200);
            
            expect(res.text).toBe('Server is running...');
        });
    });

    describe('GET /status', () => {
        it('should return server status', async () => {
            const res = await request(app)
                .get('/status')
                .expect(200);
            
            expect(res.body).toHaveProperty('server', 'running');
            expect(res.body).toHaveProperty('database');
            expect(res.body).toHaveProperty('timestamp');
        });
    });
}); 