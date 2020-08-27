// node closures.js

'use strict'
console.log('// Says Goodbye in ten seconds')
setTimeout(() => console.log('Goodbye'), 10000)

console.log('// Provide parameters for text and timer')
const sayLater = (text, when) => {
  let task = () => console.log(text)
  setTimeout(task, when)
}

console.log('// Two sample invocations')
sayLater('Hello', 1000)
sayLater('Goodbye', 10000)

console.log('// The value of the captured variable can be changed after the call')
let text = 'Goodbye'
setTimeout(() => console.log(text), 10000)
text = 'Hello'
