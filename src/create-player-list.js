const {SELECTOR_ROW_PLAYER} = require('./helper');

/**
 * @author Samuel GABORIEAU <sam.gabor@hotmail.com>
 * @param {string} contentHtml - string content HTML of players list
 * @return {HTMLTableRowElement[]} players row list
 * @throws RangeError - during invalid argument type
 * @throws Error - during invalid document format
 */
function createPlayerList(contentHtml) {

  if(typeof contentHtml !== "string") {
    throw new RangeError('arg1 should be string HTML content');
  }

  const indexOpen = contentHtml.indexOf('<table ');
  const indexClose = contentHtml.indexOf('</table>') + '</table>'.length;

  if(
    indexOpen === -1 ||
    indexClose === -1 ||
    indexClose < indexOpen
  ) {
    throw new Error('HTML content invalid format');
  }

  // extract table html of document html
  const tableContentHtml = contentHtml.slice(indexOpen, indexClose);

  const tableContainer = document.createElement('div');

  // create object model from table html
  tableContainer.innerHTML = tableContentHtml;

  return [...tableContainer.querySelectorAll(SELECTOR_ROW_PLAYER)]
}

module.exports = createPlayerList;
