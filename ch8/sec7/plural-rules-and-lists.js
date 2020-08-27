// node plural-rules-and-lists.js

'use strict'
console.log('// Key describes which word form is required for a given quantity')
let result1 = [0, 1, 2, 3, 4, 5].map(i => (new Intl.PluralRules('en').select(i))) // ['other', 'one', 'other', 'other', 'other', 'other']
let result2 = [0, 1, 2, 3, 4, 5].map(i => (new Intl.PluralRules('ru').select(i))) // ['many', 'one', 'few', 'few', 'few', 'many']
console.log('result1:', result1)
console.log('result2:', result2)
console.log('// Use the keys to provide maps for each language')
let dollars = { one: 'dollar', other: 'dollars' }
let rubles = { one: 'рубль', few: 'рубля', many: 'рублей' }

let i = 2
console.log('dollars[new Intl.PluralRules(\'en\').select(i)]:', dollars[new Intl.PluralRules('en').select(i)]) // dollars
console.log('rubles[new Intl.PluralRules(\'ru\').select(i)]:', rubles[new Intl.PluralRules('ru').select(i)]) // рубля
console.log('// English ordinals')
const rules = new Intl.PluralRules('en', { type: 'ordinal' })
console.log('[0, 1, 2, 3, 4, 5].map(i => rules.select(i)):', [0, 1, 2, 3, 4, 5].map(i => rules.select(i))) // ['other', 'one', 'two', 'few', 'other', 'other']
console.log('// List format')
let list = ['Goethe', 'Schiller', 'Lessing']
console.log('new Intl.ListFormat(\'en\', { type: \'conjunction\' }).format(list):', new Intl.ListFormat('en', { type: 'conjunction' }).format(list)) // 'Goethe, Schiller, and Lessing
console.log('new Intl.ListFormat(\'de\', { type: \'disjunction\' }).format(list):', new Intl.ListFormat('de', { type: 'disjunction' }).format(list)) // 'Goethe, Schiller oder Lessing'
console.log('// Units')
list = ['7 pounds', '11 ounces']
console.log('new Intl.ListFormat(\'en\', { type: \'unit\', style: \'long\' }).format(list):', new Intl.ListFormat('en', { type: 'unit', style: 'long' }).format(list)) // '7 pounds, 11 ounces'
