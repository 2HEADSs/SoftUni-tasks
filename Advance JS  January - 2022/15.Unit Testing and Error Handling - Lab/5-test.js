const isSymmetric = require('./5');

const { assert } = require('chai');

describe('isSymmetric function test', () => {
  it('should return false if input is not array', () => {
    assert.equal(isSymmetric('stringTest'), false);
  });
  it('should return false if input is not array', () => {
    assert.equal(isSymmetric(5), false);
  });
  it('should return equal if input is symetrical  array', () => {
    assert.equal(isSymmetric([1, 1, 1, 1]), true);
  });
  it('should return equal if input is symetrical  array', () => {
    assert.equal(isSymmetric([1, 4, 1]), true);
  });
  it('should return equal if input is symetrical  array', () => {
    assert.equal(isSymmetric(['Love', 'Love', 'Love']), true);
  });
});
