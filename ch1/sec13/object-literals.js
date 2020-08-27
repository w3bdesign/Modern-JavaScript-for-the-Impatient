// node object-literals.js

'use strict'
console.log('// An object literal can have trailing commas')
let harry = {
  name: 'Harry Smith',
  age: 42, // Add more properties below
}
console.log('harry:', harry) // { name: 'Harry Smith', age: 42 }
console.log('// It is common to assign a variable to a property of the same name')
let age = 43
harry = { name: 'Harry Smith', age: age }
  // The 'age' property is set to the value of the age variable
console.log('harry:', harry) // { name: 'Harry Smith', age: 43 }
console.log('// Then you can use this shortcut')
harry = { name: 'Harry Smith', age } // The age property is now 43
console.log('harry:', harry) // { name: 'Harry Smith', age: 43 }
console.log('// Use brackets for computed properties')
let field = 'Age'
harry = { name: 'Harry Smith', [field.toLowerCase()] : 42 }
console.log('harry:', harry) // { name: 'Harry Smith', age: 42 }
console.log('// If a property name isn’t an identifier, quote it')
harry = { name: 'Harry Smith', 'favorite beer': 'IPA' }
console.log('harry:', harry) // { name: 'Harry Smith', 'favorite beer': 'IPA' }
console.log('// To access such a property, use brackets')
harry['favorite beer'] = 'Lager'
console.log('harry:', harry) // { name: 'Harry Smith', 'favorite beer': 'Lager' }
