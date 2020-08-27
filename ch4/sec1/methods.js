// node methods.js

'use strict'
console.log('// A plain object')
let harry = { name: 'Harry Smith', salary: 90000 }

console.log('// An object with a method')
harry = {
  name: 'Harry Smith',
  salary: 90000,
  raiseSalary: function(percent) {
    this.salary *= 1 + percent / 100
  }
}

console.log('// Invoking the method')
harry.raiseSalary(10)
console.log('harry:', harry) // { name: 'Harry Smith', salary: 99000.00000000001, raiseSalary: [Function: raiseSalary] }
console.log('// Shortcut syntax for a method')
harry = {
  name: 'Harry Smith',
  salary: 90000,
  raiseSalary(percent) {
    this.salary *= 1 + percent / 100
  }
}
