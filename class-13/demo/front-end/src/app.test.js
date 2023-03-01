/*
  Test Requirements from the UI:

  1. For all delete buttons:
     a. Must have this prop: data-testid={`delete-button-${item.name}`}
  2. The add item form must have this prop: data-testid="add-form"
  3. The add item form name field must have this prop: data-testid="add-form-name"
  4. The add item form description field must have this prop: data-testid="add-form-description"
  5. The add item form must have this prop: data-testid="add-form"
*/

import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import faker from 'faker';

import App from './App';

// ----- MOCK SERVER ------- //

let snacks = [];

const server = setupServer(

  rest.get(`*/snacks`, (req, res, ctx) => {
    return res(ctx.json(snacks));
  }),

  rest.post(`*/snacks`, (req, res, ctx) => {
    const item = req.body;
    item._id = Math.random();
    snacks.push(item);
    return res(ctx.json(item));
  }),

  rest.put(`*/snacks/:id`, (req, res, ctx) => {
    const item = req.body;
    const id = parseFloat(req.params.id);
    snacks = snacks.map(i => i._id === id ? item : i);
    return res(ctx.json(item));
  }),

  rest.delete(`*/snacks/:id`, (req, res, ctx) => {
    const id = parseFloat(req.params.id);
    snacks = snacks.filter(item => item._id !== id);
    return res(null);
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

// ----- TESTS ------- //
test('adds an item', async () => {
  render(<App />);

  const form = screen.getByTestId("add-form");
  const name = screen.getByTestId("add-form-name");
  const description = screen.getByTestId("add-form-description");
  const rating = screen.getByTestId("add-form-rating");

  const testName = faker.datatype.number();
  const testDescription = faker.company.catchPhrase();
  const testRating = Math.ceil(Math.random() * 10);

  fireEvent.change(name, { target: { value: testName } });
  fireEvent.change(description, { target: { value: testDescription } });
  fireEvent.change(rating, { target: { value: testRating } });
  fireEvent.submit(form);

  await screen.findByText(testName);
});



test('deletes an item', async () => {

  render(<App />);

  const form = screen.getByTestId("add-form");
  const name = screen.getByTestId("add-form-name");
  const description = screen.getByTestId("add-form-description");
  const rating = screen.getByTestId("add-form-rating");

  const testName = faker.datatype.number();
  const testDescription = faker.company.catchPhrase();
  const testRating = 4

  fireEvent.change(name, { target: { value: testName } });
  fireEvent.change(description, { target: { value: testDescription } });
  fireEvent.change(rating, { target: { value: testRating } });
  fireEvent.submit(form);

  await screen.findByText(testName);

  const deleteButton = await screen.findByTestId(`delete-button-${testName}`);
  fireEvent.click(deleteButton);

  await waitFor(() => {
    expect(screen.queryByText(testName)).not.toBeInTheDocument();
  });

});
