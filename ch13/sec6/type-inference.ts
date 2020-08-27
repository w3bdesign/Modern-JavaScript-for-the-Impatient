// ts-node -O '{ "target": "es2020", "strict": true }' type-inference.ts


// Return type is inferred
const average = (x: number, y: number) => (x + y) / 2
// Variable types are inferred
const a = 3
const b = 4
let result = average(a, b)

type ErrorCode = [number, string]
{
  // Initial value doesn't infer the ErrorCode type
  let code = [404, 'not found']
}
{
  // Remedy: Type annotation
  let code: ErrorCode = [404, 'not found']
}
{
  // Same problem with ambiguous function returns
  const root = (x: number) => {
    if (x >= 0) return Math.sqrt(x)
    else return [404, 'not found']
  }
  // Inferred return type: number | (number | string)[]
}
{
  // Remedy: Type annotation
  const root = (x: number): number | ErrorCode => {
    if (x >= 0) return Math.sqrt(x)
    else return [404, 'not found']
  }
}
{
  // Can also use function syntax
  function root(x: number): number | ErrorCode {
    if (x >= 0) return Math.sqrt(x)
     else return [404, 'not found']
  }
}
{
  // This variable has type any
  let result = undefined
}
{
  // If you don't want any, specify the type that you want:
  let result: number | undefined = undefined
  // Ok to store number
  result = 3 // OK
  /* Compile-time error:
  result = '3' // Error
  */
}

type Point = { x: number, y: number }
const response = '{"x": 3, "y": 4}'

// Use "as" if you know more about the type than TypeScript can infer
let target = JSON.parse(response) as Point

// With union types, TypeScript follows the decision flow
const less = (x: number | number[] | string | Date | null) => {
  if (typeof x === 'number')
    return x - 1;
  else if (Array.isArray(x)) 
    return x.splice(0, 1)
  else if (x instanceof Date)
    return new Date(x.getTime() - 1000)
  else if (x === null) 
    return x
  else
    return x.substring(1)
}

// Sometimes, this inference doesn't work
/*
Compile-time error:
const more = (values: number[] | string[]) => {
  if (array.length > 0 && typeof x[0] === 'number') // Error—not a valid type guard
    return values.map(x => x + 1) 
  else
    return values.map(x => x + x)
}
*/

// Remedy: Custom type guard function
const isNumberArray = (array: unknown[]): array is number[] =>
  array.length > 0 && typeof array[0] === 'number'
{
  const more = (values: number[] | string[]) => {
    if (isNumberArray(values))
      return values.map(x => x + 1)
    else
      return values.map(x => x + x)
  }
}
// With function syntax:
{
  function isNumberArray(array: unknown[]): array is number[] {
    return array.length > 0 && typeof array[0] === 'number'
  }
}
