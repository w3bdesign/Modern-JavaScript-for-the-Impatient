// node consumers.js

'use strict'

console.log('// A generator that consumes values')

function* sumGenerator() {
  let sum = 0
  while (true) {
    let nextValue = yield sum
    sum += nextValue
  }
}
const accum = sumGenerator()
console.log('accum.next():', accum.next()) // Advances to first yield and returns { value: 0, done: false }
console.log('accum.next(3):', accum.next(3)) // { value: 3, done: false }
console.log('accum.next(4):', accum.next(4)) // { value: 7, done: false }
console.log('accum.next(5):', accum.next(5)) // { value: 12, done: false }
console.log('accum.return():', accum.return()) // Shuts down and returns { value: undefined, done: true }

console.log('// Demonstrating throw')
{
  function* sumGenerator() {
    let sum = 0
    while (true) {
      try {
        let nextValue = yield sum
        sum += nextValue
      } catch {
        sum = 0
      }
    }
  }
  const accum = sumGenerator()
  console.log('accum.next():', accum.next()) // Advances to first yield and returns { value: 0, done: false }
  console.log('accum.next(3):', accum.next(3)) // { value: 3, done: false }
  console.log('accum.next(4):', accum.next(4)) // { value: 7, done: false }
  console.log('accum.next(5):', accum.next(5)) // { value: 12, done: false }
  console.log('accum.throw():', accum.throw()) // { value: 0, done: false }
}
