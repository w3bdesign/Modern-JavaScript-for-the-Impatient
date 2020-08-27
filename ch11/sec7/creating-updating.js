// node creating-updating.js


'use strict'

const proto = {
  toString: function() {
    return `${this.name} with id ${this.id}`
  }
}

const propertiesWithDescriptors = {
  name: {
    value: 'James Bond',
    writable: true,
    enumerable: true,
    configurable: true
  },
  id: {
    value: '007',
    writable: false,
    enumerable: true,
    configurable: true    
  }
}
const obj = Object.create(proto, propertiesWithDescriptors)

console.log('obj.toString():', obj.toString()) // James Bond with id 007

let james = Object.fromEntries([['name', 'James Bond'], ['id', '007']])

console.log('james:', james) // { name: 'James Bond', id: '007' }
const genericSpy = { department: 'MI5' }
james = Object.assign(james, { salary: 300000 }, genericSpy)

console.log('james:', james) // { name: 'James Bond', id: '007', salary: 300000, department: 'MI5' }
