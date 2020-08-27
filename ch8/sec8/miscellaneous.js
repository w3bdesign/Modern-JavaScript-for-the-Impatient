// node miscellaneous.js

'use strict'
console.log('// Supported locales')
let result = Intl.NumberFormat.supportedLocalesOf(['cy', 'en-uk'])
// Does your runtime really support Welsh?    
console.log('result:', result) // ['cy', 'en-UK']
console.log('// Localized locale choices')
const regionNames = new Intl.DisplayNames(['fr'], {type: 'region'})
const languageNames = new Intl.DisplayNames(['fr'], {type: 'language'})
const currencyNames = new Intl.DisplayNames(['zh-Hans'], { type: 'currency'})
console.log('regionNames.of(\'US\'):', regionNames.of('US')) // 'États-Unis'
console.log('languageNames.of(\'fr\'):', languageNames.of('fr')) // 'français'
console.log('currencyNames.of(\'USD\'):', currencyNames.of('USD')) // '美元'
console.log('// Get information about properties of an i18 object')
const collator = new Intl.Collator('en-US-u-kn-true', { sensitivity: 'base' })

console.log('collator.resolvedOptions():', collator.resolvedOptions()) // { locale: 'en-US', usage: 'sort', sensitivity: 'base', ignorePunctuation: false, collation: 'default', numeric: true, caseFirst: 'false' }
console.log('// Locale with options')
const usMilitaryTime = new Intl.Locale('en-US', { hourCycle: 'h23' })
const newYearsEve = new Date(1999, 11, 31, 23, 59)
result = newYearsEve.toLocaleString(usMilitaryTime)
console.log('result:', result) // 12/31/1999, 23:59:00
