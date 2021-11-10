const {assert, expect} = require('chai');

const getPlayerCore = require('./../src/get-player-core');
const createPlayerItem = require('./../src/create-player-item');
const playerContentHtmlFixtures = require('./fixtures/players-html');

describe('get-player-core', () => {

  playerContentHtmlFixtures.forEach(playerContentHtmlFixture => {

    describe('get player core', () => {

      const playerContainer = createPlayerItem(playerContentHtmlFixture);
      const playerCore = getPlayerCore(playerContainer);

      it('should be a object of:', () => {
        assert.isObject(playerCore);
        expect(playerCore).to.has.property('header');
        expect(playerCore).to.has.property('secondary');
        expect(playerCore).to.has.property('teams');
        expect(playerCore).to.has.property('stats');
      });

      it('should has valid properties:', () => {

        expect(playerCore.header).instanceOf(HTMLDivElement);
        expect(playerCore.secondary).instanceOf(HTMLDivElement);
        assert.isArray(playerCore.teams);
        assert.isArray(playerCore.stats);

        playerCore.teams.forEach(teamContainer => (
          expect(teamContainer).instanceOf(HTMLDivElement)
        ));

        playerCore.stats.forEach(statsContainer => (
          expect(statsContainer).instanceOf(HTMLDivElement)
        ));

      });
    });
  });

  describe('get player core with invalid argument', () => {

    const createFxThrow = function() {
      return () => getPlayerCore(...[...arguments]);
    }

    it('should throw RangeError with empty argument', () => {
      expect(createFxThrow()).to.throw(RangeError, "arg1 should be HTMLDivElement");
    });

    it('should throw RangeError with empty argument', () => {
      expect(createFxThrow(42)).to.throw(RangeError, "arg1 should be HTMLDivElement");
    });

  });

});
