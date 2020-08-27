// ts-node -O '{ "target": "es2020", "strict": true }' generic-type-variance.ts


class Person {
  name: string
  constructor(name: string) { this.name = name; }
}

class Employee extends Person {
  salary: number
  constructor(name: string, salary: number) { super(name); this.salary = salary}
}

type Pair<T> = { first: T, second: T }

let p1 = new Person('Fred')
let p2 = new Person('Barney')
let e1 = new Employee('Harry', 90000)
let e2 = new Employee('Sally', 150000)

let pp: Pair<Person> = { first: p1, second: p2 }
// Has type { first: Person, second: Person }
let pe: Pair<Employee> = { first: e1, second: e2 }
// Has type { first: Employee, second: Employee }
// Covariant:
pp = pe
/* Compile-time error
pe = pp
*/

type Formatter<T> = (arg1: T) => string
let fp: Formatter<Person> = p => `A person named ${p.name}`
// Has type (arg1: Person) => string
let fe: Formatter<Employee> = e => `An employee with salary ${e.salary}`
// Has type (arg1: Employee) => string
// Contravariant
fe = fp
/* Compile-time error
fp = fe
*/
