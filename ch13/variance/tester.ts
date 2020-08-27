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

let p = new Person('fred')
let e = new Employee('wilma', 150000)

type Tester<T> = {
    test(t: T): boolean
} 

let tp: Tester<Person> = {
  test: (arg: Person) => arg.name.indexOf("e") >= 0
}

let te: Tester<Employee> = {
  test: (arg: Employee) => {
    if (arg.salary === undefined) throw Error('no salary');
      // This error should never happen
    return arg.salary < 100000
  }
}

let tp2: Tester<Person> = te // CAUTION: This is unsound
console.log(tp2.test(p))

let te2: Tester<Employee> = tp // This is ok--if tp is willing to test any Person, it surely can test  Employee

