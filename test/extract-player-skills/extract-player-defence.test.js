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
      const playerDefenceData = extractPlayerSkills(playerCore.stats, "defence");

      it('should be a object', () => {
        assert.isObject(playerDefenceData);
      });

      describe('player data skills properties:', () => {

        it('should has skills of defence', () => {

          expect(playerDefenceData).to.has.property('marking');
          assert.isNumber(playerDefenceData.marking);

          expect(playerDefenceData).to.has.property('slideTackle');
          assert.isNumber(playerDefenceData.slideTackle);

          expect(playerDefenceData).to.has.property('standTackle');
          assert.isNumber(playerDefenceData.standTackle);
        });


      });

    });

  });

});