const ui2camelcase = require('./ui2camelcase');
const parseValue = require('./parse-value');

/**
 * model object contains player team data
 * @typedef {Object} PlayerTeamData
 * @property {number} kitNumber
 * @property {string} name
 * @property {number} id
 * @property {number?} joinedClubAt
 */

/**
 * @author Samuel GABORIEAU <sam.gabor@hotmail.com>
 * @param {import("./get-player-core").PlayerCore} playerCore
 * @returns {PlayerTeamData[]}
 */
function extractTeamsPlayerItem(playerCore) {

  const teams = playerCore.teams;

  return teams
    // get card container
    .map(team => team.querySelector('div.card.mb-5'))

    // get card core
    .map(team => ({
      header: team.querySelector('h5.card-header'),
      body: team.querySelector('div.card-body')
    }))

    // get player teams data
    .map(team => {
      const id = parseInt(team.header.querySelector('img').src.split('/').pop());
      const name = team.header.querySelector('img').alt.replace(/FIFA 2[\d]/, "").trim();

      const additionalProperties = [...team.body.children].filter(c => (
        /^(Joined Club|Kit Number)$/.test(c.childNodes[0].textContent.trim())
      ))
      .map((element) => ({
        [ui2camelcase(element.childNodes[0].textContent).lowerCamelcase]:
        parseValue(element.childNodes[1].textContent)
      }))
      // merge list properties
      .reduce((entryLeft, entryRight) => ({
        ...entryLeft,
        ...entryRight
      }))

      return {
        id,
        name,
        ...additionalProperties
      }
    })
}

module.exports = extractTeamsPlayerItem;
