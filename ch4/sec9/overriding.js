// node overriding.js

'use strict'
console.log('// Polymorphism')
{
  class Employee {
    constructor(name, salary) { this.name = name; this.salary = salary }
    raiseSalary(percent) { this.salary *= 1 + percent / 100 }
    getSalary() { return this.salary }
  }
  
  class Manager extends Employee {
    setBonus(bonus) { this.bonus = bonus }
    getSalary() { return this.salary + this.bonus }
  }
  
  let empl = new Manager('Mary Lee', 180000); empl.setBonus(10000)
  let salary = empl.getSalary()
  console.log('salary:', salary) // 190000
  empl = new Employee('Harry Smith', 90000)
  salary =  empl.getSalary()
  console.log('salary:', salary) // 90000
}
console.log('// Calling super')
{
  class Employee {
    constructor(name, salary) { this.name = name; this.salary = salary }
    raiseSalary(percent) { this.salary *= 1 + percent / 100 }
    getSalary() { return this.salary }    
  }
  class Manager extends Employee {
    setBonus(bonus) { this.bonus = bonus }
    getSalary() { return super.getSalary() + this.bonus }
  }
  let empl = new Manager('Mary Lee', 180000);
  empl.setBonus(10000)
  let salary = empl.getSalary()
  console.log('salary:', salary) // 190000
}
console.log('// Overriding a getter')
{
  class Employee {
    constructor(name, salary) { this.name = name; this.salary = salary }
    raiseSalary(percent) { this.salary *= 1 + percent / 100 }
    getSalary() { return this.salary }    
  }
  class Manager extends Employee {
    setBonus(bonus) { this.bonus = bonus }
    getSalary() { return super.getSalary() + this.bonus }
  }
  let empl = new Manager('Mary Lee', 180000);
  empl.setBonus(10000)
  let salary = empl.getSalary()
  console.log('salary:', salary) // 190000
}
