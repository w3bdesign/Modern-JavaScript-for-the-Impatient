// node async-generators.js

'use strict'

const produceAfterDelay = (result, delay) => {
  return new Promise((resolve, reject) => {
    const callback = () => resolve(result)
    setTimeout(callback, delay)
  })                     
}

class TimedRange {
  constructor(start, end, delay) {
    this.start = start
    this.end = end
    this.delay = delay
  }

  async *[Symbol.asyncIterator]() {
    for (let current = this.start; current < this.end; current++) {
      yield await produceAfterDelay(current, this.delay)
    }
  }
}

const main = async () => {
  let r = new TimedRange(1, 10, 1000)
  for await (const e of r) console.log(e)
}

main()
