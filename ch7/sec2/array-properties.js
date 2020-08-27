// node array-properties.js

'use strict'
console.log('// Every array has a length property')
const names = ['Peter', 'Paul', 'Mary']
console.log('names.length:', names.length) // 3
console.log('// The length is one more than the highest index')
const someNames = [ , 'Smith', , 'Jones'] // someNames.length is 4
console.log('someNames.length:', someNames.length) 
console.log('// Length is adjusted when a value is assigned')
someNames[5] = 'Miller' // Now someNames has length 6
console.log('someNames.length:', someNames.length) 
console.log('// You can adjust the length manually')
someNames.length = 100
console.log('someNames:', someNames) // [<1 empty item>, 'Smith', <1 empty item>, 'Jones', <1 empty item>, 'Miller', <94 empty items>]
console.log('// If you decrease the length, elements with higher indexes are deleted')
someNames.length = 4 // someNames[4] and beyond are deleted
console.log('someNames:', someNames) // [<1 empty item>, 'Smith', <1 empty item>, 'Jones']
console.log('// Use the in operator to check for missing elements')
console.log('\'2\' in someNames:', '2' in someNames) // false—no property '2'
console.log('3 in someNames:', 3 in someNames) // true—there is a property '3'
console.log('// An array can have arbitrary properties, not just indexes and length')
console.log('/([1-9]|1[0-2]):([0-5][0-9])([ap]m)/.exec(\'12:15pm\'):', /([1-9]|1[0-2]):([0-5][0-9])([ap]m)/.exec('12:15pm')) // ['12:15pm', '12', '15', 'pm', index: 0, input: '12:15pm']
console.log('// A string containing a negative number is not an index property')
const squares = [0, 1, 4, 9]
squares[-1] = 1 // [ 0, 1, 4, 9, '-1': 1 ]
console.log('squares:', squares) // [0, 1, 4, 9, '-1': 1]
