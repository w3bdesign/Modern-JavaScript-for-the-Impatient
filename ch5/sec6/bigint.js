// node bigint.js

'use strict'
console.log('// Big integers:')
let result = 815915283247897734345611269596115894272000000000n * BigInt(41)
  // Sets result to 33452526613163807108170062053440751665152000000000n
console.log('result:', result) 
console.log('// Cannot mix with regular numbers:')
try {
  815915283247897734345611269596115894272000000000n * 41
} catch (exception) {
  console.log('Error:', exception.message) // Cannot mix BigInt and other types, use explicit conversions
}
console.log('// BigInt methods')
let n = 123456789101112131415n
let bits = 16
console.log('BigInt.asIntN(bits, n):', BigInt.asIntN(bits, n)) // -169n
console.log('BigInt.asUintN(bits, n):', BigInt.asUintN(bits, n)) // 65367n
