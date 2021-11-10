const {expect, assert} = require('chai');

const fixtures = require('./fixtures/parse-value');

const parseValue = require('../src/parse-value');

describe('parsed-value:', () => {

  fixtures.forEach(fixture => {
    const message = `should parse value for: ${fixture.brutValue}`;

    it(message, () => {
      const parsedValue = parseValue(fixture.brutValue);
      expect(parsedValue).to.equal(fixture.parsedValue);
    });

  });

  describe('extract player item with invlid argument', () => {

    const createFxThrow = function() {
      return () => parseValue(...[...arguments]);
    }

    it('should throw RangeError with empty argument', () => {
      expect(createFxThrow()).to.throw(RangeError, "arg1 should be a string value");
    });
  });

});