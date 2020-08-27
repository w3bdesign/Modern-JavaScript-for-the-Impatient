// ts-node -O '{ "target": "es2020", "strict": true }' generic-functions.ts


function count<T>(arr: T[], target: T) {
  let count = 0
  for (let e of arr) if (e === target) count++
  return count
}
let digits = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
let result = count(digits, 5) // OK
console.log('result:', result) // 3

/* Compile-time error
result = count(digits, 'Fred') // Type error
*/

// Generic arrow function syntax
{
  const count = <T>(arr: T[], target: T) => {
    let count = 0
    for (let e of arr) if (e === target) count++
    return count
  }
  let digits = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
  let result = count(digits, 5) // OK
  console.log('result:', result) // 3

  // This function has the type
  type T = <T> (arg1: T[], arg2: T) => number
}

// If you like, you can explicitly specify the generic type
result = count<number>(digits, 4)
console.log('result:', result) // 1
