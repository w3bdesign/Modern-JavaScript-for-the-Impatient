// ts-node -O '{ "target": "es2020", "strict": true }' function-type-variance.ts


class Person {
    name: string
    constructor(name: string) { this.name = name; }
}

class Employee extends Person {
    salary: number
    constructor(name: string, salary: number) { super(name); this.salary = salary}
}

// Function types are contravariant in their parameter types
type PersonConsumer = (arg1: Person) => void
type EmployeeConsumer = (arg1: Employee) => void
const pc: PersonConsumer = (p: Person) => { console.log(`a person named ${p.name}`) }
const ec: EmployeeConsumer = pc 
  // OK for ec to hold subtype value

// Function types are covariant in their return types
type EmployeeProducer = (arg1: string) => Employee
type PersonProducer = (arg1: string) => Person
const ep: EmployeeProducer = (name: string) => ({ name, salary: 0 })
const pp: PersonProducer = ep 
  // OK for pp to hold subtype value

// Dropping the last parameter type yields a subtype
{
  type UnaryNumberFunction = (arg1: number) => number
  type BinaryNumberFunction = (arg1: number, arg2: number) => number
  const g = (x: number) => 2 * x
    // Type (arg1: number) => number 
  const f: (arg1: number, arg2: number) => number = g 
    // OK for f to hold subtype value
}

// Making a parameter optional yields a subtype
{
  const g = (x: number, y?: number) => y === undefined ? x : (x + y) / 2
    // Type (arg1: number, arg2?: number) => number
  const f: (arg1: number, arg2: number) => number = g
    // OK for f to hold subtype value
}

// Adding a rest parameter yields a subtype
{
  let g = (x: number, y: number, ...following: number[]) => Math.max(x, y, ...following)
    // Type: (arg1: number, arg2: number, ...rest: number[]) => number
  let f: (arg1: number, arg2: number) => number = g
    // OK for f to hold subtype value
}
