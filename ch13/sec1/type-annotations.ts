// ts-node -O '{ "target": "es2020", "strict": true }' type-annotations.ts


const average = (x: number, y: number) => (x + y) / 2
console.log('average(3, 4):', average(3, 4)) // 3.5
/* 
  This is a compile-time error: 
const result = average('3', '4') // TypeScript: Compile-time error
*/

// A union type
const replace = (arr: number[], target: number | number[], replacement: number) => {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(target) && target.includes(arr[i])
        || !Array.isArray(target) && target === arr[i]) {
      arr[i] = replacement
    }
  }
}
const a = [11, 12, 13, 14, 15, 16]
console.log('replace(a, 13, 0):', replace(a, 13, 0)) // OK
console.log('replace(a, [13, 14], 0):', replace(a, [13, 14], 0)) // OK
/* 
  This is a compile-time error:
replace(a, 13, 14, 0) // Error
*/


// Annotations work equally with arrow functions
{  
  function average(x: number, y: number) { return (x + y) / 2 }
  console.log('average(3, 4):', average(3, 4)) // 3.5
}
