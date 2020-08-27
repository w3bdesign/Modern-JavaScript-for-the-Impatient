// node date-formatting.js

'use strict'
console.log('// Use toLocale...String methods to show dates to humans')
const moonlanding = new Date('1969-07-20T20:17:40.000Z')
console.log('moonlanding.toLocaleDateString():', moonlanding.toLocaleDateString()) // '20.7.1969' if the locale is German
console.log('moonlanding.toLocaleDateString(\'en-US\'):', moonlanding.toLocaleDateString('en-US')) // '7/20/1969'
console.log('// Additional formatting options')
console.log('moonlanding.toLocaleDateString( \'en-US\', { year: \'numeric\', month: \'long\', day: \'numeric\' }):', moonlanding.toLocaleDateString( 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })) // 'July 20, 1969'
console.log('// Formatting for machine-readable text')
console.log('moonlanding.toISOString():', moonlanding.toISOString()) // '1969-07-20T20:17:40.000Z'
