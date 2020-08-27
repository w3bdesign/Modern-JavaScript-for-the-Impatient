// node producing-elements.js

'use strict'
console.log('// slice yields an array with the elements in the given range')
let arr = [2, 3, 5, 7, 11, 13, 17]
let start = 2
let end = 6
console.log('arr.slice(start, end):', arr.slice(start, end)) // [5, 7, 11, 13]
console.log('// flat flattens multidimensional arrays')
console.log('[[1, 2], [3, 4]].flat():', [[1, 2], [3, 4]].flat()) // [1, 2, 3, 4]
console.log('// You can specify how many levels you want to flatten')
console.log('[[[1, 2], [3, 4]], [[5, 6], [7, 8]]].flat(2):', [[[1, 2], [3, 4]], [[5, 6], [7, 8]]].flat(2)) // [1, 2, 3, 4, 5, 6, 7, 8]
console.log('// concat flattens any array elements')
arr = [1, 2]
let arr2 = [5, 6]
console.log('arr.concat(3, 4, arr2):', arr.concat(3, 4, arr2)) // [1, 2, 3, 4, 5, 6]
console.log('// Simpler and clearer with spreads')
console.log('[...arr, 3, 4, ...arr2]:', [...arr, 3, 4, ...arr2]) // [1, 2, 3, 4, 5, 6]
console.log('// Can control with isConcatSpreadable symbol')
// If symbol false, arrays not flattened
arr = [17, 29]
arr[Symbol.isConcatSpreadable] = false
let result = [].concat(arr) // An array with a single element [17, 29]
console.log('result:', result) // [[17, 29, [Symbol(Symbol.isConcatSpreadable)]: false]]
// If symbol true, array-like objects flattened
result = [].concat({length: 2, [Symbol.isConcatSpreadable]: true, '0': 17, '1': 29})
  // An array with two elements 17, 29
console.log('result:', result) // [17, 29]
