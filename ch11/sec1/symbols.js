// node symbols.js


'use strict'

console.log('// Creating symbols')
const sym = Symbol('label')
const sym2 = Symbol('label')

console.log('sym:', sym) // Symbol(label)
console.log('sym2:', sym2) // Symbol(label)
sym === sym2

console.log('// Use the bracket operator for symbol keys')
let initialValue = 0
let newValue = 1
let obj = {[sym]: initialValue}
obj[sym] = newValue

console.log('obj:', obj) // { [Symbol(label)]: 1 }

let node = { purpose: 'A simulated DOM node' }

console.log('// Not a good idea to use a string key')
node.outcome = 'success'

console.log('node:', node) // { purpose: 'A simulated DOM node', outcome: 'success' }

console.log('// A symbol is safe')
let outcomeSymbol = Symbol('outcome')
node[outcomeSymbol] = 'success'

console.log('node:', node) // { purpose: 'A simulated DOM node', outcome: 'success', [Symbol(outcome)]: 'success' }

console.log('// The global symbol registry')
let sym3 = Symbol.for('com.horstmann.outcome')

console.log('sym3:', sym3) // Symbol(com.horstmann.outcome)
