// node subclasses.js

'use strict'
console.log('// A superclass and a subclass')
class Employee {
  constructor(name, salary) { this.name = name; this.salary = salary }
  raiseSalary(percent) { this.salary *= 1 + percent / 100 }
  getSalary() { return this.salary }
}

class Manager extends Employee {
  getSalary() { return this.salary + this.bonus }
  setBonus(bonus) { this.bonus = bonus }
}

console.log('// The raiseSalary method is inherited')
const boss = new Manager('Mary Lee', 180000)
boss.setBonus(10000)
boss.raiseSalary(10) // Calls Employee.prototype.raiseSalary
console.log('boss:', boss) // Manager { name: 'Mary Lee', salary: 198000.00000000003, bonus: 10000 }
console.log('// The instanceof operator')
console.log('boss instanceof Employee:', boss instanceof Employee) // true
