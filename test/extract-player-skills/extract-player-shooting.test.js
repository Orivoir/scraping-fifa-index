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
      const playerShootingData = extractPlayerSkills(
        playerCore.stats,
        "shooting",
        {
          "fkAcc": "freeKickAccuracy",
          "longShots": "longShot"
        }
      );

      it('should be a object', () => {
        assert.isObject(playerShootingData);
      });

      describe('player data skills properties:', () => {


        it('should has skills of shooting', () => {

          expect(playerShootingData).to.has.property('heading');
          assert.isNumber(playerShootingData.heading)

          expect(playerShootingData).to.has.property('shotPower');
          assert.isNumber(playerShootingData.shotPower);

          expect(playerShootingData).to.has.property('finishing');
          assert.isNumber(playerShootingData.finishing);

          expect(playerShootingData).to.has.property('longShot');
          assert.isNumber(playerShootingData.longShot);

          expect(playerShootingData).to.has.property('curve');
          assert.isNumber(playerShootingData.curve);

          expect(playerShootingData).to.has.property('freeKickAccuracy');
          assert.isNumber(playerShootingData.freeKickAccuracy);

          expect(playerShootingData).to.has.property('penalties');
          assert.isNumber(playerShootingData.penalties);

          expect(playerShootingData).to.has.property('volleys');
          assert.isNumber(playerShootingData.volleys);

        });

      });

    });

  });

});