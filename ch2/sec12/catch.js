// node catch.js

'use strict'
console.log('// Catching exceptions')
let input = '{name: "Fred"}'
 // Read input from somewhere
try {
  let data = JSON.parse(input)
  // If execution continues here, input is valid
  // Process data 
  console.log({data})
} catch {
  // Deal with the fact that the input is invalid
  console.log(`${input} invalid`)
}
