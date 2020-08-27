// node rest-spread.js

'use strict'
console.log('// Rest parameter gathers all remaining arguments in an array')
const average = (first = 0, ...following) => {
  let sum = first 
  for (const value of following) { sum += value }
  return sum / (1 + following.length)
}
console.log('average(1, 7, 2, 9):', average(1, 7, 2, 9)) // 4.75
console.log('// The Math.max function accepts a variable number of arguments')
let result = Math.max(3, 1, 4, 1, 5, 9, 2, 6) // Sets result to 9
console.log('result:', result) 
console.log('// But passing an array does not work')
let numbers = [1, 7, 2, 9]
result = Math.max(numbers) // Yields NaN
console.log('result:', result) 
console.log('// Remedy: Use the spread (...) operator')
result = Math.max(...numbers) // Yields 9
console.log('result:', result) 
console.log('// Note the difference between rest ... and spread ...')
Math.max(...numbers) // Spread operator—argument in function call
const max = (...values) => { /* body */} 
  // Rest declaration of parameter variable

console.log('// Even functions without rest parameters can be called with spread')
{
  const average = (x, y) => (x + y) / 2
  result = average(...numbers)
  console.log('result:', result) // 4
}
console.log('// Spread operator in array initializer')
let moreNumbers = [1, 2, 3, ...numbers] // Spread operator
console.log('moreNumbers:', moreNumbers) // [1, 2, 3, 1, 7, 2, 9]
console.log('// Not the same as rest declaration in destructuring')
let [first, ...following] = numbers // Rest declaration
console.log('first:', first) // 1
console.log('following:', following) // [7, 2, 9]
console.log('// Spread can turn string into array of characters')
let greeting = 'Hello 🌐'
let characters = [...greeting]
console.log('characters:', characters) // ['H', 'e', 'l', 'l', 'o', ' ', '🌐']
console.log('// Rest parameters also work with the function syntax')
{
  function average(first = 0, ...following) {     let sum = first 
    for (const value of following) { sum += value }
    return sum / (1 + following.length)
  }
  console.log('average(1, 7, 2, 9):', average(1, 7, 2, 9)) // 4.75
}
