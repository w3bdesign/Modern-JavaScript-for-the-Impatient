// node comparisons.js

'use strict'
console.log('// Relational operators work as expected with numbers')
console.log('3 < 4:', 3 < 4) // true
console.log('3 >= 4:', 3 >= 4) // false
console.log('// Any comparison with NaN yields false')
console.log('NaN < 4:', NaN < 4) // false
console.log('NaN >= 4:', NaN >= 4) // false
console.log('NaN <= NaN:', NaN <= NaN) // false
console.log('// Relational operators use lexicographic order with strings')
console.log('\'Hello\' < \'Goodbye\':', 'Hello' < 'Goodbye') // false—H comes after G
console.log('\'Hello\' < \'Hi\':', 'Hello' < 'Hi') // true—e comes before i
console.log('// Operands of different types are never strictly equal')
console.log('\'42\' === 42:', '42' === 42) // false—different types
undefined === null // false
console.log('\'42\' === \'4\' + 2:', '42' === '4' + 2) // true—same string value '42'
console.log('// No two NaN values are equal to another')
let x = NaN
x === NaN
console.log('// Two object references are equal if they refer to the same object')
let harry = { name: 'Harry Smith', age: 42 }
let harry2 = harry
console.log(harry === harry2) // true—two references to the same object
let harry3 = { name: 'Harry Smith', age: 42 }
console.log(harry === harry3) // false—different objects
