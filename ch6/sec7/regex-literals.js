// node regex-literals.js

'use strict'
console.log('// A regular expression literal')
const timeRegex = /^([1-9]|1[0-2]):[0-9]{2} [ap]m$/
console.log('timeRegex.test(\'11:30 am\'):', timeRegex.test('11:30 am')) // true
console.log('// Escape characters from the regular expression syntas')
let fractionalNumberRegex = /[0-9]+\.[0-9]*/
console.log('fractionalNumberRegex.test(\'3.14\'):', fractionalNumberRegex.test('3.14')) // true
console.log('// Constructing a regular expression from a string')
fractionalNumberRegex = new RegExp('[0-9]+\\.[0-9]*')
console.log('fractionalNumberRegex.test(\'3.14\'):', fractionalNumberRegex.test('3.14')) // true
