// node finding-elements.js

'use strict'
const arr = [1, 3, 3, -7, 11, -20, 3, 0]
console.log('// Check if a specific value is contained in an array')
let target = 3
let start = 4
let found = arr.includes(target, start) // true or false
let firstIndex = arr.indexOf(target, start) // first index or -1
let lastIndex = arr.lastIndexOf(target, start) // last index or -1
console.log('found:', found) // true
console.log('firstIndex:', firstIndex) // 6
console.log('lastIndex:', lastIndex) // 2
console.log('// Find a value that fulfills a condition')
let firstElement = arr.find(x => x < 0) // The first negative element 
firstIndex = arr.findIndex(x => x < 0) // The index of the first negative element
console.log('firstElement:', firstElement) // -7
console.log('firstIndex:', firstIndex) // 3
console.log('// Check if every or at least one element fulfills a condition')
const allNegative = arr.every(x => x < 0)
const atLeastOneNegative = arr.some(x => x < 0)
console.log('allNegative:', allNegative) // false
console.log('atLeastOneNegative:', atLeastOneNegative) // true
console.log('// Collect all values that fulfill a condition')
console.log('[-1, 7, 2, -9].filter(x => x < 0):', [-1, 7, 2, -9].filter(x => x < 0)) // [-1, -9]
