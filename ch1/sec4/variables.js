// node variables.js

'use strict'
// Note: All examples use strict mode (Section 3.8) except for a few 
// cases that demonstrate a peculiarity of non-strict mode
console.log('// A variable declaration')
let counter = 0

console.log('// A JavaScript variable doesn’t have a declared type')
counter = 'zero'

let x // Declares x and sets it to undefined
console.log('x:', x) 
console.log('// A constant declaration')
const PI = 3.141592653589793

console.log('// Trying to modify a constant is an error')
// Here we catch the exception from attempting a modification
// See Section 3.16 for catching exceptions
try {
  PI = 3
} catch (exception) {
  console.log('Error:', exception.message) // Assignment to constant variable.
}
