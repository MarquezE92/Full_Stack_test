import request from 'supertest';
import app from '../../app.ts';
import sequelize from '../db.ts';

describe('GET route', () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true })
  })

  it('should return status 200', async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toBe(200);
  });

  it('should return status 500 and an error message object on error', async () => {
    // Simulate an error condition (for example, by forcing an error in the database query)
    jest.spyOn(sequelize.models.User, 'findAll').mockRejectedValueOnce(new Error('Database error'));

    // Make the request
    const res = await request(app).get('/api/users');

    // Verify the response status code and error message
    expect(res.statusCode).toBe(500);
    expect(res.body).toEqual({ message: 'Database error' });
  });

  it('should accept a ?q= query parameter for search terms and search through every column of the CSV and return an object with the key "data" with an array of objects inside it', async () => {
    // Mock the user data in the database
    const mockUsers = [
      { name: 'John Doe', city: 'New York', country: 'USA', favorite_sport: 'Soccer' },
      { name: 'Alice Smith', city: 'Los Angeles', country: 'USA', favorite_sport: 'Basketball' },
    ];
    await sequelize.models.User.bulkCreate(mockUsers);

    // Make a request with a search query
    const searchTerm = 'york';
    const res = await request(app).get(`/api/users?q=${searchTerm}`);

    // Verify the response status code and the filtered users
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({data:[
      { name: 'John Doe', city: 'New York', country: 'USA', favorite_sport: 'Soccer', id:1 },
    ]});
  });
});