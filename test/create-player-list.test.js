const {expect, assert} = require('chai');

const createPlayerList = require('./../src/create-player-list');
const playerListHtmlFixtures = require('./fixtures/players-list-html');

describe('create-player-list-container', () => {

  playerListHtmlFixtures.forEach(playerListHtmlFixture => {

    const indexStart = playerListHtmlFixture.indexOf('"/players/?page=') + '"/players/?page='.length;
    const page = parseInt(playerListHtmlFixture.slice(indexStart,indexStart+5));

    const message = `create player list container for page ${page}`;

    describe(message, () => {

      const playersList = createPlayerList(playerListHtmlFixture);

      it('should be array(30) of HTMLTableRowElement', () => {
        assert.isArray(playersList);
        expect(playersList).to.has.lengthOf(30);

        playersList.forEach(playerItem => (
          expect(playerItem).instanceOf(HTMLTableRowElement)
        ));
      });

      it('should has attribute `data-playerid` with integer value', () => {

        playersList.forEach(playerItem => {
          expect(playerItem.hasAttribute('data-playerid')).to.be.true;
          const playerId = parseInt(playerItem.getAttribute('data-playerid'));
          assert.isNumber(playerId);
          assert.isNotNaN(playerId);
        });

      });

      it('should has data-title="Nationality"', () => {
        playersList.forEach(playerItem => {
          const tdNationality = playerItem.querySelector('td[data-title="Nationality"]');
          expect(tdNationality).instanceOf(HTMLTableCellElement);
        });
      });

      it('should has data-title="OVR / POT"', () => {
        playersList.forEach(playerItem => {
          const tdRangeRank = playerItem.querySelector('td[data-title="OVR / POT"]');
          expect(tdRangeRank).instanceOf(HTMLTableCellElement);
        });
      });

      it('should has data-title="Name"', () => {
        playersList.forEach(playerItem => {
          const tdName = playerItem.querySelector('td[data-title="Name"]');
          expect(tdName).instanceOf(HTMLTableCellElement);
        });
      });

      it('should has data-title="Preferred Positions"', () => {
        playersList.forEach(playerItem => {
          const tdPreferredPositions = playerItem.querySelector('td[data-title="Preferred Positions"]');
          expect(tdPreferredPositions).instanceOf(HTMLTableCellElement);
        });
      });

      it('should has data-title="Age"', () => {
        playersList.forEach(playerItem => {
          const tdAge = playerItem.querySelector('td[data-title="Age"]');
          expect(tdAge).instanceOf(HTMLTableCellElement);
        });
      });

      it('should has data-title="Team"', () => {
        playersList.forEach(playerItem => {
          const tdTeam = playerItem.querySelector('td[data-title="Team"]');
          expect(tdTeam).instanceOf(HTMLTableCellElement);
        });
      });


    });

  });

  describe('create player list with invalid argument', () => {

    const createFxError = function() {
      return () => createPlayerList(...[...arguments]);
    }

    it('should throw RangeError with empty arguments', () => {
      expect(createFxError()).to.throw(RangeError, "arg1 should be string HTML content");
    });

    it('should throw Error with invalid document', () => {
      expect(createFxError('Unicorn <3')).to.throw(Error, "HTML content invalid format");
    });

  });

});
