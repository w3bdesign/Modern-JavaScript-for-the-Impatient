// node class.js

'use strict'
console.log('// Class syntax provides constructor function, prototype')
class Employee {
  constructor(name, salary) {
    this.name = name
    this.salary = salary
  }
  raiseSalary(percent) {
    this.salary *= 1 + percent / 100
  }
}
const harry = new Employee('Harry Smith', 90000)
harry.raiseSalary(5)
const sally = new Employee('Sally Lopez', 100000)
console.log('harry:', harry) // Employee { name: 'Harry Smith', salary: 94500 }
console.log('sally:', sally) // Employee { name: 'Sally Lopez', salary: 100000 }
