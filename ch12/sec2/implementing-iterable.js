// node implementing-iterable.js

'use strict'

console.log('// A Range will be constructed with start, end values')
{
  class Range {
    constructor(start, end) {
      this.start = start
      this.end = end
    }
    // . . .
  }
}

console.log('// It will yield an iterator')
{
  class Range {
    // . . .
    [Symbol.iterator]() { /* . . . */ }
  }
}

console.log('// The iterator will yield an instance of another class')
{
  class RangeIterator {
    constructor(current, last) {
      this.current = current
      this.last = last
    }
    next() { /* . . . */ }
  }
  
  class Range {
    // . . .
    [Symbol.iterator]() { return new RangeIterator(this.start, this.end) }
  }
}

console.log('// Complete implementation')
{
  class Range {
    constructor(start, end) {
      this.start = start
      this.end = end
    }
    [Symbol.iterator]() {
      return new RangeIterator(this.start, this.end)
    }
  }

  class RangeIterator {
    constructor(current, last) {
      this.current = current
      this.last = last
    }
    next() {
      if (this.current < this.last) {
        const result = { value: this.current }
        this.current++
        return result
      } else {
        return { done: true }
      }
    }  
  }
  
  for (const element of new Range(10, 20))
    console.log(element) // Prints 10 11 . . . 19
}

console.log('// Without the auxiliary class')
{
  class Range {
    constructor(start, end) {
      this.start = start
      this.end = end
    }
    [Symbol.iterator]() {
      let current = this.start
      let last = this.end
      return {
        next() {
          if (current < last) {
            const result = { value: current }
            current++
            return result
          } else {
            return { done: true }
          }
        }
      }
    }
  }
  
  for (const element of new Range(10, 20))
    console.log(element) // Prints 10 11 . . . 19
}
