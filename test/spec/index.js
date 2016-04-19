var expect = require('chai').expect;


describe('random-binary', function () {

  var randomBinary = require('../../');

  it('common', function () {
    console.log(randomBinary());

    expect(randomBinary()).to.be.a('string');
    expect(randomBinary()).to.be.match(/^[01]+$/);
    expect(randomBinary().length).to.be.at.most(256);
    expect(randomBinary(4).length).to.be.equal(4);
    expect(randomBinary(8).length).to.be.equal(8);
    expect(randomBinary(1000).length).to.be.equal(256);
  });
});
