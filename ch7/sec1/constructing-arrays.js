// node constructing-arrays.js

'use strict'
console.log('// Easy way to construct an array: with array literal')
let names = ['Peter', 'Paul', 'Mary']
console.log('names:', names) // ['Peter', 'Paul', 'Mary']
console.log('// To construct a big empty array, set the length')
const bigEmptyArray = []
bigEmptyArray.length = 10000
console.log('bigEmptyArray:', bigEmptyArray) // [<10000 empty items>]
console.log('// Easy way to concatenate arrays: with spread operator')
const a = [2, 3, 5, 7]
const b = 'Hello'
let elements = [...a, ...b]
console.log('elements:', elements) // [2, 3, 5, 7, 'H', 'e', 'l', 'l', 'o']
console.log('// Constructing an array from an array-like object')
const arrayLike = { length: 3 , '0': 'Peter', '1': 'Paul', '2': 'Mary'}
elements = Array.from(arrayLike)
  // elements is the array ['Peter', 'Paul', 'Mary']
  // Array.isArray(arrayLike) is false, Array.isArray(elements) is true
console.log('elements:', elements) // ['Peter', 'Paul', 'Mary']
console.log('// Generate elements with a function')
const squares = Array.from({ length: 5 }, (element, index) => index * index)
  // [0, 1, 4, 9, 16]
console.log('squares:', squares) 
console.log('// Array constructor')
names = new Array('Peter', 'Paul', 'Mary') 
names = Array('Peter', 'Paul', 'Mary')
console.log('names:', names) // ['Peter', 'Paul', 'Mary']
console.log('// Pitfall: Constructor with single numeric element makes empty array')
let numbers = new Array(10000)
console.log('numbers:', numbers) // [<10000 empty items>]
console.log('// Array literals are easier and more consistent')
names = ['Peter', 'Paul', 'Mary']
numbers = [10000]
console.log('names:', names) // ['Peter', 'Paul', 'Mary']
console.log('numbers:', numbers) // [10000]
console.log('// Array.of is consistent but still not as easy as array literals')
names = Array.of('Peter', 'Paul', 'Mary') 
let littleArray = Array.of(10000) // An array of length 1, same as [10000]
console.log('names:', names) // ['Peter', 'Paul', 'Mary']
console.log('littleArray:', littleArray) 
