# Area Polygon [![Build Status](https://travis-ci.org/math-utils/area-polygon.png)](https://travis-ci.org/math-utils/area-polygon)

Calculate the area of a simple 2D polygon given its vertices.

## API

```js
var area = require('area-polygon')
```

### area(points, signed)

`points` must consistent of `point`s that are either of the form:

```js
{
  x: Integer,
  y: Integer
}
```

or

```js
[x, y]
```

The `points` must also trace the edge of the polygon.
The last `point` should return to the origin.

`signed` is `true` or `false`(default). If true fucntion returns the signed area of the polygon. It is helpful to determine the orientation of points in polygon. Area is positive if orientation is counter-clockwise and negative for clockwise.

## Example

Calculate the area of a 4x4 square whose bottom left corner sits at the origin of the grid (`[0, 0]`):

```js
area([
 [0, 0],
 [0, 4],
 [4, 4],
 [4, 0]
]) === 16
```
