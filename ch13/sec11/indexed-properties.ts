// ts-node -O '{ "target": "es2020", "strict": true }' indexed-properties.ts


// An index signature permits arbitrary properties
type Dictionary = {
  creator: string,
  [arg: string]: string | string[]
}
const dict: Dictionary = { creator: 'Pierre' }
dict.hello = ['bonjour', 'salut', 'allô']
let str = 'world'
dict[str] = 'monde'

// Other property types must be subtypes of index type
/* Compile-time error
type Dictionary = {
  created: Date, // Error—not a string or string[]
  [arg: string]: string | string[]
}
*/

// Integer index describes array-like type
type ShoppingList = {
  created: Date,
  [arg: number] : string  
}

const list: ShoppingList = {
  created: new Date()
}
list[0] = 'eggs'
list[1] = 'ham'
