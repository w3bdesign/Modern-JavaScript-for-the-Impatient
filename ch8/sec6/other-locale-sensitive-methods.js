// node other-locale-sensitive-methods.js

'use strict'
console.log('// The uppercase of the German ß is SS')
console.log('\'Großhändler\'.toLocaleUpperCase(\'de\'):', 'Großhändler'.toLocaleUpperCase('de')) // 'GROSSHÄNDLER'
console.log('// Using the localeCompare method with options')
let result = 'part10'.localeCompare('part2', 'en', { numeric: true })
console.log('result:', result) // 1
console.log('// All normalizations of a string')
const str = 'Å™'
result = ['NFC', 'NFD', 'NFKC', 'NFKD'].map(mode => [...str.normalize(mode)])
  // [['Å', '™'], ['A', '°', '™'], ['Å', 'T', 'M'], ['A', '°', 'T', 'M']]
console.log('result:', result)
