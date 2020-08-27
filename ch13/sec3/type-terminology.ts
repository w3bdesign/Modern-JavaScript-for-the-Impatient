// ts-node -O '{ "target": "es2020", "strict": true }' type-terminology.ts

type Numbers = number | number[]
const replace = (arr: number[], target: Numbers, replacement: number) => 
{
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(target) && target.includes(arr[i])
        || !Array.isArray(target) && target === arr[i]) {
      arr[i] = replacement
    }
  }
}

let values = [1, 7, 2, 9]
let moreValues: typeof values = []
  // typeof values is the same as number[]
let anotherElement: typeof values[0] = 42 
  // typeof values[0] is the same as number
