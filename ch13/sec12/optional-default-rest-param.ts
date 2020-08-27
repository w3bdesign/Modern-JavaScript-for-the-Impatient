// ts-node -O '{ "target": "es2020", "strict": true }' optional-default-rest-param.ts


// Optional parameters tagged with ?
{
  const average = (x: number, y?: number) => y === undefined ? x : (x + y) / 2 
    // TypeScript
  console.log('average(3):', average(3)) // 3
}

// Default parameters are ok
{
  const average = (x = 0, y = x) => (x + y) / 2  // TypeScript
  console.log('average():', average()) // 0
}

// Annotate rest parameters as an array type
{
  const average = (first = 0, ...following: number[]) => {
    let sum = first
    for (const value of following) { sum += value }
    return sum / (1 + following.length)
  }
  console.log('average(3, 4, 5, 6):', average(3, 4, 5, 6)) // 4.5
  
  // This function has type
  type T1 = (arg1: number, ...arg2: number[]) => number
}
