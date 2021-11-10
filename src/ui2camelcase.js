/**
 * final data of converted text
 * @typedef {Object} CamelCaseResponse
 * @property {string} lowerCamelcase
 * @property {string} upperCamelcase
 */

/**
 * @author Samuel GABORIEAU <sam.gabor@hotmail.com>
 * @param {string} text - text to convert
 * @returns {CamelCaseResponse} - text converted
 */
function ui2camelcase(text) {

  if(typeof text !== "string") {
    throw new RangeError("arg1 should be a string");
  }

  text = text.split(' ');
  let textBack = "";

  if(text.length === 1) {
    textBack = text[0];
  } else {
    text.forEach(textCore => {
      textBack += textCore.charAt(0).toLocaleUpperCase() + textCore.slice(1, ).toLocaleLowerCase();
    });
  }

  textBack = textBack.replace('.', '');

  // apply lower/upper
  const textBackLower = textBack.charAt(0).toLocaleLowerCase() + textBack.slice(1,);
  const textBackUpper = textBack.charAt(0).toLocaleUpperCase() + textBack.slice(1,);

  return {
    lowerCamelcase: textBackLower,
    upperCamelcase: textBackUpper
  }
}

module.exports = ui2camelcase;
