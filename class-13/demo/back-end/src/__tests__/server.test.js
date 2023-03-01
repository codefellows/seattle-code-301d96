'use strict';

// this is the testing file
// look at what is being tested
// don't make any changes to this file

const mockingGoose = require('mocking-goose');
jest.mock('mongoose', () => mockingGoose);
const supertest = require('supertest');
const app = require('../server.js');
const client = supertest(app.server);
const Snack = require('../models/snack');

describe('The Server', () => {

  async function createSnack() {

    const data = {
      name: 'Snickers',
      description: 'Frozen, please',
      rating: 10
    };

    const response = await client.post('/snacks').send(data);

    expect(response.status).toEqual(200);

    return response.body;
  }

  it('can create a snack', async () => {

    const snack = await createSnack();
    expect(snack._id).not.toBeNull();
    expect(snack.name).toBe('Snickers');
    expect(snack.description).toBe('Frozen, please');
    expect(snack.rating).toBe(10);

  });

  it('can get a single snack', async () => {

    const snack = await createSnack();

    const id = snack._id;
    const response = await client.get(`/snacks/${id}`);

    expect(response.status).toEqual(200);
    expect(response.body._id).toEqual(id);
    expect(response.body.name).toEqual(snack.name);
    expect(response.body.description).toEqual(snack.description);
    expect(response.body.rating).toEqual(snack.rating);
  });

  it('can get all snacks', async () => {

    await Snack.deleteMany({});

    for (let i = 1; i <= 5; i++) {
      await createSnack();
    }

    const response = await client.get(`/snacks`);
    const snacks = response.body;

    expect(response.status).toEqual(200);
    expect(snacks.length).toBe(5);
  });

  it('can update a snack', async () => {

    const snack = await createSnack();

    const id = snack._id;

    const updateData = {
      name: snack.name,
      rating: snack.rating,
      description: 'Seriously, frozen Snickers are superior.'
    };

    const url = '/snacks/' + id;

    const response = await client.put(url).send(updateData);
    expect(response.status).toEqual(200);
    expect(response.body._id).toEqual(id);
    expect(response.body.name).toEqual(snack.name);
    expect(response.body.description).toEqual(snack.description);
    expect(response.body.rating).toEqual(snack.rating);

  });

  it('can delete a snack', async () => {

    const snack = await createSnack();
    const id = snack._id;

    const response = await client.delete(`/snacks/${id}`);
    expect(response.status).toEqual(200);

    const getResponse = await client.get(`/snacks/${id}`);
    expect(getResponse.body._id).toBeUndefined();
  });

  it('properly sends a 404 on an unknown route', async () => {
    const response = await client.get('/nothing');
    expect(response.status).toBe(404);
  });

  it('properly sends a 500 when an error occurs', async () => {
    const data = {};
    const response = await client.post('/snacks').send(data);
    expect(response.status).toBe(500);
  });

});
