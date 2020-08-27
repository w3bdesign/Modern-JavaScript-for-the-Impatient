// node specifying-locales.js

'use strict'
console.log('// Passing a locale tag to a locale-sensitive function')
const newYearsEve = new Date(1999, 11, 31, 23, 59)
let result = newYearsEve.toLocaleString('de') // '31.12.1999, 23:59:00'
console.log('result:', result) 
console.log('// Additional options can be specified in an object')
result = newYearsEve.toLocaleString('de', { timeZone: 'Asia/Tokyo' })
  // The date as viewed in the given time zone, such as '1.1.2000, 07:59:00'
console.log('result:', result)
console.log('// Specify an empty array for the default locale and options')
result = newYearsEve.toLocaleString([], { timeZone: 'Asia/Tokyo' })
console.log('result:', result)
