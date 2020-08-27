// node reflect.js


'use strict'

let obj = { name: 'Harry', age: 42 }

console.log('// Logging of get/set with Reflect class')
{  
  const logHandler = {
    get(target, key, receiver) {
      console.log(`get ${key.toString()}`)
      return Reflect.get(target, key, receiver)
        // Instead of return target[key]
    },
    set(target, key, value, receiver) {
      console.log(`set ${key.toString()}`)
      return Reflect.set(target, key, value, receiver)
        // Instead of target[key] = value; return true
      }
  }

  const proxy = new Proxy(obj, logHandler)
  proxy.age++
  console.log('obj:', obj) // { name: 'Harry', age: 43 }
}
console.log('// Logging of everything with Reflect class')
{
  const getHandler = {
    get(target, trapKey, receiver) {
      return (...args) => {
        console.log(`Trapping ${trapKey}`)
        return Reflect[trapKey](...args);
      }
    }
  }
  
  const logEverythingHandler = new Proxy({}, getHandler)
  
  const proxy = new Proxy(obj, logEverythingHandler)

  delete proxy.age
  console.log('obj:', obj) // { name: 'Harry' }
}
console.log('// Logging the arguments to the trap functions')
{
  const knownObjects = new WeakMap()
  
  const stringify = x => {
    if (knownObjects.has(x))
      return knownObjects.get(x)
    else
      return JSON.stringify(x)
  } 
      
  const logEverything = (name, obj) => {
    knownObjects.set(obj, name)
    const getHandler = {
      get(target, trapKey, receiver) {
        return (...args) => {
          console.log(`Trapping ${trapKey}(${args.map(stringify)})`)
          return Reflect[trapKey](...args);
        }
      }
    }
    
    const result = new Proxy(obj, new Proxy({}, getHandler))
    knownObjects.set(result, `proxy of ${name}`)
    return result
  }
  const fred = { name: 'Fred' }
  const proxyOfFred = logEverything('fred', fred)
  proxyOfFred.age = 42

}
