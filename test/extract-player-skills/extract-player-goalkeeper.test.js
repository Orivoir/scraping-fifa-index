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
      const playerGoalkeeperData = extractPlayerSkills(
        playerCore.stats,
        "goalkeeper",
        {
          gkPositioning: "positioning",
          gkDiving: "diving",
          gkHandling: "handling",
          gkKicking: "kicking",
          gkReflexes: "reflexes"
        }
      );

      it('should be a object', () => {
        assert.isObject(playerGoalkeeperData);
      });

      describe('player data skills properties:', () => {

        it('should has skills of goalkeeper', () => {

          expect(playerGoalkeeperData).to.has.property('positioning');
          assert.isNumber(playerGoalkeeperData.positioning);

          expect(playerGoalkeeperData).to.has.property('diving');
          assert.isNumber(playerGoalkeeperData.diving);

          expect(playerGoalkeeperData).to.has.property('handling');
          assert.isNumber(playerGoalkeeperData.handling);

          expect(playerGoalkeeperData).to.has.property('kicking');
          assert.isNumber(playerGoalkeeperData.kicking);

          expect(playerGoalkeeperData).to.has.property('reflexes');
          assert.isNumber(playerGoalkeeperData.reflexes);
        });

      });

    });

  });

});