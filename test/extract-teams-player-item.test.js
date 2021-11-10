const {expect, assert} = require('chai');

const extractTeamsPlayerItem = require('./../src/extract-teams-player-item');

const playerContentHtmlFixtures = require('./fixtures/players-html');
const getPlayerCore = require('./../src/get-player-core');
const createPlayerContainer = require('./../src/create-player-item');

describe('extract-player-item:', () => {

  playerContentHtmlFixtures.forEach(playerContentHtmlFixture => {

    describe('extract player item', () => {

      const playerContainer = createPlayerContainer(playerContentHtmlFixture);
      const playerCore = getPlayerCore(playerContainer);
      const playerTeamsData = extractTeamsPlayerItem(playerCore);

      it('should be a array', () => {
        assert.isArray(playerTeamsData);

        expect(playerTeamsData).to.has.lengthOf.greaterThan(0);
        expect(playerTeamsData).to.has.lengthOf.lessThan(3);
      });

      it('should has team properties', () => {

        playerTeamsData.forEach(playerTeam => {

          assert.isObject(playerTeam);

          expect(playerTeam).to.has.property('kitNumber');
          assert.isNumber(playerTeam.kitNumber);

          expect(playerTeam).to.has.property('name');
          assert.isString(playerTeam.name);

          expect(playerTeam).to.has.property('id');
          assert.isNumber(playerTeam.id);

          // optional properties
          if(playerTeam.joinedClubAt) {
            assert.isNumber(playerTeam.joinedClubAt);
          }
        });

      });


    });

  });

});