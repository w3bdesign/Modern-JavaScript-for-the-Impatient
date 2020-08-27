// ts-node -O '{ "target": "es2020", "strict": true }' type-bounds.ts


// TypeScript can't tell that the values object has a slice method
/* Compile-time error
const tail = <T>(values: T) => values.slice(1) // Error
*/

// Remedy: Type bound
const tail = <T extends { slice(from: number, to?: number): T }>(values: T) => 
  values.slice(1) // OK


console.log('tail([1, 7, 2, 9]):', tail([1, 7, 2, 9])) // [7, 2, 9]
let greeting: String = 'Hello'
console.log(tail(greeting)) // Displays ello

// Can give a name to the type used as bound
{
  type Sliceable<T> = { slice(from: number, to?: number): T }
  const tail = <T extends Sliceable<T>>(values: T) => values.slice(1)
  console.log('tail([1, 7, 2, 9]):', tail([1, 7, 2, 9])) // [7, 2, 9]
}

/* Compile-time error
console.log(tail('Hello')) // Error
*/

// Remedy 1: Explicit instantiation
console.log(tail<string>('Hello')) // OK

// Remedy 2: Type assertion
console.log(tail('Hello' as string))
