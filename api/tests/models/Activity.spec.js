 const { Activity, conn } = require('../../src/db.js');
const { expect } = require('chai');
const { v4: uuidv4} = require('uuid')


describe('Activity model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => conn.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if any property is missing', (done) => {
        Activity.create({
          name:'Pesca Deportiva', 
          difficulty:3,
          duration:8,
          season:'Otoño'
        })
          .then(() => done(new Error('It requires a valid propoerty such as ID')))
          .catch(() => done());
      });
      it('should work when all properties are valid', () => {
        Activity.create({ 
          id: uuidv4(),
          name: 'Cricket',
          dificulty: 2,
          duration: 4,
          season:'Verano'
       })
       .then((response) => done())
       .catch((err) => console.log('error en catch', err))

      });
    });
  });
});
 