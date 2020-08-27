// node codepoints.js

'use strict'
console.log('// Assembling a string from code points')
let str = String.fromCodePoint(0x48, 0x69, 0x20, 0x1F310, 0x21) // 'Hi 🌐!'
console.log('str:', str) 
console.log('// Assembling a string from an array of code points')
let codePoints = [0x48, 0x69, 0x20, 0x1F310, 0x21]
str = String.fromCodePoint(...codePoints)
console.log('str:', str) 
console.log('// Turning a string into an array of code point strings')
let characters = [...str] // [ 'H', 'i', ' ', '🌐' ]
console.log('characters:', characters) // ['H', 'i', ' ', '🌐', '!']
console.log('// Turning a string into an array of code points')
codePoints = [...str].map(c => c.codePointAt(0))
console.log('codePoints:', codePoints) // [72, 105, 32, 127760, 33]
console.log('// Traversing code points without putting them in an array')
for (let i = 0; i < str.length; i++) {
  let cp = str.codePointAt(i)
  if (cp > 0xFFFF) i++ 
  console.log({i, cp}) // Process the code point cp
}
