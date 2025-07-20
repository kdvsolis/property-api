const request = require('supertest');
const express = require('express');
const app = express();
const propertyRoutes = require('../src/routes/property.routes');

app.use(express.json());
app.use('/api', propertyRoutes);

describe('Property API', () => {
  it('should add a new property', async () => {
    const res = await request(app)
      .post('/api/properties')
      .send({
        address: '123 Test St',
        suburb: 'Testville',
        price: 500000,
        description: 'Nice house'
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body.message).toBe('Property added successfully');
  });

  it('should search properties', async () => {
    const res = await request(app).get('/api/properties/search?suburb=Testville');
    expect(res.statusCode).toEqual(200);
    expect(res.body.properties[0]).toHaveProperty('address');
    expect(res.body.properties[0]).toHaveProperty('comparisonToAvg');
  });
});
