# Area Polygon [![Build Status](https://travis-ci.org/math-utils/area-polygon.png)](https://travis-ci.org/math-utils/area-polygon)

Calculate the area of a simple 2D polygon given its vertices.

## API

```js
var area = require('area-polygon')
```

### area(points)

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

## License

The MIT License (MIT)

Copyright (c) 2013 Jonathan Ong me@jongleberry.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.