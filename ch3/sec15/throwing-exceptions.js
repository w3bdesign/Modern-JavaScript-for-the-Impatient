// node throwing-exceptions.js

'use strict'
console.log('// Throwing and catching exceptions')
// To raise an exception, simply throw any value; by convention,
// an error object. To catch an exception, use a try block.
const elem = 42
try {
  let reason = `Element ${elem} not found`
  throw Error(reason)
} catch (e) {
  console.log(`Caught exception with message ${e.message}`)
}
