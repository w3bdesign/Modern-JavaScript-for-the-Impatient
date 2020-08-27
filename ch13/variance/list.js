"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _values;
class Person {
    constructor(name) { this.name = name; }
    toString() { return `Person ${this.name}`; }
}
class Employee extends Person {
    constructor(name, salary) { super(name); this.salary = salary; }
    toString() { return `Employee ${this.name} with salary ${this.salary}`; }
}
class List {
    constructor() {
        _values.set(this, void 0);
        __classPrivateFieldSet(this, _values, []);
    }
    getValue(i) { return __classPrivateFieldGet(this, _values)[i]; }
}
_values = new WeakMap();
addValue(v, U);
{
    let result = new List < U >= this., v;
}
toString();
{
    return `Box holding ${this.}`;
}
let pbox = new Box(new Person('fred'));
let ebox = new Box(new Employee('wilma', 150000));
console.log(bp.toString());
console.log(be.toString());
bp = be;
bp.setValue(new Person('fred'));
let e = be.getValue();
console.log(e.salary);
// ebox = pbox
//# sourceMappingURL=list.js.map