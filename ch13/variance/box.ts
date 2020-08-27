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

class Box<T extends Person> {
    #value: any[]
    constructor(v: T) { this.#value = [v] }
    getValue() { return this.#value[0].name }
    setValue(v: T) { this.#value[0] = v }
    toString() { return `Box holding ${this.#value[0]}` }
}

let bp: Box<Person> = new Box(new Person('fred'))
let be: Box<Employee> = new Box(new Employee('wilma', 150000))

console.log(bp.toString())
console.log(be.toString())

let bp2: Box<Person> = be
let be2: Box<Employee> = bp


bp.setValue(new Person('fred'))
let e: Employee = be.getValue()
console.log(e.salary)

