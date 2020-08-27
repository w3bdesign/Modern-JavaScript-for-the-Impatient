export const randInt = (a, b) => Math.ceil(a) + Math.floor((b - a) * Math.random())
export const randDouble = (a, b) => a + (b - a) * Math.random()

// A random permutation of [a, a + 1, ..., b - 1]
export const randPermutation = (a, b) => {
  const elements = []
  for (let i = a; i < b; i++) elements.push(i)
  const result = []
  while (elements.length > 0)
    result.push(elements.splice(randInt(0, elements.length), 1)[0])
  return result
}

export const Random = { int: randInt, double: randDouble, permutation: randPermutation }


