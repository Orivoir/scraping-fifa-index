const ui2camelcase = require('./ui2camelcase');
const parseValue = require('./parse-value');

/**
 * model object contains player header data
 * @typedef {Object} PlayerHeaderData
 * @property {number} height
 * @property {number} weight
 * @property {string} preferredFoot
 * @property {number} bornAt
 * @property {number} age
 */

/**
 * @author Samuel GABORIEAU <sam.gabor@hotmail.com>
 * @param {import("./get-player-core").PlayerCore} playerCore
 * @returns {PlayerHeaderData}
 */
function extractHeaderPlayerItem(playerCore) {
  const headerSecondaryBody = playerCore.secondary.querySelector('div.card-body');

  const headerSecondaryProperties = [...headerSecondaryBody.childNodes]
    .filter(cn => cn.nodeName === "P")
    .slice(0, 5)

    // HTMLParagraphElement => [property, brutValue]
    .map(element => ([
      ui2camelcase(element.childNodes[0].textContent).lowerCamelcase,
      element.childNodes[1].textContent
    ]))

    // [property, brutValue] => {[property]: parsedValue}
    .map(entry => ({
      [entry[0]]: parseValue(entry[1])
    }))

    // normalize property name
    .map((entry) => (
      !!entry.birthDate ? {
        bornAt: entry.birthDate
      }: entry
    ))

    // merge list properties
    // [{[property]: parsedValue}, ...] => {[property]: parsedValue, ...}
    .reduce((entryLeft, entryRight) => ({
      ...entryLeft,
      ...entryRight
    }))

  return headerSecondaryProperties;
}

module.exports = extractHeaderPlayerItem;
