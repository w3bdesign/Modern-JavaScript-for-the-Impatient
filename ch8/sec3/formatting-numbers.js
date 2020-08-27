// node formatting-numbers.js

'use strict'
console.log('// Formatting localized numbers')
let number = 123456.78
console.log('number.toLocaleString(\'de\'):', number.toLocaleString('de')) // '123.456,78'
console.log('// Alternative: Use formatter')
let formatter = new Intl.NumberFormat('de')
console.log('formatter.format(number):', formatter.format(number)) // '123.456,78'
console.log('// Can get fine-grained structure of formatted result')
let result = formatter.formatToParts(number)
console.log('result:', result) // [{ type: 'integer', value: '123' }, { type: 'group', value: '.' }, { type: 'integer', value: '456' }, { type: 'decimal', value: ',' }, { type: 'fraction', value: '78' }]
console.log('// Formatting Thai numerals')
let result1 = number.toLocaleString('th-u-nu-thai')
let result2 = new Intl.NumberFormat('th-u-nu-thai').format(number)
  // Both yield '๑๒๓,๔๕๖.๗๘'
console.log('result1:', result1) 
console.log('result2:', result2) 
console.log('// Options are supplied after the locale')
result1 = number.toLocaleString('de', { style: 'currency', currency: 'EUR' })
formatter = new Intl.NumberFormat('de', { style: 'currency', currency: 'EUR' })
result2 = formatter.format(number)
  // Both yield '123.456,78 €'
console.log('result1:', result1) 
console.log('result2:', result2) 
