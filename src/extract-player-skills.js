const ui2camelcase = require('./ui2camelcase');
const parseValue = require('./parse-value');

function extractPlayerSkills(
  playerCoreStats,
  skillName,
  normalizeProperties={} // eg. {gKFoobar: "foobar"}
) {

  const statsElements = playerCoreStats.slice(0, 7);

  const statElement = statsElements.find((se) => (
    new RegExp(skillName, "i").test(se.querySelector('.card-header').textContent.trim())
  ));

  if(!statElement) {
    throw new Error('stats container for '+skillName+' not find');
  }

  return [...statElement.querySelector('.card-body').children]

  // extract entries data
  .map(entry => ({
      [ui2camelcase(entry.childNodes[0].textContent).lowerCamelcase]:
      parseValue(entry.childNodes[1].textContent)
  }))

  // normalize properties name
  .map(entry => {
    Object.keys(normalizeProperties).map(property => {
      if(entry[property]) {
        entry[normalizeProperties[property]] = entry[property];
        delete entry[property];
      }
    })

    return entry;
  })

  // merge list entries:
  // [{[property]: value}, ...] => {[property]: value, ...}
  .reduce((entryLeft, entryRight) => ({
    ...entryLeft,
    ...entryRight
  }));

}

module.exports = extractPlayerSkills;
