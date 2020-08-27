// node subclass-construction.js

'use strict'
class Employee {
  constructor(name, salary) { this.name = name; this.salary = salary }
  raiseSalary(percent) { this.salary *= 1 + percent / 100 }
  getSalary() { return this.salary }    
}
console.log('// Constructor')
{
  class Manager extends Employee {
    constructor(name, salary, bonus) {
      super(name, salary) // Must call superclass constructor
      this.bonus = bonus // Afterwards, this is valid
    }
    getSalary() { return super.getSalary() + this.bonus }
  }
  let boss = new Manager('Mary Lee', 180000, 10000);
  let salary =  boss.getSalary()
  console.log('salary:', salary) // 190000
}
console.log('// If no constructor, arguments passed to superclass constructor')
{
  class Manager extends Employee {
    // No constructor
    getSalary() { return super.getSalary() + this.bonus }
    setBonus(bonus) { this.bonus = bonus }
  }
  
  const boss = new Manager('Mary Lee', 180000) // Calls Employee('Mary Lee', 180000)
  boss.setBonus(10000)
  console.log('boss:', boss) // Manager { name: 'Mary Lee', salary: 180000, bonus: 10000 }
  let salary =  boss.getSalary()
  console.log('salary:', salary) // 190000
}
