// node iterable-values.js


'use strict'

console.log('// Iterating over an iterable')
for (const element of [1, 2, 7, 9])

  console.log(element)

for (const ch of 'Hello')

  console.log(ch)

console.log('// Iterator yields { value: ..., done: ... } objects')
const helloIter = 'Hello'[Symbol.iterator]()


console.log('helloIter.next():', helloIter.next()) // { value: 'H', done: false }
console.log('helloIter.next():', helloIter.next()) // { value: 'e', done: false }
console.log('helloIter.next():', helloIter.next()) // { value: 'l', done: false }
console.log('helloIter.next():', helloIter.next()) // { value: 'l', done: false }
console.log('helloIter.next():', helloIter.next()) // { value: 'o', done: false }
console.log('helloIter.next():', helloIter.next()) // { value: undefined, done: true }
