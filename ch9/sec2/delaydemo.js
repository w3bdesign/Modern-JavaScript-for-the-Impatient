// node delaydemo.js

'use strict'
const produceAfterDelay = (result, delay) => {
  return new Promise((resolve, reject) => {
    const callback = () => resolve(result)
    setTimeout(callback, delay)
  })                     
}
const promise = produceAfterDelay(42, 1000)
console.log('promise:', promise) // Promise { <pending> }
promise.then(value => {
  console.log('value:', value) // 42
  console.log('promise:', promise) // Promise { 42 }
})
