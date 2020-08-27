// node enumerating-properties.js


'use strict'

console.log('// Getting a property descriptor')
let james = { name: 'James Bond' }
  // james.name is writable, enumerable, configurable
let nameDescriptor = Object.getOwnPropertyDescriptor(james, 'name')

console.log('nameDescriptor:', nameDescriptor) // { value: 'James Bond', writable: true, enumerable: true, configurable: true }

console.log('// Getting all property descriptors')
let descriptors = Object.getOwnPropertyDescriptors(james)

console.log('descriptors:', descriptors) // { name: { value: 'James Bond', writable: true, enumerable: true, configurable: true } }

console.log('// All entries of an object')
const obj = { name: 'Fred', age: 42 }
console.log('Object.entries(obj):', Object.entries(obj)) // [['name', 'Fred'], ['age', 42]]

console.log('// Iterating over the entries')
for (let [key, value] of Object.entries(obj))
  console.log(key, value)
