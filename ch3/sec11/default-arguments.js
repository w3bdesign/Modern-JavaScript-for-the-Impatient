// node default-arguments.js

'use strict'
{
  // The default is used when no argument is supplied
  const average = (x, y = x) => (x + y) / 2
  console.log('average(3):', average(3)) // 3
}
{
  // Multiple defaults are ok
  const average = (x = 0, y = x) => (x + y) / 2
  console.log('average():', average()) // 0
}
{
  // Can provide defaults to earlier parameters but not later ones
  const average = (x = 0, y) => y === undefined ? x : (x + y) / 2
  console.log('average():', average()) // 0
  console.log('average(3):', average(3)) // 3
  console.log('average(3, 4):', average(3, 4)) // 3.5
}
