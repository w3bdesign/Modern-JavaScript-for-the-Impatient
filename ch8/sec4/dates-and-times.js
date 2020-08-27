// node dates-and-times.js

'use strict'
console.log('// Formatting a date')
const newYearsEve = new Date(1999, 11, 31, 23, 59) 
console.log('newYearsEve.toLocaleDateString(\'de\'):', newYearsEve.toLocaleDateString('de')) // '31.12.1999'
console.log('newYearsEve.toLocaleTimeString(\'de\'):', newYearsEve.toLocaleTimeString('de')) // '23:59:00'
console.log('newYearsEve.toLocaleString(\'de\'):', newYearsEve.toLocaleString('de')) // '31.12.1999, 23:59:00'
console.log('// Can also use a formatter')
const germanDateTimeFormatter = new Intl.DateTimeFormat('de')
console.log('germanDateTimeFormatter.format(newYearsEve):', germanDateTimeFormatter.format(newYearsEve)) // '31.12.1999'
console.log('// Providing formatting options')
let result = newYearsEve.toLocaleDateString('en', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
}) // 'Dec 31, 1999'
console.log('result:', result) 
result = new Intl.DateTimeFormat('de', {
  hour: 'numeric',
  minute: '2-digit'
}).format(newYearsEve) // '23:59'
console.log('result:', result) 
console.log('// Stage 3 proposal for saner formats')
console.log('newYearsEve.toLocaleDateString(\'en\', { dateStyle: \'medium\' }):', newYearsEve.toLocaleDateString('en', { dateStyle: 'medium' })) // 'Dec 31, 1999'
console.log('newYearsEve.toLocaleDateString(\'de\', { dateStyle: \'medium\' }):', newYearsEve.toLocaleDateString('de', { dateStyle: 'medium' })) // '31.12.1999'
console.log('// Ranges')
const christmas = new Date(1999, 11, 24)
const newYearsDay = new Date(2000, 0, 1)
const formatter = new Intl.DateTimeFormat('en', { dateStyle: 'long' })
console.log('formatter.formatRange(christmas, newYearsEve):', formatter.formatRange(christmas, newYearsEve)) // 'December 24 – 31, 1999'
console.log('formatter.formatRange(newYearsEve, newYearsDay):', formatter.formatRange(newYearsEve, newYearsDay)) // 'December 31, 1999 – January 1, 2000'
console.log('// Relative Time')
console.log('new Intl.RelativeTimeFormat(\'en\', { numeric: \'auto\'}).format(-1, \'day\'):', new Intl.RelativeTimeFormat('en', { numeric: 'auto'}).format(-1, 'day')) // 'yesterday'
console.log('new Intl.RelativeTimeFormat(\'fr\').format(3, \'hours\'):', new Intl.RelativeTimeFormat('fr').format(3, 'hours')) // 'dans 3 heures'
console.log('// Formatting to parts')
result = new Intl.RelativeTimeFormat('fr').formatToParts(3, 'hours')
console.log('result:', result) // [{ type: 'literal', value: 'dans ' }, { type: 'integer', value: '3', unit: 'hour' }, { type: 'literal', value: ' heures' }]
result = Intl.DateTimeFormat('en',
  {
    dateStyle: 'long',
    timeStyle: 'short'
  }).formatToParts(newYearsEve)
console.log('result:', result) // [{ type: 'month', value: 'December' }, { type: 'literal', value: ' ' }, { type: 'day', value: '31' }, { type: 'literal', value: ', ' }, { type: 'year', value: '1999' }, { type: 'literal', value: ' at ' }, { type: 'hour', value: '11' }, { type: 'literal', value: ':' }, { type: 'minute', value: '59' }, { type: 'literal', value: ' ' }, { type: 'dayPeriod', value: 'PM' }]
