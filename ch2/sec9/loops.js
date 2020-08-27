// node loops.js

'use strict'
console.log('// A while loop')
let balance = 0
let paymentAmount = 20000
let goal = 1000000
let interestRate = 2
let years = 0
while (balance < goal) {
  balance += paymentAmount
  let interest = balance * interestRate / 100
  balance += interest
  years++
}
console.log(`Goal reached in ${years} years.`)

console.log('// A do loop')
let s = 'Hello, yellow World!'
let i = s.indexOf(' ')
console.log('i:', i) // 6
do {
  i++
} while (i < s.length && s[i] != ' ')
console.log('i:', i) // 13
