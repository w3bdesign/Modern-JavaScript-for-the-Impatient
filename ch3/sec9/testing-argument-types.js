// node testing-argument-types.js

'use strict'
console.log('// This function can be called with numbers or arrays')
const average = (x, y) => {
  let sum = 0
  let n = 0
  if (Array.isArray(x)) {
    for (const value of x) { sum += value; n++ }
  } else {
    sum = x; n++
  }
  if (Array.isArray(y)) {
    for (const value of y) { sum += value; n++ }
  } else {
    sum += y; n++
  }
  return n === 0 ? 0 : sum / n
}

console.log('average(1, 2):', average(1, 2)) // 1.5
console.log('average([1, 2, 3], 4):', average([1, 2, 3], 4)) // 2.5
console.log('average(1, [2, 3, 4]):', average(1, [2, 3, 4])) // 2.5
console.log('average([1, 2], [3, 4, 5]):', average([1, 2], [3, 4, 5])) // 3
console.log('// Some programmers like to use automatic conversions')
{
  const average = (x, y) => {
    return (+x + +y) / 2
  }
  console.log('average(\'3\', [4]):', average('3', [4])) // 3.5
}
