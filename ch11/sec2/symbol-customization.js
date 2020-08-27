// node symbol-customization.js


'use strict'

console.log('// Customizing the behavior of instanceof')
{
  class Iterable {
    static [Symbol.hasInstance](obj) {
      return Symbol.iterator in obj
    }
  }
  const b = [1, 2, 3] instanceof Iterable // true
  
  console.log('b:', b) 
}

console.log('// Customizing the behavior of concat')
{
  const a = [1, 2]
  const b = [3, 4]
  a[Symbol.isConcatSpreadable] = false
  const c = [].concat(a, b) // [[1, 2], 3, 4]
  
  console.log('c:', c) // [[1, 2, [Symbol(Symbol.isConcatSpreadable)]: false], 3, 4]
}

console.log('// Customizing the behavior of toString')
{
  const harry = { name: 'Harry Smith', salary: 100000 }
  harry[Symbol.toStringTag] = 'Employee'
  console.log(harry.toString())
    // Now toString yields '[object Employee]
  
}

console.log('// Setting toStringTag in constructor')
{
  class Employee {
    constructor(name, salary) {
      this[Symbol.toStringTag] = 'Employee'
  this.name = name; this.salary = salary;
    }
  // . . .
  }
  

  const harry = new Employee('Harry Smith', 100000)
  console.log(harry.toString())
}

console.log('// Providing a getter for toStringTag')
{
  class Employee {
  constructor(name, salary) {
    this.name = name; this.salary = salary;
  }
    get [Symbol.toStringTag]() { return JSON.stringify(this) }
  }
  

  const harry = new Employee('Harry Smith', 100000)
  console.log(harry.toString())  
}

console.log('// Controlling type conversion')
{
  class Percent {
    constructor(rate) { this.rate = rate }
    toString() { return `${this.rate}%` }
    valueOf() { return this.rate * 0.01 }
  }
  const result = new Percent(99.44)
  console.log('Result: ' + result) // Prints Result: 0.9944
  
}

{
  class Percent {
    constructor(rate) { this.rate = rate }
    toString() { return `${this.rate}%` }
    valueOf() { return this.rate * 0.01 }
    [Symbol.toPrimitive](hint) {
      if (hint === 'number') return this.rate * 0.01
      else return `${this.rate}%`
    }
    
  }
  const result = new Percent(99.44)
  console.log('Result: ' + result) // Prints Result: 0.9944
  
}

console.log('// map produces the same type that it receives')
{
  class MyArray extends Array {}
  const myValues = new MyArray(1, 2, 7, 9)
  const result = myValues.map(x => x * x) // Yields a MyArray
  
  console.log('result:', result) // MyArray(4) [1, 4, 49, 81]
  console.log('result instanceof MyArray:', result instanceof MyArray) // true
}

console.log('// Not appropriate for all types')
{
  class Range extends Array {
    constructor(start, end) {
      super()
      for (let i = 0; i < end - start; i++)
        this[i] = start + i
    } 
  }
  const myRange = new Range(10, 99)
  const result = myRange.map(x => x * x) // Should not be a Range
  
  console.log('result:', result) // Range(89) [100, 121, 144, 169, 196, 225, 256, 289, 324, 361, 400, 441, 484, 529, 576, 625, 676, 729, 784, 841, 900, 961, 1024, 1089, 1156, 1225, 1296, 1369, 1444, 1521, 1600, 1681, 1764, 1849, 1936, 2025, 2116, 2209, 2304, 2401, 2500, 2601, 2704, 2809, 2916, 3025, 3136, 3249, 3364, 3481, 3600, 3721, 3844, 3969, 4096, 4225, 4356, 4489, 4624, 4761, 4900, 5041, 5184, 5329, 5476, 5625, 5776, 5929, 6084, 6241, 6400, 6561, 6724, 6889, 7056, 7225, 7396, 7569, 7744, 7921, 8100, 8281, 8464, 8649, 8836, 9025, 9216, 9409, 9604]
  console.log('result instanceof Range:', result instanceof Range) // true
}

console.log('// Remedy: Specify species')
{
  class Range extends Array {
    constructor(start, end) {
      super()
      for (let i = 0; i < end - start; i++)
        this[i] = start + i
    }
    static get [Symbol.species]() { return Array }
  }
  const myRange = new Range(10, 99)
  const result = myRange.map(x => x * x) // Should not be a Range
  
  console.log('result:', result) // [100, 121, 144, 169, 196, 225, 256, 289, 324, 361, 400, 441, 484, 529, 576, 625, 676, 729, 784, 841, 900, 961, 1024, 1089, 1156, 1225, 1296, 1369, 1444, 1521, 1600, 1681, 1764, 1849, 1936, 2025, 2116, 2209, 2304, 2401, 2500, 2601, 2704, 2809, 2916, 3025, 3136, 3249, 3364, 3481, 3600, 3721, 3844, 3969, 4096, 4225, 4356, 4489, 4624, 4761, 4900, 5041, 5184, 5329, 5476, 5625, 5776, 5929, 6084, 6241, 6400, 6561, 6724, 6889, 7056, 7225, 7396, 7569, 7744, 7921, 8100, 8281, 8464, 8649, 8836, 9025, 9216, 9409, 9604]
  console.log('result instanceof Range:', result instanceof Range) // false
}
