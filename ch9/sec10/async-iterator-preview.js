// node async-iterator-preview.js

'use strict'

const produceAfterDelay = (result, delay) => {
  return new Promise((resolve, reject) => {
    const callback = () => resolve(result)
    setTimeout(callback, delay)
  })                     
}

async function* range(start, end, delay) {
  for (let current = start; current < end; current++) {
    yield await produceAfterDelay(current, delay)
  }
}

async function main() {
  for await (const value of range(0, 10, 1000)) {
    console.log(value)
  }
}

main()
