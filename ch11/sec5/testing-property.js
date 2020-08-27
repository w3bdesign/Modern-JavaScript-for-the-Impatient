// node testing-property.js


'use strict'

console.log('// The in operator works with properties whose value is undefined')
const harry = { name: 'Harry', partner: undefined }

console.log('\'partner\' in harry:', 'partner' in harry) // true
const obj = harry

console.log('// hasOwnProperty doesn’t look into the prototype chain')
let stringOrSymbol = 'partner'
let result = obj.hasOwnProperty(stringOrSymbol)

console.log('result:', result) // true
stringOrSymbol = 'toString'    
result = obj.hasOwnProperty(stringOrSymbol)

console.log('result:', result) // false
// In contrast, in looks into prototype
result = stringOrSymbol in obj

console.log('result:', result) // true
console.log('// Checking if a property is enumerable')
result = obj.propertyIsEnumerable(stringOrSymbol)

console.log('result:', result) // false
stringOrSymbol = 'partner'
result = obj.propertyIsEnumerable(stringOrSymbol)

console.log('result:', result) // true
