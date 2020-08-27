// node array-processing.js

'use strict'
console.log('// The forEach method calls a function on each array element')
const arr = ['Peter', 'Paul', 'Mary']
arr.forEach((element, index) => { console.log(`${index}: ${element}`) })

console.log('// You don’t need to process the index values')
arr.forEach(element => { console.log(`${element}`) })

console.log('// Example: Enclose array elements with HTML tag')
const items = ['Green eggs', 'ham', 'Mr & Mrs T Bloody Mary mix']
const enclose = (tag, contents) => `<${tag}>${contents}</${tag}>` 
let listItems = items.map(i => enclose('li', i))
console.log('listItems:', listItems) // ['<li>Green eggs</li>', '<li>ham</li>', '<li>Mr & Mrs T Bloody Mary mix</li>']
console.log('// Pipeline: First escape elements, then enclose them')
const htmlEscape = str => [...str].map(c => c === '<' ? '&lt;'
  : c === '&' ? '&amp;' : c).join('')
listItems = items
  .map(htmlEscape)
  .map(i => enclose('li', i))
console.log('listItems:', listItems) // ['<li>Green eggs</li>', '<li>ham</li>', '<li>Mr &amp; Mrs T Bloody Mary mix</li>']
console.log('// The complete pipeline for generating an HTML list')
let list = enclose('ul',
  items
  .map(htmlEscape)
  .map(i => enclose('li', i))
  .join(''))
console.log('list:', list) // <ul><li>Green eggs</li><li>ham</li><li>Mr &amp; Mrs T Bloody Mary mix</li></ul>
console.log('// Filter retains elements that fulfill a predicate')
list = enclose('ul',
  items
  .filter(i => i.trim() !== '')
  .map(htmlEscape)
  .map(i => enclose('li', i))
  .join(''))
console.log('list:', list) // <ul><li>Green eggs</li><li>ham</li><li>Mr &amp; Mrs T Bloody Mary mix</li></ul>
