// node switch.js

'use strict'
console.log('// The switch statement')
let someExpression = ''
let description = ''
switch (someExpression) {
  case 0:
    description = 'zero'
    break
  case false:
  case true:
    description = 'boolean'
    break
  case '':
    description = 'empty string' // See the “Caution” note below
  default:
    description = 'something else'
}
console.log('description:', description) // something else
