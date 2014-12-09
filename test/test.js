var assert = require('assert')

var area = require('..')

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

  it('anti-clockwise concave polygon, signed param true', function () {
    assert.equal(area([[2,4],[7,0],[18,9],[16,13],[14,10],[11,8],[8,11],[7,15],
      [4,11],[2,4]],true), 108)
  })

  it('clockwise concave polygon, signed param true', function () {
    assert.equal(area([[2,4],[4,11],[7,15],[8,11],[11,8],[14,10],[16,13],[18,9],
      [7,0],[2,4]],true), -108)
  })

  it('clockwise concave polygon, signed param false', function () {
    assert.equal(area([[2,4],[4,11],[7,15],[8,11],[11,8],[14,10],[16,13],[18,9],
      [7,0],[2,4]],false), 108)
  })
})
