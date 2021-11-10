const {expect, assert} = require('chai');

const extractPlayerSkills = require('../../src/extract-player-skills');

const playerContentHtmlFixtures = require('./../fixtures/players-html');
const getPlayerCore = require('./../../src/get-player-core');
const createPlayerContainer = require('./../../src/create-player-item');

describe('extract-player-item:', () => {

  playerContentHtmlFixtures.forEach(playerContentHtmlFixture => {

    describe('extract player item', () => {

      const playerContainer = createPlayerContainer(playerContentHtmlFixture);
      const playerCore = getPlayerCore(playerContainer);
      const playerPassingData = extractPlayerSkills(playerCore.stats, "passing");

      it('should be a object', () => {
        assert.isObject(playerPassingData);
      });

      describe('player data skills properties:', () => {

        it('should has skills of passing', () => {

          expect(playerPassingData).to.has.property('crossing');
          assert.isNumber(playerPassingData.crossing);

          expect(playerPassingData).to.has.property('shortPass');
          assert.isNumber(playerPassingData.shortPass);

          expect(playerPassingData).to.has.property('longPass');
          assert.isNumber(playerPassingData.longPass);
        });

      });

    });

  });

});