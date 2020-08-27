// node function-literals.js

'use strict'
console.log('// A function that we only intend to call once')
function multiplyBy10(x) { return x * 10 }
let result = [0, 1, 2, 4].map(multiplyBy10)
console.log('result:', result) // [0, 10, 20, 40]
console.log('// Better to use a function literal')
result = [0, 1, 2, 4].map(function (x) { return 10 * x })
console.log('result:', result) // [0, 10, 20, 40]
console.log('// Can give a name to the function literal')
const average = function (x, y) { return (x + y) / 2 }
result = average(6, 7)
console.log('result:', result) // 6.5
