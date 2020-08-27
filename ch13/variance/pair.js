"use strict";
class Person {
    constructor(name) { this.name = name; }
}
class Employee extends Person {
    constructor(name, salary) { super(name); this.salary = salary; }
}
let p1 = new Person('fred');
let p2 = new Person('barney');
let e1 = new Employee('wilma', 150000);
let e2 = new Employee('betty', 90000);
class Pair {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
}
let pp = new Pair(p1, p2);
let pe = new Pair(e1, e2);
let pp2 = pe; // CAUTION: Unsound--we can now put a non-Employee into pe
pp2.first = p1;
if (pe.first.salary === undefined)
    throw Error('no salary');
// let pe2 = pp // Doesn't compile because Pair<Employee> has first.salary, second.salary
//# sourceMappingURL=pair.js.map