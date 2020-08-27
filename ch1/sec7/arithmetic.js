// node arithmetic.js

'use strict'
console.log('// Arithmetic computations from this section')
console.log('1 / 2:', 1 / 2) // 0.5
console.log('34 % 2:', 34 % 2) // 0
console.log('35 % 2:', 35 % 2) // 1
console.log('3.5 % 1.2:', 3.5 % 1.2) // 1.1
console.log('2 ** 10:', 2 ** 10) // 1024
console.log('2 ** -1:', 2 ** -1) // 0.5
console.log('2 ** 0.5:', 2 ** 0.5) // 1.4142135623730951
console.log('(-2) ** 0.5:', (-2) ** 0.5) // NaN
console.log('NaN * 0.5:', NaN * 0.5) // NaN
console.log('// Combining assignment and arithmetic')
let counter = 0
counter += 10 // The same as counter = counter + 10
console.log('counter:', counter) 
console.log('// Increment')
counter++ // The same as counter = counter + 1
console.log('counter:', counter) // 11
console.log('// The two forms of increment')
counter = 4
let riddle = counter++
let enigma = ++counter
console.log('counter:', counter) // 6
console.log('riddle:', riddle) // 4
console.log('enigma:', enigma) // 6
console.log('// The + operator concatenates strings')
counter = 7
let agent = '00' + counter // The string '007'
console.log('agent:', agent) 
