// node constructors.js

'use strict'
console.log('// Constructor function initializes object')
function Employee(name, salary) {
  this.name = name
  this.salary = salary
}

console.log('// Invoke constructor function with new')
const harry = new Employee('Harry Smith', 90000)
console.log('harry:', harry) // Employee { name: 'Harry Smith', salary: 90000 }
console.log('// Shared methods are attached to the constructor’s prototype')
Employee.prototype.raiseSalary = function(percent) {
  this.salary *= 1 + percent / 100
}
harry.raiseSalary(5)
console.log('harry:', harry) // Employee { name: 'Harry Smith', salary: 94500 }
const sameMethod = harry.raiseSalary === Employee.prototype.raiseSalary
console.log('sameMethod:', sameMethod) // true
