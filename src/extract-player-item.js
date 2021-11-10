const extractHeaderPlayerItem = require('./extract-header-player-item');
const extractTeamsPlayerItem = require('./extract-teams-player-item');
const extractPlayerSkills = require('./extract-player-skills')

/**
 * model object contains main player data
 * @typedef {Object} PlayerCore
 * @property {HTMLDivElement} header
 * @property {HTMLDivElement} secondary
 * @property {HTMLDivElement[]} team
 * @property {HTMLDivElement[]} stats
 */

/**
 * model object contains main player data
 * @typedef {Object} PlayerData
 * @property {number} height
 * @property {number} weight
 * @property {string} preferredFoot
 * @property {number} bornAt
 * @property {number} age
 * @property {import("./extract-teams-player-item").PlayerTeamData[]} teams
 * @property {any} skills
 */

/**
 *
 * @param {PlayerCore} playerCore
 * @returns {PlayerData}
 */
function extractPlayerItem(playerCore) {

    return {
      ...extractHeaderPlayerItem(playerCore),
      teams: extractTeamsPlayerItem(playerCore),
      skills: {
        defence: extractPlayerSkills(playerCore.stats, "defence"),
        mental: extractPlayerSkills(
          playerCore.stats,
          "mental",
          {
            "attPosition": "attackPosition"
          }
        ),
        physical: extractPlayerSkills(playerCore.stats, "physical"),
        passing: extractPlayerSkills(playerCore.stats, "passing"),
        goalkeeper: extractPlayerSkills(
          playerCore.stats,
          "goalkeeper",
          {
            gkPositioning: "positioning",
            gkDiving: "diving",
            gkHandling: "handling",
            gkKicking: "kicking",
            gkReflexes: "reflexes"
          }
        ),
        shooting: extractPlayerSkills(
          playerCore.stats,
          "shooting",
          {
            "fkAcc": "freeKickAccuracy",
            "longShots": "longShot"
          }
        ),
        ballskills: extractPlayerSkills(playerCore.stats, "ball skills")
      }
    };
}

module.exports = extractPlayerItem;