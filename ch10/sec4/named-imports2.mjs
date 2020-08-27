// node named-imports2.mjs

'use strict'

console.log('// Renaming imported features')

import { encrypt as caesarEncrypt, decrypt as caesarDecrypt }
  from './modules/caesar.mjs'

const message = 'Meet me at the toga party'
const key = 3
const encrypted = caesarEncrypt(message, key)
const decrypted = caesarDecrypt(encrypted, key)
console.log('encrypted:', encrypted) // Phhw#ph#dw#wkh#wrjd#sduw|
console.log('decrypted:', decrypted) // Meet me at the toga party
