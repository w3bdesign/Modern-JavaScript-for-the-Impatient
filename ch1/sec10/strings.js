// node strings.js

'use strict'
// Escape sequences
let s = '\\\'\'\\\n'
console.log('s:', s) // \''\
console.log('s.length:', s.length) // 5
// Strings can hold arbitrary Unicode characters
let greeting = 'Hello 🌐'
console.log('greeting:', greeting) // Hello 🌐
// Characters above \u{FFFF} require two code units
greeting = 'Hello \u{1F310}'
console.log('greeting:', greeting) // Hello 🌐
console.log('greeting.length:', greeting.length) // 8
console.log('greeting[0]:', greeting[0]) // H
console.log('greeting[6]:', greeting[6]) // �
console.log('greeting[7]:', greeting[7]) // �
