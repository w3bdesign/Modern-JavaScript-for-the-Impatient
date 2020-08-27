// node collation.js

'use strict'
console.log('// Use a locale-aware comparison with humanly readable strings')
let words = ['Alpha', 'Ångström', 'Zulu', 'able', 'zebra']
let result = words.sort((x, y) => x.localeCompare(y, 'en')) // words is now ['able', 'Alpha', 'Ångström', 'zebra', 'Zulu']
console.log('words:', words) 
console.log('// Alternative: collator')
const swedishCollator = new Intl.Collator('sv')

words.sort(swedishCollator.compare) // words is now ['able', 'Alpha', 'zebra', 'Zulu', 'Ångström']
console.log('words:', words) 
console.log('// Tip: Use numeric sort for strings containing numbers')
const parts = ['part1', 'part10', 'part2', 'part9']
parts.sort((x, y) => x.localeCompare(y, 'en-u-kn-true')) // parts is now ['part1', 'part2', 'part9', 'part10']
console.log('parts:', parts) 
console.log('// In German phone books, Ö is considered the same as Oe')
words = ['Österreich', 'Offenbach']
words.sort((x, y) => x.localeCompare(y, 'de-u-co-phonebk'))
console.log('words:', words) // ['Österreich', 'Offenbach']
