// node flags.js

'use strict'
console.log('// The i flag activates case insensitive matches')
let regex = /[A-Z]+\.com/i
console.log('regex.test(\'Horstmann.COM\'):', regex.test('Horstmann.COM')) // true
console.log('// You can also set the flag in the constructor')
regex = new RegExp(/[A-Z]+\.com/, 'i')
console.log('regex.test(\'Horstmann.COM\'):', regex.test('Horstmann.COM')) // true
console.log('// Determining the flags of a regular expression')
console.log('regex.flags:', regex.flags) // 'i'
console.log('regex.ignoreCase:', regex.ignoreCase) // true
console.log('// The multiline flag')
const regex2 = /^[0-9]+/m
console.log('regex2.test(\'A. Green eggs\n2. Ham\n\'):', regex2.test('A. Green eggs\n2. Ham\n')) // true
console.log('// Two flags')
const regex3 = /^[A-Z]/im
console.log('regex3.test(\'1. Green eggs\nb. Ham\n\'):', regex3.test('1. Green eggs\nb. Ham\n')) // true
