// ts-node -O '{ "target": "es2020", "strict": true }' overloads.ts


// A typed count function

function count(str: string | string[], c: string) { 
  if (Array.isArray(str)) {
    let sum = 0
    for (const s of str) {
      sum += s.length - s.replace(c, '').length
    }
    return sum
  } else {
    return str.length - str.replace(c, '').length
  }
 }
console.log('count(\'Hello\', \'l\'):', count('Hello', 'l')) // 1
console.log('count([\'Hello\', \'World\'], \'l\'):', count(['Hello', 'World'], 'l')) // 2
  
// This function has type
type T = (str: string | string[], c: string) => number

// When the return type varies with the parameter types, use overloads
function remove(str: string, c: string): string
function remove(str: string[], c: string): string[]
function remove(str: string | string[], c: string) {
  if (Array.isArray(str))
    return str.map(s => s.replace(c, ''))
  else
    return str.replace(c, '')
}
const result = remove(['Fred', 'Barney'], 'e')
console.log('result:', result) // ['Frd', 'Barny']

// Overload syntax for arrow functions:
{
  const remove: {
      (arg1: string, arg2: string): string
      (arg1: string[], arg2: string): string[]
    } = (str: any, c: string) => {
    if (Array.isArray(str))
      return str.map(s => s.replace(c, ''))
    else
      return str.replace(c, '')  
  }
  const result = remove(['Fred', 'Barney'], 'e')
  console.log('result:', result) // ['Frd', 'Barny']
}

// Overloaded method syntax
class Remover {
  c: string
  constructor(c: string) { this.c = c }

  removeFrom(str: string): string
  removeFrom(str: string[]): string[]
  removeFrom(str: string | string[]) {
    if (Array.isArray(str))
      return str.map(s => s.replace(this.c, ''))
    else
      return str.replace(this.c, '')
  }
}
console.log('new Remover(\'l\').removeFrom(\'Hello\'):', new Remover('l').removeFrom('Hello')) // Helo
