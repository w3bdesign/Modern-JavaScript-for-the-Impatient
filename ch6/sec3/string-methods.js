// node string-methods.js

'use strict'
console.log('// String methods demonstrated')
const repeated = 'ho '.repeat(3) // 'ho ho ho '
console.log('repeated:', repeated) 
let padded = 'Hello'.padStart(10) // ' Hello', five spaces are added
console.log('padded:', padded) 
padded = 'Hello'.padStart(10, '=-') // =-=-=Hello
console.log('padded:', padded) 
padded = 'Hello'.padStart(10, '💛') 
  // Padded with two hearts and an unmatched code unit
console.log('padded:', padded) // 💛💛�Hello
let uppercased = 'Straße'.toUpperCase() // 'STRASSE'
console.log('uppercased:', uppercased) 
let lowercased = uppercased.toLowerCase() // 'strasse'
console.log('lowercased:', lowercased) 
const n = 7 
let concatenated = 'agent'.concat(' ', n) // 'agent 7'
console.log('concatenated:', concatenated) 
let concatenated1 = `agent ${n}`
let concatenated2 = ['agent', ' ', n].join('')
console.log('concatenated1:', concatenated1) 
console.log('concatenated2:', concatenated2) 
