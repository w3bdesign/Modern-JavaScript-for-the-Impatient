// node other-array-mutators.js

'use strict'
console.log('// Copying and filling')
let arr = [0, 1, 4, 9, 16, 25]
arr.copyWithin(0, 1) // arr is now [1, 4, 9, 16, 25, 25]
console.log('arr:', arr) 
arr.copyWithin(1) // arr is now [1, 1, 4, 9, 16, 25]
console.log('arr:', arr) 
arr.fill(7, 3, -1) // arr is now [1, 1, 4, 7, 7, 25]
console.log('arr:', arr) 
console.log('// Reversing')
arr = [0, 1, 4, 9, 16, 25]
arr.reverse() // arr is now [25, 16, 9, 4, 1, 0]
console.log('arr:', arr) 
console.log('// Sorting')
arr = [0, 1, 16, 25, 4, 9] 
arr.sort((x, y) => x - y) // arr is now [0, 1, 4, 9, 16, 25]
console.log('arr:', arr) 
console.log('// Caution--the default comparison function is not useful for numbers')
arr = [0, 1, 4, 9, 16, 25] 
arr.sort() // arr is now [0, 1, 16, 25, 4, 9]
console.log('arr:', arr) 
