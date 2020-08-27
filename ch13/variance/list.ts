class Person {
    name: string
    constructor(name: string) { this.name = name; }
    toString() { return `Person ${this.name}` }
}

class Employee extends Person {
    salary: number
    constructor(name: string, salary: number) { super(name); this.salary = salary}
    toString() { return `Employee ${this.name} with salary ${this.salary}` }    
}

class List<T> {
    #values: T[]
    constructor() { this.#values = [] }
    getValue(i: number) { return this.#values[i] }
    <U extends T>addValue(v: U) { let result = new List<U>= this.#value = v }
    toString() { return `Box holding ${this.#value}` }
}

let pbox: Box<Person> = new Box(new Person('fred'))
let ebox: Box<Employee> = new Box(new Employee('wilma', 150000))

console.log(bp.toString())
console.log(be.toString())

bp = be
bp.setValue(new Person('fred'))
let e: Employee = be.getValue()
console.log(e.salary)


// ebox = pbox

