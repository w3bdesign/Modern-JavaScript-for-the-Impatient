// node string-methods.js

'use strict'
console.log('// For non-global regex, String match method returns match result')
console.log('\'agents 007 and 008\'.match(/[0-9]+/):', 'agents 007 and 008'.match(/[0-9]+/)) // ['007', index: 7, ...]
console.log('// For global regex, String match method returns array of all matches')
console.log('\'agents 007 and 008\'.match(/[0-9]+/g):', 'agents 007 and 008'.match(/[0-9]+/g)) // ['007', '008']
console.log('// matchAll returns iterable for all match results')
let input = 'Start: 9:30am End: 12:00pm'
let time = /([1-9]|1[0-2]):([0-5][0-9])([ap]m)/g
for (const [, hours, minutes, period] of input.matchAll(time)) {
  console.log({hours, minutes, period})
}

console.log('// search returns index of first match')
let index = 'agents 007 and 008'.search(/[0-9]+/) // Yields index 7
console.log('index:', index) 
console.log('// replace replaces the first match, or all matches if regex is global')
let replacement = 'agents 007 and 008'.replace(/[0-9]/g, '?')
  // 'agents ??? and ???'
console.log('replacement:', replacement) 
console.log('// split can use regex for boundaries')
let str = 'Peter, Paul ,  Mary'
let parts = str.split(/\s*,\s*/)
console.log('parts:', parts) // ['Peter', 'Paul', 'Mary']
