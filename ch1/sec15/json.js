// node json.js

'use strict'
console.log('// Parsing a JSON string')
let harry = JSON.parse(
  '{ "name": "Harry Smith", "age": 42, "lucky numbers": [17, 29], "lucky": false }'
)
console.log('harry:', harry) // { name: 'Harry Smith', age: 42, 'lucky numbers': [17, 29], lucky: false }
console.log('// No undefined in JSON')
// Undefined properties are dropped
// Undefined array elements turn into null
let str = JSON.stringify({ name: ['Harry', undefined, 'Smith'], age: undefined })
console.log('str:', str) // {"name":["Harry",null,"Smith"]}
console.log('// Useless message:')
console.log(`harry=${harry}`)

console.log('// Remedy with JSON:')
console.log(`harry=${JSON.stringify(harry)}`)

console.log('// Alternative:')
const sally = { name: 'Sally Lee' }
console.log('harry=', harry, 'sally=', sally)

console.log('// Or even easier:')
console.log({harry, sally}) // Logs the object { harry: {
