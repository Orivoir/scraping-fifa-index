const {assert, expect} = require('chai');
const createPlayerItem = require('./../src/create-player-item');
// const createPlayerItem = () => {};
const playersHtmlFixtures = require('./fixtures/players-html');

describe('create-player-item:', () => {

  playersHtmlFixtures.forEach(playersHtmlFixture => {

    const message = `create player item:`

    describe(message, () => {

      const playerContainer = createPlayerItem(playersHtmlFixture);

      it('should be a valid html div', () => {
        expect(playerContainer).instanceOf(HTMLDivElement);
          assert.isTrue(playerContainer.classList.contains('col-lg-8'));
      });


    });
  });

  describe('create player item with invalid argument', () => {

    const createFxThrow = function() {
      return () => createPlayerItem(...[...arguments]);
    }

    it('should throw RangeError with empty argument', () => {
      expect(createFxThrow()).to.throw(RangeError, 'arg1 should be string HTML content');
    });

    it('should throw Error with invalid HTML content format', () => {

      expect(createFxThrow(`<!DOCTYPE html> <html><head></head></body></html>`)).to.throw(Error, 'HTML content invalid format')

    });

  })

});