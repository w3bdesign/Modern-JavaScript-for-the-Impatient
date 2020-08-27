// node semicolons.js

'use strict'
console.log('// Semicolons are inserted before "offending token"')
let x = 1
let y = 2
const someComplicatedFunctionCall = () => 42
let a = x
  + someComplicatedFunctionCall
()
let b = y
console.log('a:', a) // 43
console.log('b:', b) // 2
console.log('// Offending rule fails when a line starts with a "non-offending" token')
try {
  x = a
  (console.log(6 * 7))
} catch (exception) {
  console.log('Error:', exception.message) // a is not a function
}
try {
  x = a
  [1, 2, 3].forEach(console.log)
} catch (exception) {
  console.log('Error:', exception.message) // Cannot read property 'forEach' of undefined
}
console.log('// Remedy: Give a name to the array')
x = a
const numbers = [1, 2, 3]
numbers.forEach(console.log)

console.log('// Another academic case--a`Fred` is a tagged template literal')
try {
  x = a
  `Fred`.toUpperCase()
} catch (exception) {
  console.log('Error:', exception.message) // a is not a function
}
console.log('// Caution: break, continue, return, throw, yield at end of line')
const myFunction = (x) => {
  const someComplicatedExpression = 42
  return
    x + someComplicatedExpression;
}
console.log('myFunction(1):', myFunction(1)) // undefined
console.log('// Remedy: Put at least one other token in the same line')
const myFunction2 = (x) => {
  const someComplicatedExpression = 42
  return
    x + someComplicatedExpression;
}
console.log('myFunction2(1):', myFunction2(1)) // undefined
console.log('// Obscure rule about ++')
let i = 1
let j = 2
i
++
j
console.log('i:', i) // 1
console.log('j:', j) // 3
console.log('// Semicolon required to separate statements on the same line')
if (i < j) { i++; j-- }
console.log('i:', i) // 2
console.log('j:', j) // 2
