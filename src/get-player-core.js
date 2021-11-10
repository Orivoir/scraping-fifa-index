const {
  SELECTOR_PLAYER_HEADER,
  SELECTOR_PLAYER_SECONDARY,
  SELECTOR_PLAYER_SKILL_CONTAINER
} = require('./helper');

/**
 * model object contains main player data
 * @typedef {Object} PlayerCore
 * @property {HTMLDivElement} header
 * @property {HTMLDivElement} secondary
 * @property {HTMLDivElement[]} teams
 * @property {HTMLDivElement[]} stats
 */

/**
 * @author Samuel GABORIEAu <sam.gabor@hotmail.com>
 * @param {HTMLDivElement} container
 * @returns {PlayerCore}
 */
function getPlayerCore(container) {

  if(!(container instanceof HTMLDivElement)) {
    throw new RangeError('arg1 should be HTMLDivElement');
  }

  const cores = [...container.childNodes].filter(cn => cn.nodeName === "DIV");

  return {
    header: cores[1].querySelector(SELECTOR_PLAYER_HEADER),
    secondary: cores[1].querySelector(SELECTOR_PLAYER_SECONDARY),
    teams: [...cores[2].childNodes].filter(cn => cn.nodeName === "DIV"),
    stats: [...cores[3].querySelectorAll(SELECTOR_PLAYER_SKILL_CONTAINER)]
  }
}

module.exports = getPlayerCore;
