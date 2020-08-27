// node date-functions.js

'use strict'
console.log('// Construct a UTC date from components as new Date(Date(...))')
const deadline = new Date(Date.UTC(2020, 0 /* January */, 31))
console.log('deadline:', deadline) // 2020-01-31T00:00:00.000Z
console.log('// Getting UTC components from Date object')
const epoch = new Date('1970-01-01T00:00:00.000Z')
console.log('epoch.getUTCDay():', epoch.getUTCDay()) // 4 (Thursday)
console.log('epoch.getDay():', epoch.getDay()) // 3, 4, or 5, depending on when and where the call is made
console.log('// Setters silently adjust out-of-range components')
const appointment = new Date('2020-05-31T00:00:00.000Z')
appointment.setUTCMonth(5 /* June */) // appointment is now July 1
console.log('appointment:', appointment) // 2020-07-01T00:00:00.000Z
