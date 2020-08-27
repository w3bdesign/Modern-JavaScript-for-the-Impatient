// node boolean-operators.js

'use strict'
console.log('// Boolean operators are evaluated lazily')
const a = [1, 2, 3]
let i = 3
if (i < a.length && a[i] > 0) // a[i] > 0 is not evaluated if i ≥ a.length
  i++
console.log('i:', i) // 3
console.log('// The operand that decides the outcome becomes the result')
console.log('0 && \'Harry\':', 0 && 'Harry') 
console.log('0 || \'Harry\':', 0 || 'Harry') // 'Harry'
console.log('// Using && to prevent undefined/null arguments')
let arg = 'Fred'
let result = arg && arg.toString()
console.log('result:', result) // Fred
// Caution: also prevents 0, '', false
arg = 0
result = arg && arg.toString()
console.log('result:', result) 
console.log('// Using || to replace undefined/null results')
let defaultValue = 'N/A'
arg = '{ "name": "Harry" }'
result = JSON.parse(arg) || defaultValue
console.log('result:', result) // { name: 'Harry' }
arg = 'null'
result = JSON.parse(arg) || defaultValue
console.log('result:', result) // N/A
// Caution: also replaces 0, '', false
arg = '0'
result = JSON.parse(arg) || defaultValue
console.log('result:', result) // N/A
console.log('// Use the ?? operator instead')
arg = '{ "name": "Harry" }'
result = JSON.parse(arg) ?? defaultValue
console.log('result:', result) // { name: 'Harry' }
arg = 'null'
result = JSON.parse(arg) ?? defaultValue
console.log('result:', result) // N/A
arg = '0'
result = JSON.parse(arg) ?? defaultValue
console.log('result:', result) 
console.log('// The ?. operator')
let person = undefined
let recipient = person?.name
console.log('recipient:', recipient) // undefined
console.log('// Chaining ?. operators')
person = { firstName: 'Fred' }
let recipientLength = person?.name?.length
console.log('recipientLength:', recipientLength) // undefined
