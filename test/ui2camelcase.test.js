const {expect, assert} = require('chai');

const ui2camelcase = require('./../src/ui2camelcase');

const fixtures = require('./fixtures/ui2camelcase');

describe('ui2camelcase:', () => {

  fixtures.forEach(fixture => {

    const message = `should give ${fixture.lowerCamelcase} for ${fixture.ui}`;

    it(message, () => {

      const response = ui2camelcase(fixture.ui);

      assert.isObject(response);
      expect(response).to.has.property('lowerCamelcase');
      assert.isString(response.lowerCamelcase);
      expect(response).to.has.property('upperCamelcase');
      assert.isString(response.upperCamelcase);

      expect(response.lowerCamelcase).to.be.equal(fixture.lowerCamelcase);
      expect(response.upperCamelcase).to.be.equal(fixture.upperCamelCase);

    });

  });

  describe('uicamelcase with invalid argument', () => {

    const createFxThrow = function() {
      return () => ui2camelcase(...[...arguments]);
    }

    it('should throw RangeError with empty argument', () => {
      expect(createFxThrow()).to.throw(RangeError, "arg1 should be a string");
    });
  });

});