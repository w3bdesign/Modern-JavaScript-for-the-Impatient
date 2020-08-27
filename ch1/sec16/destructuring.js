// node destructuring.js

'use strict'
// The blocks { . . . } isolate the variable declarations
console.log('// Without destructuring:')
{
  let pair = [1, 2]
  let first = pair[0]
  let second = pair[1]
  console.log('first:', first) // 1
  console.log('second:', second) // 2
}
console.log('// With destructuring:')
{
  let pair = [1, 2]
  let [first, second] = pair
  console.log('first:', first) // 1
  console.log('second:', second) // 2
}
console.log('// Observe the matching:')
{
  let [first, [second, third]] = [1, [2, 3]]
    // Sets first to 1, second to 2, and third to 3
  console.log('first:', first) 
  console.log('second:', second) 
  console.log('third:', third) 
}
console.log('// Unmatched elements are ignored')
{
  let [first, second] = [1, 2, 3]
  console.log('first:', first) 
  console.log('second:', second) 
}
console.log('// Unmatched variables are set to undefined')
{
  let [first, second] = [1]
    // Sets first to 1, second to undefined
  console.log('first:', first) 
  console.log('second:', second) 
}
console.log('// Destructuring with already declared variables')
{
  let first = 1
  let second = 2;
  // Caution: Here you need a semicolon--see section 2.2.
  [first, second] = [4, 5]
  console.log('first:', first) // 4
  console.log('second:', second) // 5
}
console.log('// Swapping two variables')
{
  let x = 6
  let y = 7;
  // Caution: Here you need a semicolon--see section 2.2.
  [x, y] = [y, x]
  console.log('x:', x) // 7
  console.log('y:', y) // 6
}
console.log('// Any lvalues can be on the left hand side')
{
  const numbers = []
  const harry = { name: 'Harry Burns' };
  [numbers[0], harry.age] = [13, 42] // Same as numbers[0] = 13; harry.age = 42
  console.log('numbers:', numbers) // [13]
  console.log('harry:', harry) // { name: 'Harry Burns', age: 42 }
}
console.log('// Use property names when destructuring an object')
{
  let harry = { name: 'Harry', age: 42 }
  let { name: harrysName, age: harrysAge } = harry
  console.log('harrysName:', harrysName) // Harry
  console.log('harrysAge:', harrysAge) 
}
console.log('// Compelling case; property and variable names are the same')
{
  let harry = { name: 'Harry', age: 42 }
  let { name, age } = harry
  console.log('name:', name) // Harry
  console.log('age:', age) 
}
console.log('// Caution: Use parentheses when setting existing variables')
{
  let name = undefined
  let age = undefined
  const sally = { name: 'Sally Albright', age: 28 };
  // Semicolon AND parentheses required here
  ({name, age} = sally)
  console.log('name:', name) // Sally Albright
  console.log('age:', age) // 28
}
