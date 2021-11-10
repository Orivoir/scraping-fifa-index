const {SELECTOR_PLAYER_CONTAINER} = require('./helper');

/**
 * @author Samuel GABORIEAU <sam.gabor@hotmail.com>
 * @param {string} contentHtml - html content of player page
 * @returns {HTMLDivElement} - main data player container
 */
function createPlayerItem(contentHtml) {

  if(typeof contentHtml !== "string") {
    throw new RangeError('arg1 should be string HTML content');
  }

  const indexOpen = contentHtml.indexOf('<main role="main">');
  const indexClose = contentHtml.indexOf('</main>') + '</main>'.length;

  if(
    indexOpen === -1 ||
    indexClose === -1 ||
    indexOpen > indexClose
  ) {
    throw new Error('HTML content invalid format');
  }

  // extract main content html of document html
  const mainContentHtml = contentHtml.slice(indexOpen, indexClose);

  const container = document.createElement('div');

  // create object model from main content html
  container.innerHTML = mainContentHtml;

  return container.querySelector(SELECTOR_PLAYER_CONTAINER);
}

module.exports = createPlayerItem;
