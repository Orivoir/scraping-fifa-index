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
      const playerMentalData = extractPlayerSkills(
        playerCore.stats,
        "mental",
        {
          "attPosition": "attackPosition"
        }
      );

      it('should be a object', () => {
        assert.isObject(playerMentalData);
      });

      describe('player data skills properties:', () => {

        it('should has skills of mental', () => {

          expect(playerMentalData).to.has.property('aggression');
          assert.isNumber(playerMentalData.aggression);

          expect(playerMentalData).to.has.property('reactions');
          assert.isNumber(playerMentalData.reactions);

          expect(playerMentalData).to.has.property('attackPosition');
          assert.isNumber(playerMentalData.attackPosition);

          expect(playerMentalData).to.has.property('interceptions');
          assert.isNumber(playerMentalData.interceptions);

          expect(playerMentalData).to.has.property('vision');
          assert.isNumber(playerMentalData.vision);

          expect(playerMentalData).to.has.property('composure');
          assert.isNumber(playerMentalData.composure);
        });

      });

    });

  });

});