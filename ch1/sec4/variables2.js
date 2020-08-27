// node variables2.js

// Without 'use strict'
console.log('// You can declare multiple variables with a single const/let')
const FREEZING = 0, BOILING = 100
let x, y
console.log('y:', y) // undefined
console.log('// Avoid the obsolete var syntax')
var counter = 0 // Obsolete
coutner = 1 // Note the misspelling—creates a new variable!
console.log('counter:', counter) // 0
console.log('// Unicode letters in variable names are ok')
const π = 3.141592653589793
