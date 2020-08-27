// node nested-yield.js

'use strict'

function* arrayGenerator(arr) {
  for (const element of arr) 
    yield element
}

console.log('// Doesn’t work')
{
  function* flatArrayGenerator(arr) {
    for (const element of arr)
      if (Array.isArray(element)) {
        arrayGenerator(element) // Error—does not yield any elements
      } else {
        yield element
      }
  }
  const result = [...flatArrayGenerator([1, [2, 3, 4], 5])]
  console.log('result:', result) // [1, 5]
}

console.log('// Works for two levels')
{
  function* flatArrayGenerator(arr) {
    for (const element of arr)
      if (Array.isArray(element)) {
        yield* arrayGenerator(element) // Yields the generated elements one at a time
      } else {
        yield element
      }
  }
  let result = [...flatArrayGenerator([1, [2, 3, 4], 5])]
  console.log('result:', result) // [1, 2, 3, 4, 5]
  let gen = flatArrayGenerator([1, [2, [3, 4], 5], 6])
  result = [...gen]
  console.log('result:', result) // [1, 2, [3, 4], 5, 6]
}

console.log('// Works for arbitrary levels')
{
  function* flatArrayGenerator(arr) {
    for (const element of arr)
      if (Array.isArray(element)) {
        yield* flatArrayGenerator(element) 
      } else {
        yield element
      }
  }
  let result = [...flatArrayGenerator([1, [2, 3, 4], 5])]
  console.log('result:', result) // [1, 2, 3, 4, 5]
}

console.log('// Much simpler solution for arrayGenerator')
{
  function* arrayGenerator(arr) {
    yield* arr
  }
  let result = [...arrayGenerator([1, [2, 3, 4], 5])]
  console.log('result:', result) // [1, [2, 3, 4], 5]
}

console.log('// Generator can return value when finished')
{
  function* arrayGenerator(arr) {
    for (const element of arr) 
      yield element
    return arr.length
  }
  function* elementsFollowedByLength(arr) {
    const len = yield* arrayGenerator(arr);
    yield len;
  }
  let result = [...elementsFollowedByLength([1, 7, 2, 9])]
  console.log('result:', result) // [1, 7, 2, 9, 4]
}
