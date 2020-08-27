// node exotic-features.js

'use strict'
console.log('// By default, + and * are greedy')
let result = '"Hi" and "Bye"'.match(/".*"/g)
console.log('result:', result) // ['"Hi" and "Bye"']
console.log('// Remedy: Be careful what you match in the repetition')
result = '"Hi" and "Bye"'.match(/"[^"]*"/g)
console.log('result:', result) // ['"Hi"', '"Bye"']
console.log('// Alternative: reluctant match')
result = '"Hi" and "Bye"'.match(/".*?"/g)
console.log('result:', result) // ['"Hi"', '"Bye"']
console.log('// Lookahead ?= finds hours that precede a colon')
let hours = '10:30 - 12:00'.match(/[0-9]+(?=:)/g) // ['10, 12']
console.log('hours:', hours) // ['10', '12']
console.log('// Inverted lookahead ?! finds minutes that do not precede a colon')
let minutes = '10:30 - 12:00'.match(/[0-9][0-9](?!:)/g) // ['10, 12']
console.log('minutes:', minutes) // ['30', '00']
console.log('// Alternative: Use lookbehind to find minutes that follow a colon')
minutes = '10:30 - 12:00'.match(/(?<=[0-9]+:)[0-9]+/g) // ['30', '00']
console.log('minutes:', minutes) 
console.log('// Inverted lookbehind finds hours that don’t follow a colon')
hours = '10:30 - 12:00'.match(/(?<![0-9:])[0-9]+/g)
console.log('hours:', hours) // ['10', '12']
