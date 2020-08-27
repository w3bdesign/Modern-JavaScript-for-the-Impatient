// node destructuring-param.js

'use strict'

// A function that is called with a configuration object
{
  const mkString = (values, config) =>
    config.leftDelimiter + values.join(config.separator) + config.rightDelimiter
  const elements = ['Fred', 'Wilma', 'Barney']
  const result = mkString(elements, 
    { separator: ', ', leftDelimiter: '(', rightDelimiter: ')' })
  console.log('result:', result) // (Fred, Wilma, Barney)
}

// Easier implementation with destructuring
{
  const mkString = (values, { separator, leftDelimiter, rightDelimiter }) =>
    leftDelimiter + values.join(separator) + rightDelimiter
  const elements = ['Fred', 'Wilma', 'Barney']
  const result = mkString(elements, 
    { separator: ', ', leftDelimiter: '(', rightDelimiter: ')' })
  console.log('result:', result) // (Fred, Wilma, Barney)
}

// This JavaScript syntax is in conflict with the TypeScript syntax
{
  const mkString = (values, { // JavaScript
      separator: sep,
      leftDelimiter: left,
      rightDelimiter: right
    }) => left + values.join(sep) + right
  const elements = ['Fred', 'Wilma', 'Barney']
  const result = mkString(elements, 
    { separator: ', ', leftDelimiter: '(', rightDelimiter: ')' })
  console.log('result:', result) // (Fred, Wilma, Barney)
}
