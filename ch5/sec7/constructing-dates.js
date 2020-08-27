// node constructing-dates.js

'use strict'
console.log('// Constructing dates')
const epoch = new Date('1970-01-01T00:00:00.000Z')
const oneYearLater = new Date(365 * 86400 * 1000) // 1971-01-01T00:00:00.000Z
console.log('epoch:', epoch) // 1970-01-01T00:00:00.000Z
console.log('oneYearLater:', oneYearLater) 
const now = new Date()
console.log('now:', now)
console.log('// Don’t call date without new')
console.log('Date(365 * 86400 * 1000):', Date(365 * 86400 * 1000)) // Ignores its argument and yields a string
console.log('// Dates in arithmetic expressions convert to strings or numbers')
console.log('oneYearLater + 1:', oneYearLater + 1) // 'Fri Jan 01 1971 01:00:00 GMT+0100 (Central European Summer Time)1'
console.log('oneYearLater * 1:', oneYearLater * 1) // 31536000000
console.log('// Only useful for computing difference between dates')
let f = 1n
const before = new Date()
for (let i = 1n; i <= 123456n; i++) f = f * i // Do some work
const after = new Date()
const millisecondsElapsed = after - before
console.log('millisecondsElapsed: ', millisecondsElapsed)
console.log('// Caution: These dates are in your local timezone')
let maybeNotQuteEpoch = new Date(1970, 0 /* January */, 1, 0, 0, 0, 0, 0) // Caution—local time zone
console.log({maybeNotQuteEpoch})
console.log('// Caution: Out-of-range values are silently adjusted')
console.log('new Date(1970, 0 /* January */, 1, 0, 0, 0, 0, 0):', new Date(1970, 0 /* January */, 1, 0, 0, 0, 0, 0)) 
