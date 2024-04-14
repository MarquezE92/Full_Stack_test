import request from 'supertest';
import app from '../../app.ts';
import sequelize from '../db.ts';
import fs from 'fs';
import path from 'path';
import rimraf from 'rimraf';

describe('POST route', () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });

  afterAll(async () => {

    const uploadDir = path.join(__dirname, '../../uploads/');
    rimraf.sync(uploadDir);
  });

  it('should return status 200 and a success message upon successful file upload', async () => {

    const filePath = path.join(__dirname, 'test.csv');


    const csvData = `Name,City,Country,Favorite Sport
      John Doe,New York,USA,Soccer
      Alice Smith,Los Angeles,USA,Basketball`;


    fs.writeFileSync(filePath, csvData);


    const res = await request(app)
      .post('/api/files')
      .attach('file', filePath);


    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: 'The file was uploaded successfully.' });


    fs.unlinkSync(filePath);
  });
});