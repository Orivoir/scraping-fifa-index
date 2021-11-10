const {expect, assert} = require('chai');

const extractHeaderPlayerItem = require('./../src/extract-header-player-item');

const playerContentHtmlFixtures = require('./fixtures/players-html');
const getPlayerCore = require('./../src/get-player-core');
const createPlayerContainer = require('./../src/create-player-item');



describe('extract-player-item:', () => {

  playerContentHtmlFixtures.forEach(playerContentHtmlFixture => {

    describe('extract player item', () => {

      const playerContainer = createPlayerContainer(playerContentHtmlFixture);
      const playerCore = getPlayerCore(playerContainer);
      const playerHeaderData = extractHeaderPlayerItem(playerCore);

      it('should be a object', () => {
        assert.isObject(playerHeaderData);
      });

      it('should has header properties', () => {

        expect(playerHeaderData).to.has.property('height');
        assert.isNumber(playerHeaderData.height);

        expect(playerHeaderData).to.has.property('weight');
        assert.isNumber(playerHeaderData.weight);

        expect(playerHeaderData).to.has.property('preferredFoot');
        assert.isString(playerHeaderData.preferredFoot);

        expect(playerHeaderData).to.has.property('bornAt');
        assert.isNumber(playerHeaderData.bornAt);

        expect(playerHeaderData).to.has.property('age');
        assert.isNumber(playerHeaderData.age);

      });


    });

  });

});