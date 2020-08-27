class Logger<T> {
    formatter:  (arg1: T) => string
    constructor(formatter: (arg1: T) => string) { this.formatter = formatter }    
    log(t: T) { console.log(this.formatter(t)) }
}

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

let pp = new Logger<Person>(p => `Person ${p.name}`)
let pe = new Logger<Employee>(e => `Employee ${e.name} with salary ${e.salary}`)

let p = new Person('Fred');
let e = new Employee('Wilma', 150000);

pp.log(p)
let pe2: Logger<Employee> = pp
pe2.log(e)
let pp2: Logger<Person> = pe // Error--this assignment would be unsound
pp2.log(p)
