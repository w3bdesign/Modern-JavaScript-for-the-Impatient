// node class-expressions.js

'use strict'
console.log('// A class expression--note that the class has no name')
const Employee = class {
  constructor(name, salary) {
    this.name = name
    this.salary = salary
  }
  raiseSalary(percent) {
    this.salary *= 1 + percent / 100
  }
}

let empl = new Employee('Harry Smith', 90000)
empl.raiseSalary(10)
console.log('empl:', empl) // Employee { name: 'Harry Smith', salary: 99000.00000000001 }
console.log('// Mixing in a capability; here a nice toString method')
const withToString = base => 
  class extends base {
    toString() {
      let result = '{' 
      for (const key in this) {
        if (result !== '{') result += ', ' 
        result += `${key}=${this[key]}` 
      }
      return result + '}' 
    }
  }

console.log('// Augmenting a class')
const PrettyPrintingEmployee = withToString(Employee) // A new class
const e = new PrettyPrintingEmployee('Harry Smith', 90000) // An instance of the new class
console.log(e.toString()) 
  // Prints  {name=Harry Smith, salary=90000}, not [object Object]
