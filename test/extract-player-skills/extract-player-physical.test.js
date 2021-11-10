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
      const playerPhysicalData = extractPlayerSkills(playerCore.stats, "physical");

      it('should be a object', () => {
        assert.isObject(playerPhysicalData);
      });

      describe('player data skills properties:', () => {

        it('should has skills of physical', () => {

          expect(playerPhysicalData).to.has.property('acceleration');
          assert.isNumber(playerPhysicalData.acceleration);

          expect(playerPhysicalData).to.has.property('stamina');
          assert.isNumber(playerPhysicalData.stamina);

          expect(playerPhysicalData).to.has.property('strength');
          assert.isNumber(playerPhysicalData.strength);

          expect(playerPhysicalData).to.has.property('balance');
          assert.isNumber(playerPhysicalData.balance);

          expect(playerPhysicalData).to.has.property('sprintSpeed');
          assert.isNumber(playerPhysicalData.sprintSpeed);

          expect(playerPhysicalData).to.has.property('agility');
          assert.isNumber(playerPhysicalData.agility);

          expect(playerPhysicalData).to.has.property('jumping');
          assert.isNumber(playerPhysicalData.jumping);
        });

      });

    });

  });

});