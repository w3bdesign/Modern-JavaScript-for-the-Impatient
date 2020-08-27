// node generators.js

'use strict'
console.log('// A generator function')
function* rangeGenerator(start, end) {
  for (let i = start; i < end; i++) 
    yield i
}
const rangeIter = rangeGenerator(10, 20)
let nextResult = rangeIter.next() // { value: 10, done: false }
console.log('nextResult:', nextResult) 
nextResult = rangeIter.next() // { value: 11, done: false }
console.log('nextResult:', nextResult) 
rangeIter.next()
rangeIter.next()
rangeIter.next()
rangeIter.next()
rangeIter.next()
rangeIter.next()
rangeIter.next()
nextResult = rangeIter.next() // { value: 19, done: false }
console.log('nextResult:', nextResult) 
nextResult = rangeIter.next() // { value: 11, done: false }
console.log('nextResult:', nextResult) // { value: undefined, done: true }

console.log('// Generator syntax alternatives')
{
  function* myGenerator(str) { for (const c of str) yield c }

  const charIter = myGenerator('Hello')
  console.log('charIter.next():', charIter.next()) // { value: 'H', done: false }
}
{
  const myGenerator = function* (str) { for (const c of str) yield c }

  const charIter = myGenerator('Hello')
  console.log('charIter.next():', charIter.next()) // { value: 'H', done: false }
}
{
  const myObject = { * myGenerator(str) { for (const c of str) yield c },  }
  // Syntactic sugar for myGenerator: function* (

  const charIter = myObject.myGenerator('Hello')
  console.log('charIter.next():', charIter.next()) // { value: 'H', done: false }
{
  class MyClass {
    * myGenerator(str) { for (const c of str) yield c }}

  const charIter = new MyClass().myGenerator('Hello')
  console.log('charIter.next():', charIter.next()) // { value: 'H', done: false }
}

console.log('// A generator can be used anywhere an iterable is accepted')
console.log('[...rangeGenerator(10, 15)]:', [...rangeGenerator(10, 15)]) // The [10, 11, 12, 13, 14]
