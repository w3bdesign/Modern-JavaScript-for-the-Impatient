// node deleting-adding.js

'use strict'
console.log('// Deleting or adding at the end of an array')
let x = 36
let arr = [0, 1, 4, 9, 16, 25]
let deletedElement = arr.pop() // arr is now [0, 1, 4, 9, 16]
console.log('arr:', arr) 
let newLength = arr.push(x) // arr is now [0, 1, 4, 9, 16, x]
console.log('arr:', arr) 
console.log('deletedElement:', deletedElement) // 25
console.log('newLength:', newLength) 
console.log('// Alternative to pop and push')
arr = [0, 1, 4, 9, 16, 25]
arr.length--
arr[arr.length] = x
console.log('arr:', arr) // [0, 1, 4, 9, 16, 36]
console.log('// Deleting or adding at the beginning of an array')
arr = [0, 1, 4, 9, 16, 25]
deletedElement = arr.shift() // arr is now [1, 4, 9, 16, 25]
console.log('arr:', arr) 
newLength = arr.unshift(x) // arr is now [x, 1, 4, 9, 16, 25]
console.log('arr:', arr) 
console.log('deletedElement:', deletedElement) // 0
console.log('newLength:', newLength) 
console.log('// Appending and prepending multiple elements')
arr = [9]
arr.push(16, 25) // arr is now [9, 16, 25]
console.log('arr:', arr) 
arr.unshift(0, 1, 4) // arr is now [0, 1, 4, 9, 16, 25]
console.log('arr:', arr) 
console.log('// Deleting and inserting anywhere in the array')
arr = [0, 1, 4, 9, 16, 25]
let start = 3
let deleteCount = 2
let x1 = 36
let x2 = 49
let x3 = 64
let deletedElements = arr.splice(start, deleteCount, x1, x2, x3)
console.log('arr:', arr) // [0, 1, 4, 36, 49, 64, 25]
console.log('deletedElements:', deletedElements) // [9, 16]
console.log('// More uses of splice')
arr = [0, 1, 12, 24, 36]
start = 2
// Replace arr[start] and arr[start + 1]
arr.splice(start, 2, 16, 25) // arr is now [0, 1, 16, 25, 36]
console.log('arr:', arr) 
// Add elements at index start
arr.splice(start, 0, 4, 9) // arr is now [0, 1, 4, 9, 16, 25, 36]
console.log('arr:', arr) 
// Delete the elements at index start and start + 1
arr.splice(start, 2) // arr is now [0, 1, 16, 25, 36]
console.log('arr:', arr) 
// Delete all elements at index start and beyond
arr.splice(start) // arr is now [0, 1]
console.log('arr:', arr) 
console.log('// Negative index values are counted from the end of the array')
arr = [0, 1, 4, 16]
arr.splice(-1, 1, 9) // arr is now [0, 1, 4, 9]
console.log('arr:', arr) 
console.log('// splice returns an array of the deleted elements')
arr = [1, 4, 9, 16]
deletedElements = arr.splice(1, 2) // arr is now [1, 16], deletedElements is [4, 9]
console.log('arr:', arr) 
console.log('deletedElements:', deletedElements) 
