// node regex-replace.js

'use strict'
console.log('// In replacement pattern, $& is the matched string')
let result = 'hello'.replace(/[aeiou]/g, '$&$&$&') // 'heeellooo'
console.log('result:', '〈', result, '〉') // ⦃⦄
console.log('// $1, $2, ... are the group matches')
let names = 'Harry Smith\nSally Lin'
let flipped = names.replace(
  /^([A-Z][a-z]+) ([A-Z][a-z]+)/gm, "$2, $1")
  // 'Smith, Harry\nLin, Sally'
console.log('flipped:', '〈', flipped, '〉') // ⦃⦄
console.log('// If n is larger than the number of groups, $n is added verbatim')
let replacement = 'Blackwell Toaster $29.95'.replace('\$29', '$19')
  // 'Blackwell Toaster $19.95'—there is no group 19
console.log('replacement:', '〈', replacement, '〉') // ⦃⦄
console.log('// $<name> is the match for a named group')
flipped = names.replace(/^(?<first>[A-Z][a-z]+) (?<last>[A-Z][a-z]+)$/gm, 
  "$<last>, $<first>")
console.log('flipped:', '〈', flipped, '〉') // ⦃⦄
console.log('// Replacement function receives the entire match and the group matches')
flipped = names.replace(/^([A-Z][a-z]+) ([A-Z][a-z]+)/gm,
  (match, first, last)  => `${last}, ${first[0]}.`)
  // 'Smith, H.\nLin, S.'
console.log('flipped:', '〈', flipped, '〉') // ⦃⦄
/CAP replace can be used to replace strings
// The strings are not converted to regular expressions)    
replacement = 'Blackwell Toaster $29.95'.replace('$', 'USD')
  // Replaces $ with USD
console.log('replacement:', '〈', replacement, '〉') // ⦃⦄
console.log('// Caution: search converts strings to regular expressions')
let index = 'Blackwell Toaster $29.95'.search('$')
  // Yields 24, the end of the string, not the index of $
console.log('index:', '〈', index, '〉') // ⦃⦄