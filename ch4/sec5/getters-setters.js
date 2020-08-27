// node getters-setters.js

'use strict'
console.log('// Getters')
{
class Person {
  constructor(last, first) {
    this.last = last;
    this.first = first
  }
  get fullName() { return `${this.last}, ${this.first}` }
}
const harry = new Person('Smith', 'Harry')
const harrysName = harry.fullName // 'Smith, Harry'
console.log('harrysName:', harrysName) 
}
console.log('// Setters')
{
  class Person {
    constructor(last, first) {
      this.last = last;
      this.first = first
    }
    get fullName() { return `${this.last}, ${this.first}` }
    set fullName(value) {
      const parts = value.split(/,\s*/)
      this.last = parts[0]
      this.first = parts[1]
    }
  }
  const harry = new Person('Smith', 'Harry')
  harry.fullName = 'Smith, Harold'
  console.log('harry:', harry) // Person { last: 'Smith', first: 'Harold' }
}
