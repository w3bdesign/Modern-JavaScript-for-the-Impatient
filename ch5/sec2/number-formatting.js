// node number-formatting.js

'use strict'
console.log('// Formatting an integer in different number bases')
const n = 3735928559
console.log('n.toString(16):', n.toString(16)) // 'deadbeef'
console.log('n.toString(8):', n.toString(8)) // '33653337357'
console.log('n.toString(2):', n.toString(2)) // '11011110101011011011111011101111'
console.log('// Number bases also work with floating-point numbers')
const almostPi = 3.14
console.log('almostPi.toString(16):', almostPi.toString(16)) // 3.23d70a3d70a3e
console.log('// Floating-point number formats')
const x = 1 / 600 // 0.0016666666666666668
console.log('x.toFixed(4):', x.toFixed(4)) // '0.0017'
console.log('x.toExponential(4):', x.toExponential(4)) // '1.6667e-3'
console.log('x.toPrecision(4):', x.toPrecision(4)) // '0.001667'
