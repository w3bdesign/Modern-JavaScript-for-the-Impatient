// node cloning.js


'use strict'

console.log('// Naïve approach to cloning')
let original = { name: 'Harry', age: 42 }
let cloned = { ...original } // In general, not a true clone

console.log('cloned:', cloned) // { name: 'Harry', age: 42 }
cloned = Object.create(Object.getPrototypeOf(original),
  Object.getOwnPropertyDescriptors(original)) // Better, but still shallow

console.log('cloned:', cloned) // { name: 'Harry', age: 42 }
original = { radius: 10, center: { x: 20, y: 30 } }
cloned = Object.create(Object.getPrototypeOf(original),
  Object.getOwnPropertyDescriptors(original)) // Better, but still shallow
original.center.x = 40 // clone.center.x is also changed

console.log('cloned.center:', cloned.center) // { x: 40, y: 30 }

const fred = { name: 'Fred' }
const barney = { name: 'Barney' }
fred.bestFriend = barney
barney.bestFriend = fred


console.log('// Version 1 of clone')
{
  const clone = obj => {
    if (typeof obj !== 'object' || Object.isFrozen(obj)) return obj
    const props = Object.getOwnPropertyDescriptors(obj)
    let result = Object.create(Object.getPrototypeOf(obj), props)
    for (const prop in props) 
      result[prop] = clone(obj[prop])
    return result
  }

  try {
    cloned = clone(fred)    
    console.log('cloned:', cloned) // <ref *1> { name: 'Fred', bestFriend: { name: 'Barney', bestFriend: [Circular *1] } }
    cloned.bestFriend.bestFriend === cloned
  } catch (e) {
    console.log(`Caught ${e}`)
  }
}

console.log('// Version 2 of clone - handles circular references')
{
  const clone = (obj, cloneRegistry = new Map()) => {
    if (typeof obj !== 'object' || Object.isFrozen(obj)) return obj
    if (cloneRegistry.has(obj)) return cloneRegistry.get(obj)
    const props = Object.getOwnPropertyDescriptors(obj)
    let result = Object.create(Object.getPrototypeOf(obj), props)
    cloneRegistry.set(obj, result)
    for (const prop in props) 
      result[prop] = clone(obj[prop], cloneRegistry)
    return result
  }

  try {
    cloned = clone(fred)    
    console.log('cloned:', cloned) // Array { '0': 1, '1': 2, '2': 3 }
    cloned.bestFriend.bestFriend === cloned

    cloned = clone([1, 2, 3])    
    console.log('cloned:', cloned) // false
    console.log('Array.isArray(cloned):', Array.isArray(cloned)) // [1, 2, 3]
  } catch (e) {
    console.log(`Caught ${e}`)
  }
}

console.log('// Version 3 of clone - also handles arrays')
{
  const clone = (obj, cloneRegistry = new Map()) => {
    if (typeof obj !== 'object' || Object.isFrozen(obj)) return obj
    if (cloneRegistry.has(obj)) return cloneRegistry.get(obj)
    const props = Object.getOwnPropertyDescriptors(obj)
    let result = Array.isArray(obj) ? Array.from(obj) : Object.create(Object.getPrototypeOf(obj), props)
    cloneRegistry.set(obj, result)
    for (const prop in props) 
      result[prop] = clone(obj[prop], cloneRegistry)
    return result
  }

  try {
    cloned = clone([1, 2, 3])    
    console.log('cloned:', cloned) // true
    console.log('Array.isArray(cloned):', Array.isArray(cloned)) 
  } catch (e) {
    console.log(`Caught ${e}`)
  }
  
}
