// node closeable-iterators.mjs

'use strict'

import fs from 'fs'

const lines = filename => {
  const file = fs.openSync(filename) // Open the file
  let done = false
  let bytes = Buffer.alloc(0)
  let fileDone = false
  
  const nextLine = () => {
    let offset = -1
    while (offset < 0) {
      offset = bytes.indexOf(0xA)
      if (offset < 0) {
        if (fileDone) {
          offset = bytes.length          
        }
        else { // Read more
          const newBytes = Buffer.alloc(10)
          let bytesRead = fs.readSync(file, newBytes)
          bytes = Buffer.concat([bytes, newBytes.slice(0, bytesRead)])
          fileDone = bytesRead < newBytes.length
        }
      } 
    } 

    let result = bytes.toString('utf8', 0, offset)    
    bytes = bytes.slice(offset + 1, bytes.length)
    done = fileDone && bytes.length === 0
    return result
  }
  return {
    [Symbol.iterator]: () => ({
      next: () => {
        if (done) {
          fs.closeSync(file); console.log('Closed file in next') // Close the file
          return { done: true }
        } else {
          const line = nextLine() // Read a line
          return { value: line }
        }
      },
    ['return']: () => {
        fs.closeSync(file); console.log('Closed file in return') // Close the file
        return { done: true } // Must return an object
      }
    })
  }
}

const find = (filename, target) => {
  for (const line of lines(filename)) {
    if (line.includes(target)) {
      return line // iterator.return() called
    }
  } // iterator.return() not called
  return undefined
}

let result = find('/usr/share/dict/words', 'Script')
console.log('result:', result) // ECMAScript
result = find('/usr/share/dict/words', 'heffalump')
console.log('result:', result) // undefined
