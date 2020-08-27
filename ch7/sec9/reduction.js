// node reduction.js

'use strict'
console.log('// The sum of array elements')
const arr = [1, 7, 2, 9]
console.log('arr.reduce((x, y) => x + y):', arr.reduce((x, y) => x + y)) // ((1 + 7) + 2) + 9
console.log('// Computing a decimal number from an array of digits')
console.log('[1, 7, 2, 9].reduce((x, y) => 10 * x + y):', [1, 7, 2, 9].reduce((x, y) => 10 * x + y)) // 1729
console.log('// More regular to start with an initial value')
let result = [1, 7, 2, 9].reduce((accum, current) => accum - current, 0)
console.log('result:', result) // -19
// 0 − 1 − 7 − 2 − 9 = −19

console.log('// The initial value is returned when the array is empt')
const sum = arr => arr.reduce((accum, current) => accum + current, 0)
console.log('sum([1, 7, 2, 9]):', sum([1, 7, 2, 9])) 
console.log('sum([]):', sum([])) 
console.log('// Collect the positions of all elements fulfilling a condition')
function findAll(arr, condition) {
  return arr.reduce((accum, current, currentIndex) =>
    condition(current) ? [...accum, currentIndex] : accum, [])
}

const odds = findAll([1, 7, 2, 9], x => x % 2 !== 0)
  // [0, 1, 3], the positions of all odd elements
console.log('odds:', odds) 
console.log('// Right reduction gathers the elements in reverse order')
result = [1, 2, 3, 4].reduceRight((x, y) => [x, y], [])
console.log('result:', result) // [[[[Array], 3], 2], 1]
// Node.js truncates the nested array. The full result is [[[[[], 4], 3], 2], 1]
    
console.log('// Reduction can be used in place of any loop, such as this one')
let freq = {}
for (const c of 'Mississippi') {
  if (c in freq) {
    freq[c]++
  } else {
    freq[c] = 1
  }
}
console.log('freq:', freq) // { M: 1, i: 4, s: 4, p: 2 }
console.log('// Reduction version')
freq = [...'Mississippi'].reduce(
  (freq, c) => ({ ...freq, [c]: (c in freq ? freq[c] + 1 : 1) }),
  {})
console.log('freq:', freq) // { M: 1, i: 4, s: 4, p: 2 }
