// node higher-order-functions.js

'use strict'
console.log('// Can store a function in a variable')
function average(x, y) {
  return (x + y) / 2
}
let f = average

console.log('// Call the function')
let result = f(6, 7)
console.log('result:', result) // 6.5
console.log('// Put another function in the variable')
f = Math.max
result = f(6, 7)
console.log('result:', result) // 7
console.log('// Pass a function to another function')
result = [0, 1, 2, 4].map(Math.sqrt)
console.log('result:', result) // [0, 1, 1.4142135623730951, 2]
