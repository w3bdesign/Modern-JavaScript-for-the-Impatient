// node regex-methods.js

'use strict'
console.log('// test method checks whether string contains a match')
console.log('/[0-9]+/.test(\'agent 007\'):', /[0-9]+/.test('agent 007')) // true
// Use ^...$ to see if the entire string matches
console.log('/^[0-9]+$/.test(\'agent 007\'):', /^[0-9]+$/.test('agent 007')) // false
console.log('// exec returns match data')
console.log('/[0-9]+/.exec(\'agents 007 and 008\'):', /[0-9]+/.exec('agents 007 and 008')) // ['007', index: 7, input: 'agents 007 and 008', groups: undefined]
console.log('// Use the global flag to get multiple matches')
let digits = /[0-9]+/g
console.log('digits.exec(\'agents 007 and 008\'):', digits.exec('agents 007 and 008')) // ['007', index: 7, ...]
console.log('digits.exec(\'agents 007 and 008\'):', digits.exec('agents 007 and 008')) // ['008', index: 15, ...]
console.log('digits.exec(\'agents 007 and 008\'):', digits.exec('agents 007 and 008')) // null
console.log('// Sticky flag')
// With the y or sticky flag, the match must start exactly at lastIndex 
digits = /[0-9]+/y
digits.lastIndex = 5
let result = digits.exec('agents 007 and 008') // null
console.log('result:', result) 
digits.lastIndex = 8
result = digits.exec('agents 007 and 008') // ['07', index: 8, ...]
console.log('result:', result) // ['07', index: 8, input: 'agents 007 and 008', groups: undefined]
console.log('// Too complicated? Use String.match')
let results = 'agents 007 and 008'.match(/[0-9]+/g) // ['007', '008']
console.log('results:', results) 
