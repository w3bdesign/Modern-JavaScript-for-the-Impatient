// node template-literals.js

'use strict'
// The values of embedded expressions are spliced in
let destination = 'world' // A regular string
let greeting = `Hello, ${destination.toUpperCase()}!` // A template literal
console.log('greeting:', greeting) // Hello, WORLD!
// Template literals can be nested inside embedded expressions
let firstname = 'Harry'
let lastname = 'Burns'
greeting = `Hello, ${firstname.length > 0 ? `${firstname[0]}.` : '' } ${lastname}`
console.log('greeting:', greeting) // Hello, H. Burns
// Template literals can contain newlines
destination = 'Bermuda'
greeting = `<div>Hello</div>
<div>${destination}</div>
`
console.log('greeting:', greeting) // \''\ followed by a newline
// This function processes a tagged template literal
const html = (fragments, ...values) => { // See section 6.4
  const escapeHTML = str => [...str].map(c => c === '<' ? '&lt;'
    : c === '&' ? '&amp;' : c).join('')
  let result = fragments[0]
  for (let i = 0; i < values.length; i++) {
    result += escapeHTML(values[i])
    result += fragments[i + 1]
  }
  return result
}
// The tagged template literal is prefixed with the processing function
destination = 'St. Kitts & Nevis'
let message = html`<div>Hello, ${destination}</div>`
console.log('message:', message) // <div>Hello, St. Kitts &amp; Nevis</div>
