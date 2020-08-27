// ts-node -O '{ "target": "es2020", "strict": true }' mapped-types.ts


class Person {
  name: string
  constructor(name: string) { this.name = name; }
}

class Employee extends Person {
  salary: number
  constructor(name: string, salary: number) { super(name); this.salary = salary}
}

// A mapped type
type Point = {
  [propname in 'x'|'y']: number
}

// Transforming an existing type
type ReadonlyEmployee = {
  readonly [propname in keyof Employee]: Employee[propname]
}

// The Readonly mapped type
const distanceFromOrigin = (p: Readonly<Point>) => 
  Math.sqrt(Math.pow(p.x, 2) + Math.pow(p.y, 2))

// The Pick mapped type
let str: Pick<string, 'length' | 'substring'> = 'Fred'
  // Can only apply length and substring to str

// Can remove modifiers
type Writable<T> = {
  -readonly [propname in keyof T]: T[propname]
}
type AllRequired<T> = {
  [propname in keyof T]-?: T[propname]
}
