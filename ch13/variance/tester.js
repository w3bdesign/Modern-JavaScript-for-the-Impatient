"use strict";
class Person {
    constructor(name) { this.name = name; }
    toString() { return `Person ${this.name}`; }
}
class Employee extends Person {
    constructor(name, salary) { super(name); this.salary = salary; }
    toString() { return `Employee ${this.name} with salary ${this.salary}`; }
}
let p = new Person('fred');
let e = new Employee('wilma', 150000);
let tp = {
    test: (arg) => arg.name.indexOf("e") >= 0
};
let te = {
    test: (arg) => {
        if (arg.salary === undefined)
            throw Error('no salary');
        // This error should never happen
        return arg.salary < 100000;
    }
};
let tp2 = te; // CAUTION: This is unsound
console.log(tp2.test(p));
let te2 = tp; // This is ok--if tp is willing to test any Person, it surely can test  Employee
//# sourceMappingURL=tester.js.map