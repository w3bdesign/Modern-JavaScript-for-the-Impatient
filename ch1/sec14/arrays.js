// node arrays.js

'use strict'
console.log('// Array literals are enclosed in square brackets')
const numbers = [1, 2, 3, 'many']
console.log('numbers:', numbers) // [1, 2, 3, 'many']
console.log('// An array can have missing elements')
const someNumbers = [ , 2, , 9] // No properties '0', '2'
console.log('someNumbers:', someNumbers) // [<1 empty item>, 2, <1 empty item>, 9]
console.log('// You can add new elements past the end')
someNumbers[6] = 11 // Now someNumbers has length 7
console.log('someNumbers:', someNumbers) // [<1 empty item>, 2, <1 empty item>, 9, <2 empty items>, 11]
console.log('// A trailing comma does not indicate a missing element')
const developers = [
  'Harry Smith',
  'Sally Lee',
  // Add more elements above
]
console.log('developers:', developers) // ['Harry Smith', 'Sally Lee']
console.log('// Since arrays are objects, you can add arbitrary properties')
numbers.lucky = true
console.log('numbers:', numbers) // [1, 2, 3, 'many', lucky: true]
console.log('// Converting an array to a string')
const str = '' + [1, 2, 3]
console.log('str:', str) // 1,2,3
console.log('// A two-dimensional array is an array of arrays')
const melancholyMagicSquare = [
  [16, 3, 2, 13],
  [5, 10, 11, 8],
  [9, 6, 7, 12],
  [4, 15, 14, 1]
]
console.log('melancholyMagicSquare:', melancholyMagicSquare) // [[16, 3, 2, 13], [5, 10, 11, 8], [9, 6, 7, 12], [4, 15, 14, 1]]
console.log('// Use two brackets to access an element')
const element = melancholyMagicSquare[1][2] // 11
console.log('element:', element) 
