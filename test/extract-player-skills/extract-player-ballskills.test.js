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
      const playerBallskillsData = extractPlayerSkills(playerCore.stats, "ball skills");

      it('should be a object', () => {
        assert.isObject(playerBallskillsData);
      });

      describe('player data skills properties:', () => {


        it('should has skills of ball skills', () => {
          assert.isObject(playerBallskillsData);
          expect(playerBallskillsData).to.has.property('ballControl');
          assert.isNumber(playerBallskillsData.ballControl)

          expect(playerBallskillsData).to.has.property('dribbling');
          assert.isNumber(playerBallskillsData.dribbling);
        });


      });

    });

  });

});