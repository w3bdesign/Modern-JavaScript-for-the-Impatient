// ts-node -O '{ "target": "es2020", "strict": true }' objects.ts


// A class with type annotations
{
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
}

// Inferring types from initial values
{
  class Point {
    x = 0
    y = 0
    constructor(x: number, y: number) {
      this.x = x
      this.y = y
    }
    toString() { return `(${this.x}, ${this.y})` }
  }
}

// Private instance fields
{
  class Point {
    #x: number
    #y: number
  
    constructor(x: number, y: number) {
      this.#x = x
      this.#y = y
    }
  
    distance(other: Point) {
      return Math.sqrt(Math.pow(this.#x - other.#x, 2) + Math.pow(this.#y - other.#y, 2))
    }
  
    toString() { return `(${this.#x}, ${this.#y})` }
  
    static origin = new Point(0, 0)
  }
}

// Readonly instance fields
{
  class Point {
    readonly x: number
    readonly y: number
    constructor(x: number, y: number) {
      this.x = x
      this.y = y
    }
    toString() { return `(${this.x}, ${this.y})` }
  }
  /* Compile-time error
    const p = new Point(3, 4)
    p.x = 0 // Error—cannot change readonly property
  */
}

// Instance type
{
  // A class
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
  // Its instances have this type:
  type T1 =
    {
      x: number,
      y: number,
      distance: (this: Point, arg1: Point) => number
      toString: (this: Point) => string
    }

  // Compact notation for methods
  type T2 =
    {
      x: number,
      y: number,
      distance(arg1: Point): number
      toString(): string
    }
}

// Getter and setter methods give rise to TypeScript properties
{
  class Point {
    #x: number
    #y: number

    constructor(x: number, y: number) {
      this.#x = x
      this.#y = y
    }

    distance(other: Point) {
      return Math.sqrt(Math.pow(this.#x - other.#x, 2) + Math.pow(this.#y - other.#y, 2))
    }

    toString() { return `(${this.#x}, ${this.#y})` }
    get x() { return this.#x }
    set x(x: number) { this.#x = x }
    get y() { return this.#y }
    set y(y: number) { this.#y = y }

    static origin = new Point(0, 0)
  }  
}

// Static type
{
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

  // This is the static type of the class
  type T1 =
    {
      new (x: number, y: number): Point
      origin: Point
    }

  const a = new Point(3, 4)
  const b: typeof a = new Point(0, 0) // OK
  /* Compile-time error
  const ctor: typeof Point = new Point(0, 0) // Error
  */

  // Remedy
  const ctor: typeof Point = Point

  // Now the following works
  let p = new ctor(3, 4)
  p = ctor.origin
}
