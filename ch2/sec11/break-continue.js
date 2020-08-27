// node break-continue.js

'use strict'
console.log('// The break statement')
{
  let arr = [2, 3, 5, -7, 11, 13]
  let i = 0
  while (i < arr.length) {
    if (arr[i] < 0) break
    i++
  }
  // Get here after break or when the loop terminates normally
  console.log('i:', i) // 3
}
console.log('// The same loop without break')
{
  let arr = [2, 3, 5, -7, 11, 13]
  let i = 0
  let found = false
  while (!found && i < arr.length) {
    if (arr[i] < 0) {
      found = true
    } else {
      i++
    }
  }
  console.log('i:', i) // 3
}
console.log('// Labeled break')
{
  let arr = [[2, 3], [5, -7], [11, 13]]
  let i = 0
  let j = 0
  outer:
  while (i < arr.length) {
    while (j < arr[i].length) {
      if (arr[i][j] < 0) break outer
      j++
    }
    i++
    j = 0
  }
  // Get here after break outer or when both loops terminate normally
  console.log('i:', i) // 1
  console.log('j:', j) // 1
}
console.log('// The continue statement')
{
  let arr = [2, 3, 5, -7, 11, 13]
  let count = 0
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= 0) continue
    count++
    sum += arr[i]
  }
  let avg = count === 0 ? 0 : sum / count
  console.log('avg:', avg) // 6.8
}
