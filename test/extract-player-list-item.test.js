const {expect, assert} = require('chai');

const extractPlayerListItem = require('./../src/extract-player-list-item')

const playerListHtmlFixtures = require('./fixtures/players-list-html');
const createPlayerList = require('./../src/create-player-list');

describe('extract-player-list-item', () => {

  const arrayPlayersList = playerListHtmlFixtures.map(playerListHtmlFixture => (
    createPlayerList(playerListHtmlFixture)
  ));

  arrayPlayersList.forEach(playersList => {

    playersList.forEach(playerListItem => {

      const message = `extract player data`

      describe(message, () => {

        const playerData = extractPlayerListItem(playerListItem);

        it('should be object with valid shema', () => {

          assert.isObject(playerData);

          expect(playerData).to.has.property('fullName');
          assert.isString(playerData.fullName);

          expect(playerData).to.has.property('countryId');
          assert.isNumber(playerData.countryId);

          expect(playerData).to.has.property('countryName');
          assert.isString(playerData.countryName);

          expect(playerData).to.has.property('rangeRank');
          assert.isArray(playerData.rangeRank);
          expect(playerData.rangeRank).to.has.lengthOf(2);

          expect(playerData).to.has.property('preferredPositions');
          assert.isArray(playerData.preferredPositions);
          expect(playerData.preferredPositions).to.has.lengthOf.greaterThan(0);

          expect(playerData).to.has.property('age');
          assert.isNumber(playerData.age);


          expect(playerData).to.has.property('clubId');
          assert.isNumber(playerData.clubId);

          expect(playerData).to.has.property('clubName');
          assert.isString(playerData.clubName);
        });

      });

    })

  });

  describe('extract player data with invalid argument', () => {

    const createFxThrow = function() {
      return () => extractPlayerListItem(...[...arguments]);
    }

    it('should throw RangeError with empty argument', () => {
      expect(createFxThrow()).to.throw(RangeError, "arg1 should be HTMLTableRowElement");
    });

    it('should throw Error with invalid table row', () => {

      const invalidRow = document.createElement('tr');
      invalidRow.innerHTML = `
        <td data-title="Name"></td>
        <td data-title="Foobar"></td>
        <td data-title="Nationality"></td>
      `;

      expect(createFxThrow(invalidRow)).to.throw(Error, "arg1 HTMLTableRowElement has invalid format");
    });

  });

})