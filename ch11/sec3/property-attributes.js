// node property-attributes.js


'use strict'

console.log('// By default, properties are enumerable, writable, configurable')
let james = { name: 'James Bond' }
  // james.name is writable, enumerable, configurable

let nameDescriptor = Object.getOwnPropertyDescriptor(james, 'name')
console.log('nameDescriptor:', nameDescriptor) // { value: 'James Bond', writable: true, enumerable: true, configurable: true }

console.log('// Defining a property dynamically')
Object.defineProperty(james, 'id', {
  value: '007',
  enumerable: true,
  writable: false,
  configurable: true
})

let idDescriptor = Object.getOwnPropertyDescriptor(james, 'id')
console.log('idDescriptor:', idDescriptor) // { value: '007', writable: false, enumerable: true, configurable: true }

console.log('// Changing a property dynamically')
Object.defineProperty(james, 'id', {
  configurable: false
}) // Now james.id can't be deleted, and its attributes can't be changed

idDescriptor = Object.getOwnPropertyDescriptor(james, 'id')
console.log('idDescriptor:', idDescriptor) // { value: '007', writable: false, enumerable: true, configurable: false }

console.log('// Defining a getter and setter dynamically')
Object.defineProperty(james, 'lastName', {
  get: function() { return this.name.split(' ')[1] },
  set: function(last) { this.name = this.name.split(' ')[0] + ' ' + last }
})


console.log(james.lastName) // Prints Bond
james.lastName = 'Smith' // Now james.name is 'James Smith'

console.log('james:', james) // { name: 'James Smith', id: '007' }

console.log('// Updating multiple properties')
Object.defineProperties(james, {
  id: { value: '007', writable: false, enumerable: true, configurable: false },
  age: { value: 42, writable: true, enumerable: true, configurable: true }
})

idDescriptor = Object.getOwnPropertyDescriptor(james, 'id')
console.log('idDescriptor:', idDescriptor) // { value: '007', writable: false, enumerable: true, configurable: false }
let ageDescriptor = Object.getOwnPropertyDescriptor(james, 'age')
console.log('ageDescriptor:', ageDescriptor) // { value: 42, writable: true, enumerable: true, configurable: true }
