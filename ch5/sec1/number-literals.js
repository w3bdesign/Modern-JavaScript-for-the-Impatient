// node number-literals.js

'use strict'
console.log('// Integer literals in decimal, hex, octal, binary')
console.log('42:', 42) // 42
console.log('0x2A:', 0x2A) // 42
console.log('0o52:', 0o52) // 42
console.log('0b101010:', 0b101010) // 42
console.log('// Exponential notation')
console.log('4.2e-3:', 4.2e-3) // 0.0042
console.log('// Underscores ok in number literals')
const speedOfLight = 299_792_458 // same as 299792458
console.log('speedOfLight:', speedOfLight) 
