// node functions.js

'use strict'
console.log('// A typical function declaration')
function average(x, y) {
  return (x + y) / 2
}

console.log('// A function call')
let result = average(6, 7) // result is set to 6.5
console.log('result:', result) 
console.log('// Parameters don’t have types. Whatever is passed is processed.')
result = average('6', '7') // result is set to 33.5
console.log('result:', result) 
console.log('// The return statement returns immediately')
function indexOf(arr, value) {
  for (let i in arr) {
    if (arr[i] === value) return i
  }
  return -1
}
const smallPrimes = [2, 3, 5, 7, 11, 13, 17]
result = indexOf(smallPrimes, 13)
console.log('result:', result) 
console.log('// When returning an object, put at least the opening { with return')
function stats(x, y) {
  return {
    average: (x + y) / 2,
    max: Math.max(x, y),
    distance: Math.abs(x - y)
  }
}
result = stats(6, 7)
console.log('result:', result) // { average: 6.5, max: 7, distance: 1 }
