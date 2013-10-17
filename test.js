var assert = require('assert')

var area = require('./')

describe('Area Polygon', function () {
  it('1x1 square', function () {
    assert.equal(area([[0,0], [0,1], [1,1], [1,0]]), 1)
  })

  it('1x1 square reverse', function () {
    assert.equal(area([[0,0], [1,0], [1,1], [0,1]]), 1)
  })

  it('2x4 rectangle', function () {
    assert.equal(area([[0,0], [2,0], [2,4], [0,4]]), 8)
  })

  it('3x4 right triangle', function () {
    assert.equal(area([[0,0], [3,0], [3,4]]), 6)
  })
})