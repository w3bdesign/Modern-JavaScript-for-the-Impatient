// node typed-arrays.js

'use strict'
console.log('// Constructing typed arrays')
const iarr = new Int32Array(1024)
console.log('iarr:', iarr) // Int32Array(1024) [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ... 924 more items]
const farr = Float32Array.of(1, 0.5, 0.25, 0.125, 0.0625, 0.03215, 0.015625)
console.log('farr:', farr) // Float32Array(7) [1, 0.5, 0.25, 0.125, 0.0625, 0.03215000033378601, 0.015625]
const uarr = Uint32Array.from(farr, x => 1 / x)
  // An Uint32Array with elements [1, 2, 4, 8, 16, 32, 64]
console.log('uarr:', uarr) // Uint32Array(7) [1, 2, 4, 8, 16, 31, 64]
console.log('// Assigning to out-of-range indexes and to properties')
farr[-1] = 2 // No effect
farr[0.5] = 1.414214 // No effect
farr.lucky = true // Sets the lucky property
console.log('farr:', farr) // Float32Array(7) [1, 0.5, 0.25, 0.125, 0.0625, 0.03215000033378601, 0.015625, lucky: true]
console.log('// Assigning to integer arrays truncates values')
iarr[0] = 40000.25 // Sets iarr[0] to -25536
console.log('iarr:', iarr) // Int32Array(1024) [40000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ... 924 more items]
console.log('// The set method copies values at an offset')
let source = [2, 3, 5, 7, 11]
let offset = 16
iarr.set(source, offset)
console.log('iarr:', iarr) // Int32Array(1024) [40000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 5, 7, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ... 924 more items]
console.log('// The subarray method yields a "live" slice')
const sub = iarr.subarray(16, 32)
console.log('sub:', sub) // Int32Array(16) [2, 3, 5, 7, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
sub[0] = 1024 // Now iarr[16] is also 1024
console.log('iarr:', iarr) // Int32Array(1024) [40000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1024, 3, 5, 7, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ... 924 more items]
