// node advanced-destructuring.js

'use strict'
console.log('// Can destructure nested objects')
let pat = { name: 'Pat', birthday: { day: 14, month: 3, year: 2000 } }
let { birthday: { year: patsBirthYear } } = pat
  // Declares the variable patsBirthYear and initializes it to 2000
console.log('patsBirthYear:', patsBirthYear) 
console.log('// Computed property names are supported')
const harry = { name: 'Harry Burns', age: 42 };
let field = 'Age'
let { [field.toLowerCase()]: harrysAge } = harry
  // Sets harrysAge to harry[field.toLowerCase()]
console.log('harrysAge:', harrysAge) // 42
console.log('// Rest declaration captures remaining array elements')
{
  const numbers = [1, 7, 2, 9]
  let [first, second, ...others] = numbers
    // first is 1, second is 7, and others is [2, 9]
  console.log('first:', first) 
  console.log('second:', second) 
  console.log('others:', others) 
}
console.log('// If there are insufficient elements, the rest is an empty array')
{
  let [first, second, ...others] = [42]
    // first is 42, second is undefined, and others is []
  console.log('first:', first) 
  console.log('second:', second) 
  console.log('others:', others) 
}
console.log('// Rest declarations also work for objects')
{
  let { name, ...allButName } = harry
    // allButName is { age: 42 }
  console.log('name:', name) // Harry Burns
  console.log('allButName:', allButName) 
}
console.log('// Default is used if desired value is absent')
{
  let [first, second = 0] = [42]
    // Sets first to 42, second to 0 since the right-hand side has 
    // no matching element 
  let { nickname = 'None' } = harry
    // Sets nickname to 'None' since harry has no nickname property
  console.log('first:', first) // 42
  console.log('second:', second) // 0
}
console.log('// Default expressions can use previously set variables')
{
  let { name, nickname = name } = harry
    // Both name and nickname are set to harry.name
  console.log('name:', name) // Harry Burns
  console.log('nickname:', nickname) // Harry Burns
}
console.log('// Destructuring with configuration objects')
{
  let config = { separator: '; ' }
  const { separator = ',', leftDelimiter = '[', rightDelimiter = ']' } = config
  console.log('separator:', separator) // ;
  console.log('leftDelimiter:', leftDelimiter) // [
  console.log('rightDelimiter:', rightDelimiter) // ]
}
