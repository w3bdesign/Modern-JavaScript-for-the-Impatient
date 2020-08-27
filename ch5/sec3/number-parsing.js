// node number-parsing.js

'use strict'
console.log('// Parsing numbers from strings')
console.log('parseFloat(\'3.14\'):', parseFloat('3.14')) // The number 3.14
console.log('parseInt(\'3\'):', parseInt('3')) // The integer 3
console.log('// Whitespace and non-numeric suffixes ignored')
console.log('parseInt(\' 3A\'):', parseInt(' 3A')) // 3—whitespace and suffix ignored
console.log('// NaN if trimmed string doesn’t start with a number')
console.log('parseInt(\' A3\'):', parseInt(' A3')) // NaN
console.log('// Hex integers are also parsed:')
console.log('// Use regex if you don’t want to allow hex, non-number suffix')
let str = '1729'
let value = undefined
const intRegex = /^[+-]?[0-9]+$/
if (intRegex.test(str)) value = parseInt(str)
console.log('value:', value) // 1729
str = '1729th'
value = undefined
console.log('value:', value) // undefined
console.log('// Regex for testing floating-point numbers')
str = '1.729e3'
value = undefined
const floatRegex = /^[+-]?((0|[1-9][0-9]*)(\.[0-9]*)?|\.[0-9]+)([eE][+-]?[0-9]+)?$/
if (floatRegex.test(str)) value = parseFloat(str)
console.log('value:', value) // 1729
console.log('// Parsing a number in a different number base')
console.log('parseInt(\'deadbeef\', 16):', parseInt('deadbeef', 16)) // 3735928559
