// node overloads.js

'use strict'

// This function counts how often c occurs in a string
{
  function count(str, c) { return str.length - str.replace(c, '').length }
  console.log('count(\'Hello\', \'l\'):', count('Hello', 'l')) // 1
}
// In JavaScript, easy to extend to array of strings
{
  function count(str, c) {
    if (Array.isArray(str)) {
      let sum = 0
      for (const s of str) {
        sum += s.length - s.replace(c, '').length
      }
      return sum
    } else {
      return str.length - str.replace(c, '').length
    }
  }
  console.log('count([\'Hello\', \'World\'], \'l\'):', count(['Hello', 'World'], 'l')) // 2
}

// The return type of this function varies with the argument type
function remove(str, c) { // JavaScript
  if (Array.isArray(str))
    return str.map(s => s.replace(c, ''))
  else
    return str.replace(c, '')
}

console.log('remove(\'Hello\', \'l\'):', remove('Hello', 'l')) // Helo
console.log('remove([\'Hello\', \'World\'], \'l\'):', remove(['Hello', 'World'], 'l')) // ['Helo', 'Word']
