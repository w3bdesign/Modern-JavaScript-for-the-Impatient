// node numbers.js

'use strict'
console.log('// The safe integer range')
console.log('Number.MAX_SAFE_INTEGER:', Number.MAX_SAFE_INTEGER) // 9007199254740991
console.log('10 * Number.MAX_SAFE_INTEGER:', 10 * Number.MAX_SAFE_INTEGER) // 90071992547409900
console.log('// Converting strings to numbers')
const notQuitePi = parseFloat('3.14') // The number 3.14
const evenLessPi = parseInt('3') // The integer 3
console.log('notQuitePi:', notQuitePi) // 3.14
console.log('evenLessPi:', evenLessPi) 
console.log('// Converting numbers to strings')
const notQuitePiString = notQuitePi.toString() // The string '3.14'
const evenLessPiString = (3).toString() // The string '3'
console.log('notQuitePiString:', notQuitePiString) // 3.14
console.log('evenLessPiString:', evenLessPiString) 
console.log('// This floating-point number is truncated to an integer')
console.log('\'Hello\'.substring(0, 2.5):', 'Hello'.substring(0, 2.5)) // The string 'He'
console.log('// This one is not')
console.log('\'Hello\'[2.5]:', 'Hello'[2.5]) // undefined
