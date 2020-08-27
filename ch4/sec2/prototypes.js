// node prototypes.js

'use strict'
console.log('// Replicated methods')
{
  function createEmployee(name, salary) {
    return {
      name: name,
      salary: salary,
      raiseSalary: function(percent) {
        this.salary *= 1 + percent / 100
      }
    }    
  }
  const harry = createEmployee('Harry Smith', 90000)
  const sally = createEmployee('Sally Lopez', 100000)
  console.log('harry:', harry) // { name: 'Harry Smith', salary: 90000, raiseSalary: [Function: raiseSalary] }
  console.log('sally:', sally) // { name: 'Sally Lopez', salary: 100000, raiseSalary: [Function: raiseSalary] }
  harry.raiseSalary === sally.raiseSalary
}
console.log('// Shared methods')
{
  const employeePrototype = {
    raiseSalary: function(percent) {
      this.salary *= 1 + percent / 100
    }
  }
function createEmployee(name, salary) {
    const result = { name, salary }
    Object.setPrototypeOf(result, employeePrototype)
    return result
  }
  const harry = createEmployee('Harry Smith', 90000)
  const sally = createEmployee('Sally Lopez', 100000)
  console.log('harry:', harry) // { name: 'Harry Smith', salary: 90000 }
  console.log('sally:', sally) // { name: 'Sally Lopez', salary: 100000 }
  harry.raiseSalary === sally.raiseSalary
  // Note: You can override the prototype property
  harry.raiseSalary = function(rate) { this.salary = Number.MAX_VALUE }
  harry.raiseSalary(5)
  sally.raiseSalary(5)
  console.log('harry:', harry) // { name: 'Harry Smith', salary: 1.7976931348623157e+308, raiseSalary: [Function (anonymous)] }
  console.log('sally:', sally) // { name: 'Sally Lopez', salary: 105000 }
}
