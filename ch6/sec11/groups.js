// node groups.js

'use strict'
console.log('// A group for each time component')
let time = /([1-9]|1[0-2]):([0-5][0-9])([ap]m)/
let result = time.exec('Lunch at 12:15pm')
  // ['12:15pm', '12', '15', 'pm', index: 9, ...]
console.log('result:', result) // ['12:15pm', '12', '15', 'pm', index: 9, input: 'Lunch at 12:15pm', groups: undefined]
console.log('// Example: Invoice items')
const item = 'Blackwell Toaster    USD29.95'
const regex1 = /(\p{L}+(\s+\p{L}+)*)\s+([A-Z]{3})([0-9.]*)/u
console.log('regex1.exec(item):', regex1.exec(item)) // ['Blackwell Toaster USD29.95', 'Blackwell Toaster', ' Toaster', 'USD', '29.95', index: 0, input: 'Blackwell Toaster USD29.95', groups: undefined]
console.log('// Noncapturing group--parentheses for repetition don’t capture')
const regex2 = /(\p{L}+(?:\s+\p{L}+)*)\s+([A-Z]{3})([0-9.]*)/u
console.log('regex2.exec(item):', regex2.exec(item)) // ['Blackwell Toaster USD29.95', 'Blackwell Toaster', 'USD', '29.95', index: 0, input: 'Blackwell Toaster USD29.95', groups: undefined]
console.log('// Can match against capture contents')
const regex3 = /(['"]).*\1/
const quotedName1 = `'Fred'`
const quotedName2 = `"Fred"`
const misquotedName = `"Fred'`
console.log('regex3.test(quotedName1):', regex3.test(quotedName1)) // true
console.log('regex3.test(quotedName2):', regex3.test(quotedName2)) // true
console.log('regex3.test(misquotedName):', regex3.test(misquotedName)) // false
console.log('// Better to use named capture')
let lineItemRegex = /(?<item>\p{L}+(\s+\p{L}+)*)\s+(?<currency>[A-Z]{3})(?<price>[0-9.]*)/u
result = lineItemRegex.exec('Blackwell Toaster    USD29.95')
let groupMatches = result.groups
  // { item: 'Blackwell Toaster', currency: 'USD', price: '29.95' }
console.log('groupMatches:', groupMatches) // [Object: null prototype] { item: 'Blackwell Toaster', currency: 'USD', price: '29.95' }
const regex4 = /(?<quote>['"]).*\k<quote>/
console.log('regex4.test(quotedName1):', regex4.test(quotedName1)) // true
console.log('regex4.test(quotedName2):', regex4.test(quotedName2)) // true
console.log('regex4.test(misquotedName):', regex4.test(misquotedName)) // false
