// node maps.js

'use strict'
console.log('// Construct map from iterable of pairs')
const weekdays = new Map(
  [['Mon', 0], ['Tue', 1], ['Wed', 2], ['Thu', 3], ['Fri', 4], ['Sat', 5], ['Sun', 6], ])
console.log('weekdays:', weekdays) // Map(7) { 'Mon' => 0, 'Tue' => 1, 'Wed' => 2, 'Thu' => 3, 'Fri' => 4, 'Sat' => 5, 'Sun' => 6 }
console.log('// Construct empty map and add values')
let map = new Map()
console.log('map:', map) // Map(0) {}
let key = 'Mon'
let value = 0
map.set(key, value)
console.log('map:', map) // Map(1) { 'Mon' => 0 }
let key1 = 'Tue'
let value1 = 1
let key2 = 'Wed'
let value2 = 2
map.set(key1, value1).set(key2, value2)
console.log('map:', map) // Map(3) { 'Mon' => 0, 'Tue' => 1, 'Wed' => 2 }
console.log('// Removing an entry')
let result = map.delete(key) // Returns true if the key was present, false otherwise
console.log('result:', result) 
console.log('map:', map) // Map(2) { 'Tue' => 1, 'Wed' => 2 }
console.log('// Testing whether a key is present')
result = map.has(key) // true if the map has an entry with the given key
console.log('result:', result) // false
console.log('// Retrieving a key’s value')
value = map.get(key) // Returns undefined if the key is not present
console.log('value:', value) 
console.log('// Iterating over the entries')
for (const [key, value] of map) {
  console.log(key, value)
}

map.forEach((value, key) => {
  console.log(key, value)
})

console.log('// Maps are iterated in insertion order')
for (const [key, value] of weekdays) { console.log({key, value}) }
weekdays.forEach((value, key) => console.log({key, value}))
console.log('// All collections have keys, values, entries methods')
for (const key of map.keys()) console.log({key})
console.log('// Caution: Distinct objects are separate keys')
map = new Map()
key1 = new Date('1970-01-01T00:00:00.000Z')
key2 = new Date('1970-01-01T00:00:00.000Z')
map.set(key1, 'Hello')
map.set(key2, 'Epoch') // Now map has two entries
console.log('map:', map) // Map(2) { 1970-01-01T00:00:00.000Z => 'Hello', 1970-01-01T00:00:00.000Z => 'Epoch' }
