// ts-node -O '{ "target": "es2020", "strict": true }' destructuring-param.ts


// This syntax does not work for describing the type of a destructured parameter
/* Compile-time error
const mkString = (values: unknown[], { // TypeScript
    separator: string,
    leftDelimiter: string, // Error—duplicate identifier
    rightDelimiter: string // Error—duplicate identifier
  }) => leftDelimiter + values.join(separator) + rightDelimiter
*/

// Remedy:
{
  const mkString = (values: unknown[], // TypeScript
      { separator, leftDelimiter, rightDelimiter }
        : { separator: string, leftDelimiter: string, rightDelimiter: string }) =>
      leftDelimiter + values.join(separator) + rightDelimiter
  const elements = ['Fred', 'Wilma', 'Barney']
  const result = mkString(elements, 
    { separator: ', ', leftDelimiter: '(', rightDelimiter: ')' })
  console.log('result:', result) // (Fred, Wilma, Barney)
}

// With defaults:
{
  const mkString = (values: unknown[], // TypeScript
      { separator= ',', leftDelimiter = '[', rightDelimiter = ']' }
        : { separator?: string, leftDelimiter?: string, rightDelimiter?: string }) =>
    leftDelimiter + values.join(separator) + rightDelimiter
  const elements = ['Fred', 'Wilma', 'Barney']
  const result = mkString(elements, 
    { separator: ', ', leftDelimiter: '(', rightDelimiter: ')' })
  console.log('result:', result) // (Fred, Wilma, Barney)
}
