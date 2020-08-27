"use strict";
class Logger {
    constructor(formatter) { this.formatter = formatter; }
    log(t) { console.log(this.formatter(t)); }
}
class Person {
    constructor(name) { this.name = name; }
    toString() { return `Person ${this.name}`; }
}
class Employee extends Person {
    constructor(name, salary) { super(name); this.salary = salary; }
    toString() { return `Employee ${this.name} with salary ${this.salary}`; }
}
let pp = new Logger(p => `Person ${p.name}`);
let pe = new Logger(e => `Employee ${e.name} with salary ${e.salary}`);
let p = new Person('Fred');
let e = new Employee('Wilma', 150000);
pp.log(p);
let pe2 = pp;
pe2.log(e);
let pp2 = pe; // unsound
pp2.log(p);
console.log(pp.log);
console.log(pe.log);
//# sourceMappingURL=printer.js.map