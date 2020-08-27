// node protecting-objects.js


'use strict'

console.log('// Freezing objects')
const frozen = Object.freeze({ name: 'Harry' })

try {
  frozen.name = 'Fred'
} catch (exception) {
  console.log('Error:', exception.message) // Cannot assign to read only property 'name' of object '#<Object>'
}

const fred = Object.freeze({ name: 'Fred', luckyNumbers: [17, 29] })
fred.luckyNumbers[0] = 13 // OK—luckyNumbers isn't frozen
