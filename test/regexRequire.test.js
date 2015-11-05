var expect = require('chai').expect,
    regexRequire = require('../src/index');

describe('regexRequire', function() {
    it('should return empty object if no path given', function () {

        expect(regexRequire()).to.be.a('object');
        expect(regexRequire()).to.be.empty;

    });

    it('should push file contents to returned object', function () {

        var input = './test/simple.json';

        var output = JSON.parse(regexRequire(input));

        expect(output['a']).to.equal('a');

    });
});
