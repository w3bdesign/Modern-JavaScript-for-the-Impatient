// node proxies.js


'use strict'

console.log('// Trapping property access')
const obj = { name: 'Harry Smith', salary: 100000 }
const logHandler = {
  get(target, key, receiver) {
    const result = target[key]
    console.log(`get ${key.toString()} as ${result}`)
    return result    
  },
  set(target, key, value, receiver) {
    console.log(`set ${key.toString()} to ${value}`)
    target[key] = value
    return true
  }
}
const proxy = new Proxy(obj, logHandler)

// This operation is trapped
proxy.salary = 200000

// This operation is not trapped
delete proxy.salary


console.log('// Revocable proxies')
const makeOlder = (obj) => obj.age++

const target =
{ name: 'Harry', age: 42 }

const p = Proxy.revocable(target, {})


makeOlder(p.proxy)
console.log('target:', target) // { name: 'Harry', age: 43 }

p.revoke() // p.proxy is no longer usable


try {
  makeOlder(p.proxy)
} catch (exception) {
  console.log('Error:', exception.message) // Cannot perform 'get' on a proxy that has been revoked
}
