/*  import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
 
 */

import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { render,
         cleanup,
         fireEvent,
         screen,
         waitForElementToBeRemoved
        } from './utils.js';
import "@testing-library/jest-dom/extend-expect";

import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import App from '../App';
import { NAME_COUNTRY_URL} from '../constants.js';

// We use msw to intercept the network request during the test,
// and return the response 'John Smith' after 150ms
// when receiving a get request to the `/api/user` endpoint
export const handlers = [
  rest.get("/countries", (req, res, ctx) => {
    const query = req.url.searchParams
    const name = query.get("name")
    const alerta = alert('debes introducir un país!')
    return res(ctx.json({alerta}), ctx.delay(150))
  })     
 /*   rest.get('/countries?name=', (req, res, ctx) => {
    return res(ctx.json(['']), ctx.delay(150))
  })  */
  
]

const server = setupServer(...handlers)
let history, debuG;

// Enable API mocking before tests.
beforeAll(async () => {
    server.listen();
})

beforeEach(async () => {
    history = createMemoryHistory();
    const { debug } = await render(
        <Router history={history}>
          <App />
        </Router>
      )
      debuG = debug;
})

// Reset any runtime request handlers we may add during the tests.
afterEach(() => {
    server.resetHandlers()
})


afterEach(cleanup);


// Disable API mocking after the tests are done.
afterAll(() => server.close())

test('shows message no country before fetching', async () => {
  await history.push('/')
  expect(screen.queryByText(/debes introducir un país!\(/i)).toBeInTheDocument()
  await waitForElementToBeRemoved(
        screen.queryByText(/debes introducir un país!\(/i))
          .catch((err) =>
            console.log(err))
})