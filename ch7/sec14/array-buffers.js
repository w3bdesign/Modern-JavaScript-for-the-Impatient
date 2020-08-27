// node array-buffers.js

'use strict'
console.log('// Constructing an array buffer')
const buf = new ArrayBuffer(1024 * 2)
console.log('buf:', buf) // ArrayBuffer { [Uint8Contents]: <00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 ... 1948 more bytes>, byteLength: 2048 }
console.log('// Use a DataView to read or write values at a given offset')
const view = new DataView(buf)
console.log('view:', view) // DataView { byteLength: 2048, byteOffset: 0, buffer: ArrayBuffer { [Uint8Contents]: <00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 ... 1948 more bytes>, byteLength: 2048 } }
let offset = 16
const littleEndian = true // false or omitted for big-endian byte order
const value = view.getUint32(offset, littleEndian)
console.log('value:', value) // 0
let newValue = 100000
view.setUint32(offset, newValue, littleEndian)
console.log('buf:', buf) // ArrayBuffer { [Uint8Contents]: <00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 a0 86 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 ... 1948 more bytes>, byteLength: 2048 }
console.log('// Constructing a typed array from a buffer')
// Caution: This only works if the platform endianness matches
// that of the buffer (for Intel and most ARM, little-endian)
const arr = new Uint16Array(buf) // An array of 1024 Uint16, backed by buf
console.log('arr:', arr) // Uint16Array(1024) [0, 0, 0, 0, 0, 0, 0, 0, 34464, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ... 924 more items]
