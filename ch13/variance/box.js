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
var _value;
class Person {
    constructor(name) { this.name = name; }
    toString() { return `Person ${this.name}`; }
}
class Employee extends Person {
    constructor(name, salary) { super(name); this.salary = salary; }
    toString() { return `Employee ${this.name} with salary ${this.salary}`; }
}
class Box {
    constructor(v) {
        _value.set(this, void 0);
        __classPrivateFieldSet(this, _value, [v]);
    }
    getValue() { return __classPrivateFieldGet(this, _value)[0].name; }
    setValue(v) { __classPrivateFieldGet(this, _value)[0] = v; }
    toString() { return `Box holding ${__classPrivateFieldGet(this, _value)[0]}`; }
}
_value = new WeakMap();
let bp = new Box(new Person('fred'));
let be = new Box(new Employee('wilma', 150000));
console.log(bp.toString());
console.log(be.toString());
let bp2 = be;
let be2 = bp;
bp.setValue(new Person('fred'));
let e = be.getValue();
console.log(e.salary);
//# sourceMappingURL=box.js.map