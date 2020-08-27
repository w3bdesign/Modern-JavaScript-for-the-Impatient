// ts-node -O '{ "target": "es2020", "strict": true }' generic-classes-types.ts


// A generic class
class Entry<K, V> {
  key: K
  value: V
  constructor(key: K, value: V) {
    this.key = key
    this.value = value      
  }
}
let result = new Entry<String, number>('Hello', 42)
console.log('result:', result) // Entry { key: 'Hello', value: 42 }

// A generic type
type Pair<T> = { first: T, second: T }
let myPair: Pair<String> = { first: 'Hello', second: 'World' }

// Type parameters can have defaults
{
  type Pair<T = any> = { first: T, second: T }
  let myPair: Pair = { first: 'Hello', second: 42 }
}

// TypeScript provides generic Set, Map, WeakMap
class Person {
  name: string
  constructor(name: string) { this.name = name; }
}

const salaries = new Map<Person, number>()

// Types can be inferred from the constructor arguments
const weekdays = new Map(
  [['Mon', 0], ['Tue', 1], ['Wed', 2], ['Thu', 3], ['Fri', 4], ['Sat', 5], ['Sun', 6]])
