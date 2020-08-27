// node sparse-arrays.js

'use strict'
console.log('// Sparse arrays situation 1: Missing elements in array literal')
let someNumbers = [ , 2, , 9] // No index properties 0, 2
console.log('someNumbers:', someNumbers) // [<1 empty item>, 2, <1 empty item>, 9]
console.log('// Sparse arrays situation 2: Adding an element beyond the length')
someNumbers[100] = 0 // No index properties 4 to 99
console.log('someNumbers:', someNumbers) // [<1 empty item>, 2, <1 empty item>, 9, <96 empty items>, 0]
console.log('// Sparse arrays situation 3: Increasing the length')
const bigEmptyArray = []
bigEmptyArray.length = 10000 // No index properties
console.log('bigEmptyArray:', bigEmptyArray) // [<10000 empty items>]
console.log('// Sparse arrays situation 4: Deleting an element')
delete someNumbers[1] // No longer an index property 1
console.log('someNumbers:', someNumbers) // [<3 empty items>, 9, <96 empty items>, 0]
console.log('// Array.from replaces missing elements with undefined')
console.log('Array.from([ , 2, , 9]):', Array.from([ , 2, , 9])) // [undefined, 2, undefined, 9]
console.log('// join turns missing and undefined elements into empty strings')
console.log('[ , 2, undefined, 9].join(\' and \'):', [ , 2, undefined, 9].join(' and ')) // ' and 2 and  and 9'
console.log('// Most methods leave missing elements in place')
console.log('[ , 2, , 9].map(x => x * x):', [ , 2, , 9].map(x => x * x)) // [ , 4, , 81]
console.log('// However, sort moves them to the end')
someNumbers = [ , 2, , 9]
someNumbers.sort((x, y) => y - x) // someNumbers is now [9, 2, , , ]
console.log('someNumbers:', someNumbers) 
console.log('// To eliminate missing elements, use a filter')
console.log('[ , 2, , 9].filter(x => true):', [ , 2, , 9].filter(x => true)) // [2, 9]
