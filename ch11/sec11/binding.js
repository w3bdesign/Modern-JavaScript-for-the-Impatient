// node binding.js


'use strict'

console.log('// bind yields a function with the initial arguments locked in')
const multiply = (x, y) => x * y
const triple = multiply.bind(null, 3)
let result = triple(14) // Yields 42, or multiply(3, 14)

console.log('result:', result) 

console.log('// The first argument is the binding for the this parameter')
const isPet = Array.prototype.includes.bind(['cat', 'dog', 'fish'])

console.log('isPet(\'bat\'):', isPet('bat')) // false
console.log('isPet(\'cat\'):', isPet('cat')) // true

console.log('// bind can turn a method into a function')

let button = {
  click() { this.onclick({target: this, timeStamp: new Date()}) }
} // A simulated button
let context = {
  handleClick(event) { console.log(`button clicked at ${event.timeStamp}`) },
  act() {
    button.onclick = this.handleClick.bind(this)

  }
}

context.act()
button.click()

console.log('// bind can always be avoided by defining another function')
{
  context.act2 = function() {
    const triple = y => multiply(3, y)
    const isPet = x => ['cat', 'dog', 'fish'].includes(x)
    button.onclick = (...args) => this.handleClick(...args)

    console.log(triple(14))
    console.log(isPet('fish'))
  }

  context.act2()
  button.click()
}


console.log('// The call method')

let answer = multiply.call(null, 6, 7)
let uppercased = String.prototype.toUpperCase.call('Hello')

console.log('answer:', answer) // 42
console.log('uppercased:', uppercased) // HELLO

// Would have been simpler to call multiply(6, 7), 'Hello'.toUpperCase()

console.log('// Can use call for invoking method of another class')

try {
  'Hello'.join(' ')
} catch (exception) {
  console.log('Error:', exception.message) // "Hello".join is not a function
}

// Remedy:

const spacedOut = Array.prototype.join.call('Hello', ' ') // 'H e l l o'

console.log('spacedOut:', spacedOut) 

console.log('// The apply method')

result = String.prototype.substring.apply('Hello', [1, 4]) // 'ell'

console.log('result:', result) 

try {
  'Hello'.join(' ')
} catch (exception) {
  console.log('Error:', exception.message) // "Hello".join is not a function
}

result = String.prototype.substring.apply('Hello', [1, 4]) // 'ell'

console.log('result:', result) 
