/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, conn } = require('../../src/db.js');

const agent = session(app);
const country = {
  name: 'Córdoba',
  id: 'COR',
  flag: 'https://www.google.com/search?q=cordoba&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjH29KInPTxAhVpqpUCHRFtAewQ_AUoAnoECAEQBA&biw=1366&bih=625#imgrc=G794TXmh2lrBCM',
  continent: 'America',
  capital: 'Córdoba',
  subregion: 'América del Sur',
  area: 352145687,
  population: 5750000
};

describe('Country routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Country.sync({ force: false })
    .then(() => Country.create(country)));
  describe('GET /countries', () => {
    it('should get 200', () =>
      agent.get('/countries').expect(200)
    );
  });
});
