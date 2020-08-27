// node visiting-elements.js

'use strict'
const arr = ['Spring', 'Summer', , 'Winter']
console.log('// for of visits all elements; for in visits all index values')
for (const e of arr) {
  console.log(e) // Do something with the element e
}
for (const i in arr) {
  console.log(i, arr[i]) // Do something with the index i and the element arr[i]
}

console.log('// Visit all entries')
for (const [index, element] of arr.entries())
  console.log(index, element)

// foreach visits all elements, skipping missing ones
arr.forEach((element, index) => console.log(index, element))

console.log('// Same as using for in')
for (const index in arr) console.log(index, arr[index])

console.log('// Use map to transform elements')
let result1 = [1, 7, 2, 9].map(x => x * x) // [1, 49, 4, 81]
let result2 = [1, 7, 2, 9].map((x, i) => x * 10 ** i) // [1, 70, 200, 9000]
console.log('result1:', result1) // [1, 49, 4, 81]
console.log('result2:', result2) 
console.log('// flatmap flattens transformations that yield arrays')
function roots(x) {
  if (x < 0) {
    return [] // No roots
  } else if (x === 0) {
    return [0] // Single root
  } else {
    return [Math.sqrt(x), -Math.sqrt(x)] // Two roots
  }
}

console.log('[-1, 0, 1, 4].map(roots):', [-1, 0, 1, 4].map(roots)) // [[], [0], [1, -1], [2, -2]]
console.log('[-1, 0, 1, 4].flatMap(roots):', [-1, 0, 1, 4].flatMap(roots)) // [0, 1, -1, 2, -2]
console.log('// join converts array to string')
console.log('[1,2,3,[4,5]].join(\' and \'):', [1,2,3,[4,5]].join(' and ')) // '1 and 2 and 3 and 4,5'
