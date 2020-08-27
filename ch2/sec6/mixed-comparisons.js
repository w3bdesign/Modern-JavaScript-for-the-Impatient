// node mixed-comparisons.js

'use strict'
console.log('// When comparing with numbers, strings are converted to numbers')
console.log('\'42\' < 5:', '42' < 5) // false—'42' is converted to the number 42
console.log('\'\' < 5:', '' < 5) // true—'' is converted to the number 0
console.log('\'Hello\' <= 5:', 'Hello' <= 5) // false—'Hello' is converted to NaN
console.log('5 <= \'Hello\':', 5 <= 'Hello') // false—'Hello' is converted to NaN
console.log('// When comparing with numbers, arrays are converted to numbers')
console.log('[4] < 5:', [4] < 5) // true—[4] is converted to the number 4
console.log('[] < 5:', [] < 5) // true—[] is converted to the number 0
console.log('[3, 4] < 5:', [3, 4] < 5) // false—[3, 4] is converted to NaN
console.log('// If neither operand is a number, both are converted to strings')
console.log('[1, 2, 3] < {}:', [1, 2, 3] < {}) // true—[1, 2, 3] is converted to '1,2,3', {} to '[object Object]'
console.log('// The rules for loose equality are complex and not very useful')
console.log('\'\' == 0:', '' == 0) // true—'' is converted to 0
console.log('\'0\' == 0:', '0' == 0) // true—'0' is converted to 0
console.log('\'0\' == false:', '0' == false) // true—both are converted to 0
undefined == false // false—undefined is only equal to itself and null
console.log('// Loose equality is not transitive')
console.log('\'\' == \'0\':', '' == '0') // false—no conversion since both operands are strings
