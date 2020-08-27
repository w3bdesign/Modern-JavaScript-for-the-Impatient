// node arrow-functions.js

'use strict'
console.log('// An arrow function')
const average = (x, y) => (x + y) / 2
console.log('average(3, 4):', average(3, 4)) // 3.5
console.log('// No parentheses required for a single parameter')
const multiplyBy10 = x => x * 10
console.log('multiplyBy10(42):', multiplyBy10(42)) // 420
console.log('// Empty parentheses if no parameter')
const dieToss = () => Math.trunc(Math.random() * 6) + 1
console.log(dieToss())
console.log(dieToss())
console.log('// Use a block statement for complex arrow functions')
const indexOf = (arr, value) => {
    for (let i in arr) {
      if (arr[i] === value) return i
    }
    return -1
  }
console.log('indexOf([3, 1, 4, 1, 5, 9], 5):', indexOf([3, 1, 4, 1, 5, 9], 5)) // 4
console.log('// Clearer to use braces if an arrow function has multiple lines')
{
  const average = (x, y) => {
    return (x + y) / 2
  }
  console.log('average(3, 4):', average(3, 4)) // 3.5
}
console.log('// Caution: Parentheses needed to return an object literal')
const stats = (x, y) => ({
    average: (x + y) / 2,
    distance: Math.abs(x - y)
  })
console.log('stats(3, 4):', stats(3, 4)) // { average: 3.5, distance: 1 }
