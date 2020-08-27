// node proxy-invariants.js


'use strict'

console.log('// Range proxy attempt 1')
{
  const createRange = (start, end) => {
    const isIndex = key => 
      typeof key === 'string' && /^[0-9]+$/.test(key) && parseInt(key) < end - start  
  
    return new Proxy({}, {
      get: (target, key, receiver) => {
        if (isIndex(key)) {
          return start + parseInt(key)
        } else {
          return Reflect.get(target, key, receiver)
        }
      }
    })
  }

  
  const range = createRange(10, 100)
  console.log('range[10]:', range[10]) // 20

  // Problem: Can't iterate over keys
  console.log('Object.keys(range):', Object.keys(range)) // []
}

console.log('// Attempt 2: Add ownKeys trap')
{  
  const createRange = (start, end) => {
    const isIndex = key => 
      typeof key === 'string' && /^[0-9]+$/.test(key) && parseInt(key) < end - start  

    return new Proxy({}, {
      get: (target, key, receiver) => {
        if (isIndex(key)) {
          return start + parseInt(key)
        } else {
          return Reflect.get(target, key, receiver)
        }
      },
      ownKeys: target => {
        const result = Reflect.ownKeys(target)
        for (let i = 0; i < end - start; i++)
          result.push(String(i))
        return result      
      }

    })
  }

  const range = createRange(10, 100)
  console.log('range[10]:', range[10]) // 20

  // Problem: Still can't iterate over keys
  console.log('Object.keys(range):', Object.keys(range)) // []
}

console.log('// Attempt 3: Add descriptors for the index properties')
{
  const createRange = (start, end) => {
    const isIndex = key => 
          typeof key === 'string' && /^[0-9]+$/.test(key) && parseInt(key) < end - start  

    return new Proxy({}, {
      get: (target, key, receiver) => {
        if (isIndex(key)) {
          return start + parseInt(key)
        } else {
          return Reflect.get(target, key, receiver)
        }
      },
      ownKeys: target => {
        const result = Reflect.ownKeys(target)
        for (let i = 0; i < end - start; i++)
          result.push(String(i))
        return result      
      } , 
      
      getOwnPropertyDescriptor: (target, key) => {
        if (isIndex(key)) {
          return {
            value: start + Number(key),
            writable: false,
            enumerable: true,
            configurable: true // Not what we actually want
            }
          } else {
            return Reflect.getOwnPropertyDescriptor(target, key)
          }
      }

    })
  }
  
  const range = createRange(10, 100)
  console.log('range[10]:', range[10]) // 20

  // Finally: Sweet success
  console.log('Object.keys(range):', Object.keys(range)) // ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89']
}
