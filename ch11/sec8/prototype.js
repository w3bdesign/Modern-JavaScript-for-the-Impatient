// node prototype.js


'use strict'

console.log('// Getting the [[prototype]] slot')
let obj = new Date()
let proto = Object.getPrototypeOf(obj)

console.log('Object.getOwnPropertyDescriptors(proto):', Object.getOwnPropertyDescriptors(proto)) // { constructor: { value: [Function: Date], writable: true, enumerable: false, configurable: true }, toString: { value: [Function: toString], writable: true, enumerable: false, configurable: true }, toDateString: { value: [Function: toDateString], writable: true, enumerable: false, configurable: true }, toTimeString: { value: [Function: toTimeString], writable: true, enumerable: false, configurable: true }, toISOString: { value: [Function: toISOString], writable: true, enumerable: false, configurable: true }, toUTCString: { value: [Function: toUTCString], writable: true, enumerable: false, configurable: true }, toGMTString: { value: [Function: toUTCString], writable: true, enumerable: false, configurable: true }, getDate: { value: [Function: getDate], writable: true, enumerable: false, configurable: true }, setDate: { value: [Function: setDate], writable: true, enumerable: false, configurable: true }, getDay: { value: [Function: getDay], writable: true, enumerable: false, configurable: true }, getFullYear: { value: [Function: getFullYear], writable: true, enumerable: false, configurable: true }, setFullYear: { value: [Function: setFullYear], writable: true, enumerable: false, configurable: true }, getHours: { value: [Function: getHours], writable: true, enumerable: false, configurable: true }, setHours: { value: [Function: setHours], writable: true, enumerable: false, configurable: true }, getMilliseconds: { value: [Function: getMilliseconds], writable: true, enumerable: false, configurable: true }, setMilliseconds: { value: [Function: setMilliseconds], writable: true, enumerable: false, configurable: true }, getMinutes: { value: [Function: getMinutes], writable: true, enumerable: false, configurable: true }, setMinutes: { value: [Function: setMinutes], writable: true, enumerable: false, configurable: true }, getMonth: { value: [Function: getMonth], writable: true, enumerable: false, configurable: true }, setMonth: { value: [Function: setMonth], writable: true, enumerable: false, configurable: true }, getSeconds: { value: [Function: getSeconds], writable: true, enumerable: false, configurable: true }, setSeconds: { value: [Function: setSeconds], writable: true, enumerable: false, configurable: true }, getTime: { value: [Function: getTime], writable: true, enumerable: false, configurable: true }, setTime: { value: [Function: setTime], writable: true, enumerable: false, configurable: true }, getTimezoneOffset: { value: [Function: getTimezoneOffset], writable: true, enumerable: false, configurable: true }, getUTCDate: { value: [Function: getUTCDate], writable: true, enumerable: false, configurable: true }, setUTCDate: { value: [Function: setUTCDate], writable: true, enumerable: false, configurable: true }, getUTCDay: { value: [Function: getUTCDay], writable: true, enumerable: false, configurable: true }, getUTCFullYear: { value: [Function: getUTCFullYear], writable: true, enumerable: false, configurable: true }, setUTCFullYear: { value: [Function: setUTCFullYear], writable: true, enumerable: false, configurable: true }, getUTCHours: { value: [Function: getUTCHours], writable: true, enumerable: false, configurable: true }, setUTCHours: { value: [Function: setUTCHours], writable: true, enumerable: false, configurable: true }, getUTCMilliseconds: { value: [Function: getUTCMilliseconds], writable: true, enumerable: false, configurable: true }, setUTCMilliseconds: { value: [Function: setUTCMilliseconds], writable: true, enumerable: false, configurable: true }, getUTCMinutes: { value: [Function: getUTCMinutes], writable: true, enumerable: false, configurable: true }, setUTCMinutes: { value: [Function: setUTCMinutes], writable: true, enumerable: false, configurable: true }, getUTCMonth: { value: [Function: getUTCMonth], writable: true, enumerable: false, configurable: true }, setUTCMonth: { value: [Function: setUTCMonth], writable: true, enumerable: false, configurable: true }, getUTCSeconds: { value: [Function: getUTCSeconds], writable: true, enumerable: false, configurable: true }, setUTCSeconds: { value: [Function: setUTCSeconds], writable: true, enumerable: false, configurable: true }, valueOf: { value: [Function: valueOf], writable: true, enumerable: false, configurable: true }, getYear: { value: [Function: getYear], writable: true, enumerable: false, configurable: true }, setYear: { value: [Function: setYear], writable: true, enumerable: false, configurable: true }, toJSON: { value: [Function: toJSON], writable: true, enumerable: false, configurable: true }, toLocaleString: { value: [Function: toLocaleString], writable: true, enumerable: false, configurable: true }, toLocaleDateString: { value: [Function: toLocaleDateString], writable: true, enumerable: false, configurable: true }, toLocaleTimeString: { value: [Function: toLocaleTimeString], writable: true, enumerable: false, configurable: true }, [Symbol(Symbol.toPrimitive)]: { value: [Function: [Symbol.toPrimitive]], writable: false, enumerable: false, configurable: true } }

console.log('// The [[prototype]] slot is the constructor’s prototype property')
console.log('Object.getPrototypeOf(\'Fred\') === String.prototype:', Object.getPrototypeOf('Fred') === String.prototype) // true

class Employee {
  constructor(name, salary) {
    this.name = name
    this.salary = salary
  }
  raiseSalary(percent) {
    this.salary *= 1 + percent / 100
  }
}

obj = new Employee('Harry Smith', 90000)
let proto2 = Object.getPrototypeOf(obj)

console.log('Object.getOwnPropertyDescriptors(proto2):', Object.getOwnPropertyDescriptors(proto2)) // { constructor: { value: [Function: Employee], writable: true, enumerable: false, configurable: true }, raiseSalary: { value: [Function: raiseSalary], writable: true, enumerable: false, configurable: true } }

console.log('// Setting the [[prototype]] slot')
proto = Employee.prototype
obj = { name: 'Sally Lopez', salary: 100000 }
Object.setPrototypeOf(obj, proto)

obj.raiseSalary(10)
console.log('obj:', obj) // Employee { name: 'Sally Lopez', salary: 110000.00000000001 }

console.log('// Array.prototype is actually an array!')
console.log('Array.prototype:', Array.prototype) // []
