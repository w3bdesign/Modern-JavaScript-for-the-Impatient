// node substrings.js

'use strict'
// Index of substring
let index = 'Hello yellow'.indexOf('el') // 1
console.log('index:', index) 
index = 'Hello yellow'.lastIndexOf('el') // 7
console.log('index:', index) 
// Indexes are offsets into the UTF-16 encoding
index = 'I💛yellow'.indexOf('el') // 4
console.log('index:', index) 
// Checking for substrings
const url = 'http://horstmann.com/images/e-mail.gif'
let isHttps = url.startsWith('https://')
let isGif = url.endsWith('.gif')
let isQuery = url.includes('?')
console.log('isHttps:', isHttps) // false
console.log('isGif:', isGif) // true
console.log('isQuery:', isQuery) // false
// Obtaining a substring
let substring = 'I💛yellow'.substring(3, 7) // 'yell'
console.log('substring:', substring) 
// If only one argument, the substring contains everything up the end
substring = 'I💛yellow'.substring(3) // 'yellow'
console.log('substring:', substring) 
// slice counts negative offsets from the end
let slice = 'I💛yellow'.slice(-6, -2) // 'yell', same as slice(3, 7)
console.log('slice:', slice) 
// substring weirdness: if first arg > second arg, they are switched!    
substring = 'I💛yellow'.substring(7, 3) // 'yell', same as substring(3, 7)
console.log('substring:', substring) 
// Splitting a string into substrings    
let parts = 'Mary had a little lamb'.split(' ')
  // ['Mary', 'had', 'a', 'little', 'lamb']
console.log('parts:', parts) 
// Limiting the number of substrings
parts = 'Mary had a little lamb'.split(' ', 4)
  // ['Mary', 'had', 'a', 'little']
console.log('parts:', parts) 
