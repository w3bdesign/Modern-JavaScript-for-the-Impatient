// node named-imports3.mjs

'use strict'

console.log('// Import default and named features')

import CaesarCipher, { encrypt, decrypt } from './modules/caesar.mjs'

const message = 'Meet me at the toga party'
const key = 3
const cipher = new CaesarCipher(key)
const encrypted = cipher.encrypt(message)
const decrypted = decrypt(encrypted, key)
console.log('encrypted:', encrypted) // Phhw#ph#dw#wkh#wrjd#sduw|
console.log('decrypted:', decrypted) // Meet me at the toga party
