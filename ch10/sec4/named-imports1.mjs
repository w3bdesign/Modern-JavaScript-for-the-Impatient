// node named-imports1.mjs

'use strict'

console.log('// Named import')

import { encrypt, decrypt } from './modules/caesar.mjs'

const message = 'Meet me at the toga party'
const key = 3
const encrypted = encrypt(message, key)
const decrypted = decrypt(encrypted, key)
console.log('encrypted:', encrypted) // Phhw#ph#dw#wkh#wrjd#sduw|
console.log('decrypted:', decrypted) // Meet me at the toga party
