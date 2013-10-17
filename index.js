module.exports = function (points) {
  var l = points.length
  var det = 0

  points = points.map(normalize)
  points = points.concat(points[0])

  for (var i = 0; i < l; i++)
    det += points[i].x * points[i + 1].y
      - points[i].y * points[i + 1].x

  return Math.abs(det) / 2
}

function normalize(point) {
  if (Array.isArray(point))
    return {
      x: point[0],
      y: point[1]
    }
  else
    return point
}