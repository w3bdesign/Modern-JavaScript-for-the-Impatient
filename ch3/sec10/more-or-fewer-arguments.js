// node more-or-fewer-arguments.js

'use strict'
console.log('// Calling with more arguments')
{
  const average = (x, y) => (x + y) / 2
let result = average(3, 4, 5) // 3.5—the last argument is ignored
  console.log('result:', result) 
}
console.log('// Calling with fewer arguments')
{
  const average = (x, y) => y === undefined ? x : (x + y) / 2
  console.log('average(3):', average(3)) 
}
