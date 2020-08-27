// node branches.js

'use strict'
console.log('// if statement')
let yourSales = 10000
let target = 20000
let bonus
let performance
if (yourSales > target) {
  performance = 'Good'
  bonus = 100
} else {
  performance = 'Mediocre'
  bonus = 0   
}

console.log('bonus:', bonus) // 0
console.log('performance:', performance) // Mediocre
console.log('// if/else statement')
yourSales = 30000
if (yourSales > 2 * target) {
  performance = 'Excellent'
  bonus = 1000
} else if (yourSales > target) {
  performance = 'Good'
  bonus = 100
} else {
  performance = 'Mediocre'
  bonus = 0   
}

console.log('bonus:', bonus) // 100
console.log('performance:', performance) // Good
console.log('// Braces not necessary')
if (yourSales > target) 
  bonus = 100

console.log('// This fails with JavaScript consoles that read one line at a time')
if (yourSales > target) 
  bonus = 100
else
  bonus = 0

console.log('// Remedy: Use braces or place everything in one line')
if (yourSales > target) bonus = 100; else bonus = 0

console.log('// This computation can be simplified...')
const x = 17
const y = 29
let max = undefined
if (x > y) max = x; else max = y
console.log('max:', max) // 29
console.log('// ...by using the conditional operator:')
max = x > y ? x : y
console.log('max:', max) // 29
