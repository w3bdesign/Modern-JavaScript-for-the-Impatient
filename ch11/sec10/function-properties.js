// node function-properties.js


'use strict'

console.log('// Every function has three properties')
function square(x) { return x * x }
console.log('Object.getOwnPropertyDescriptors(square):', Object.getOwnPropertyDescriptors(square)) // { length: { value: 1, writable: false, enumerable: false, configurable: true }, name: { value: 'square', writable: false, enumerable: false, configurable: true }, prototype: { value: square {}, writable: true, enumerable: false, configurable: false } }

class Employee {
  constructor(name, salary) {
    this.name = name
    this.salary = salary
  }
  raiseSalary(percent) {
    this.salary *= 1 + percent / 100
  }
}

console.log('// The prototype of a function has a constructor property')
console.log('Employee.prototype.constructor === Employee:', Employee.prototype.constructor === Employee) // true

console.log('// Getting the class name of an object')
let obj = new Employee('Harry Smith', 90000)
console.log('obj.constructor.name:', obj.constructor.name) // Employee
