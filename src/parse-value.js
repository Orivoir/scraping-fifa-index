/**
 * @typedef {(number|string)} ParseValue - parsed value can be integer value as timestamp POSIX or standalone integer or string value
 */

const parsedValue = require("../test/fixtures/parse-value");

/**
 * @author Samuel GABORIEAU <sam.gabor@hotmail.com>
 * @param {string} brutValue - value to parsed
 * @returns {ParseValue} - final parsed value
 */
function parseValue(brutValue) {

  if(typeof brutValue !== "string") {
    throw new RangeError('arg1 should be a string value');
  }

  const valueInt = parseInt(brutValue);
  const valueAt = new Date(brutValue).getTime();
  const valueStr = brutValue.trim();

  if(!isNaN(valueInt)) {
    return valueInt;
  } else if(!isNaN(valueAt)) {
    return valueAt;
  } else {
    return valueStr;
  }

}

module.exports = parseValue;
