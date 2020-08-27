// node for-loops.js

'use strict'
console.log('// A classic for loop')
for (let i = 1; i <= 10; i++)
  console.log(i)
let a = [2, 3, 5, 7, 11, 13]
console.log('// Visiting elements in reverse order')
for (let i = a.length - 1; i >= 0; i--)
  console.log(a[i])

console.log('// Multiple variable initializations and updates')
for (let i = 0, j = a.length - 1; i < j; i++, j--) {
  let temp = a[i]
  a[i] = a[j]
  a[j] = temp
}
console.log('a:', a) // [13, 11, 7, 5, 3, 2]
console.log('// The "for of" loop')
let arr = [, 2, , 4]
arr[9] = 100
for (const element of arr)
  console.log(element) // Prints undefined, 2, undefined, 4, undefined (5 times), 100

console.log('// "for of" visits all Unicode code points of a string')
let greeting = 'Hello 🌐'
for (const c of greeting)
  console.log(c) // Prints H e l l o, a space, and 🌐

console.log('// The "for in" loop')
let obj = { name: 'Harry Smith', age: 42 }
for (const key in obj) 
  console.log(`${key}: ${obj[key]}`)

console.log('// "for in" skips missing elements')
let numbers = [1, 2, , 4]
numbers[99] = 100
for (const i in numbers)
  console.log(`${i}: ${numbers[i]}`)

console.log('// Caution: Avoid arithmetic expressions with "for in" index')
numbers[1] = 1
for (const i in numbers)
if (numbers[i] === numbers[i + 1]) // Caution! i + 1 is '01', '11', and so on
  console.log('`duplicate at ${i}`:', `duplicate at ${i}`) // duplicate at 0
// Remedy: Convert index to number
for (const i in numbers)
if (numbers[i] === numbers[parseInt(i) + 1])
  console.log('`duplicate at ${i}`:', `duplicate at ${i}`) 
console.log('// "for in" visits all properties, not just indexes')
numbers.lucky = true
for (const i in numbers) // i is '0', '1', '3', '99', 'lucky'
  console.log(`${i}: ${numbers[i]}`)

console.log('// Alternative to looping--see next chapter')
numbers.forEach((element, key) => { console.log(`${key}: ${element}`) })

console.log('// Caution: "for in" loop over string visits each code unit')
{
  let greeting = 'Hello 🌐'
  for (const i in greeting)
    console.log(greeting[i])
      // Prints H e l l o, a space, and two broken symbols
}
