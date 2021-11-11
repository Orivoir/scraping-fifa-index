/**
 * Short data player definition from player list page
 * @typedef {Object} DataPlayerRow
 * @property {fullName} string - contains last name and first name
 * @property {id} number - player unid id
 * @property {countryId} number - country uniq id of player use for build country image URL
 * @property {countryName} string - country name of player
 * @property {rangeRank} number[] - fifa rank of player `[min, max]`
 * @property {preferredPositions} string[] - list of positions player from short format *eg. Goalkeeper => GK*
 * @property {age} number - player age
 * @property {clubId} number - player club uniq id use for build club image URL
 * @property {clubName} string - club name of player
 */


/**
 * @author Samuel GABORIEAu <sam.gabor@hotmail.com>
 * @param {HTMLTableRowElement} playerRowItem - player row from players list page
 * @returns {DataPlayerRow}
 */
function extractPlayerListItem(playerRowItem) {

  if(!(playerRowItem instanceof HTMLTableRowElement)) {
    throw new RangeError('arg1 should be HTMLTableRowElement');
  }

  const tdName = playerRowItem.querySelector('td[data-title="Name"]');
  const tdPreferredPositions = playerRowItem.querySelector('td[data-title="Preferred Positions"]');
  const tdRangeRank = playerRowItem.querySelector('td[data-title="OVR / POT"]');
  const tdNationality = playerRowItem.querySelector('td[data-title="Nationality"]');
  const tdAge = playerRowItem.querySelector('td[data-title="Age"]');
  const tdTeam = playerRowItem.querySelector('td[data-title="Team"]');


  if(
    !tdName ||
    !tdPreferredPositions ||
    !tdRangeRank ||
    !tdNationality ||
    !tdAge ||
    !tdTeam
  ) {
    throw new Error('arg1 HTMLTableRowElement has invalid format');
  }

  const id = parseInt(playerRowItem.querySelector('td figure.player a img').src.split('/').pop());

  const fullName = tdName.textContent.trim();

  const countryLink = tdNationality.querySelector('a');
  const countryId = parseInt(countryLink.href.split('=').pop());
  const countryName = countryLink.getAttribute('title').replace(/FIFA 2[\d]/, '').trim();

  const rangeRank = [...tdRangeRank.childNodes].map(cn => cn.textContent);

  const preferredPositions = [...tdPreferredPositions.childNodes].map(cn => cn.textContent);

  const age = parseInt(tdAge.textContent);

  const clubImage = tdTeam.querySelector('img');

  const clubId = parseInt(clubImage.src.split('/').pop());
  const clubName = clubImage.alt.replace(/FIFA 2[\d]/, '');

  return {
    id,
    fullName,
    countryId,
    countryName,
    rangeRank,
    preferredPositions,
    age,
    clubId,
    clubName
  };
}

module.exports = extractPlayerListItem;