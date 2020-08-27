// ts-node -O '{ "target": "es2020", "strict": true }' erasure.ts


class Point {
  x: number
  y: number

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }

  distance(other: Point) {
    return Math.sqrt(Math.pow(this.x - other.x, 2) + Math.pow(this.y - other.y, 2))
  }

  toString() { return `(${this.x}, ${this.y})` }

  static origin = new Point(0, 0)
}

/* Compile-time error
let newlyCreated = new T()
*/

// Remedy: Use constructor function
const fill = <T>(ctor: { new() : T }, n: number) => {
  let result: T[] = []
  for (let i = 0; i < n; i++)
    result.push(new ctor())
  return result
}

const dates = fill(Date, 10)
console.log('dates:', dates) // [2020-06-27T06:40:51.009Z, 2020-06-27T06:40:51.009Z, 2020-06-27T06:40:51.009Z, 2020-06-27T06:40:51.009Z, 2020-06-27T06:40:51.009Z, 2020-06-27T06:40:51.009Z, 2020-06-27T06:40:51.009Z, 2020-06-27T06:40:51.009Z, 2020-06-27T06:40:51.009Z, 2020-06-27T06:40:51.009Z]

/* Compile-time error
const tail = <T extends { slice(from: number, to?: number): T }>(values: T) => 
  values.slice(1) // OK
*/

// Remedy: Pass the constructor
const filter = <T>(values: unknown[], ctor: new (...args: any[]) => T) => {
  let result: T[] = []
  for (const v of values)
    if (v instanceof ctor) // OK—right-hand side of instanceof is a constructor
      result.push(v)
  return result
}

const pointsOnly = filter([3, 4, new Point(3, 4), Point.origin], Point)
console.log('pointsOnly:', pointsOnly) // [Point { x: 3, y: 4 }, Point { x: 0, y: 0 }]
