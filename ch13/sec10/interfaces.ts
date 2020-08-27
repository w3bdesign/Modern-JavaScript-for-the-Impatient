// ts-node -O '{ "target": "es2020", "strict": true }' interfaces.ts


{
  // A type that describes objects with an id method
  type Identifiable = {
    id(): string
  }
  // A method that accepts instances of subtypes of this type
  const findById = (elements: Identifiable[], id: string) => {
    for (const e of elements) if (e.id() === id) return e;
    return undefined;
  }
  // The implements clause checks that the class is a subtype
  class Person implements Identifiable {
    #name: string
    #id: string
    constructor(name: string, id: string) { this.#name = name; this.#id = id; }
    id() { return this.#id }
  }
}

{
  // The interface syntax does the same thing
  interface Identifiable {
    id(): string
  }
  const findById = (elements: Identifiable[], id: string) => {
    for (const e of elements) if (e.id() === id) return e;
    return undefined;
  }
  class Person implements Identifiable {
    #name: string
    #id: string
    constructor(name: string, id: string) { this.#name = name; this.#id = id; }
    id() { return this.#id }
  }
}

// An interface can extend another
{
  interface Identifiable {
    id(): string
  }
  interface Employable extends Identifiable {
    salary(): number
  }
}

// With type declarations, use intersection type instead
{
  type Identifiable = {
    id(): string
  }
  type Employable = Identifiable & {
    salary(): number
  }
}

// Interfaces can be declared in fragments
{
  interface Employable {
    id(): string
  }
  interface Employable {
    salary(): number
  }
}

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

// An interface can extend a class
{
  interface Point3D extends Point { z: number }
}

// Alternatively, use an intersection type
{
  type Point3D = Point & { z: number }
}
