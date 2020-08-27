// node simulating-named-arguments.js

'use strict'
const values = [1, 7, 2, 9]
console.log('// A function with configurable behavior')
{
  // The behavior of this function can be configured, which is
  // nice for the caller but tedious for the implementor
  const mkString = (array, config) => {
    let separator = config.separator === undefined ? ',' : config.separator 
    let leftDelimiter = config.leftDelimiter === undefined ? '[' : config.leftDelimiter
    let rightDelimiter = config.rightDelimiter === undefined ? ']' : config.rightDelimiter
    return leftDelimiter + array.join(separator) + rightDelimiter
  }

  const result = mkString(values, { leftDelimiter: '(', rightDelimiter: ')' })
  console.log('result:', result) // (1,7,2,9)
}
console.log('// Remedy: Use destructuring syntax for the parameter')
{
  const mkString = (array, { separator = ',', leftDelimiter = '[', rightDelimiter = ']' }) => {
    return leftDelimiter + array.join(separator) + rightDelimiter
  }

  const result = mkString(values, { leftDelimiter: '(', rightDelimiter: ')' })
  console.log('result:', result) // (1,7,2,9)
}
console.log('// It is a good idea to provide an empty default')
{
  const mkString = (array, {
      separator = ',',
      leftDelimiter = '[',
      rightDelimiter = ']'
    } = {}) => {
    return leftDelimiter + array.join(separator) + rightDelimiter
  }

  const result = mkString(values) // The second argument defaults to {}
  console.log('result:', result) // [1,7,2,9]
}
