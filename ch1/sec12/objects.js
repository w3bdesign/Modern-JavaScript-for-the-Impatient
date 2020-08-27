// node objects.js

'use strict'
console.log('// An object literal')
const harry = { name: 'Harry Smith', age: 42 }
console.log('harry:', harry) // { name: 'Harry Smith', age: 42 }
console.log('// Access properties with the dot notation')
let harrysAge = harry.age
console.log('harrysAge:', harrysAge) // 42
console.log('// You can modify existing properties and add new properties')
harry.age = 40
harry.salary = 90000
console.log('harry:', harry) // { name: 'Harry Smith', age: 40, salary: 90000 }
console.log('// You can mutate the properties of a const')
const sally = { name: 'Sally Lee' }
sally.age = 28 // OK—mutates the object to which sally refers

try {
  sally = { name: 'Sally Albright' }
    // Error—cannot assign a different value to a const variable
} catch (exception) {
  console.log('Error:', exception.message) // Assignment to constant variable.
}
console.log('// The delete operator deletes a property')
delete harry.salary
console.log('harry:', harry) // { name: 'Harry Smith', age: 40 }
console.log('// Accessing a nonexistent property yields undefined')
let boss = harry.supervisor // undefined
console.log('boss:', boss) 
console.log('// Use array brackets for computed properties')
let field = 'Age'
harrysAge = harry[field.toLowerCase()]
console.log('harrysAge:', harrysAge) // 40
