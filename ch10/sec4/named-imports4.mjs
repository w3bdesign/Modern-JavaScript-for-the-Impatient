// node named-imports4.mjs

'use strict'

console.log('// Default and renamed imports')

import CaesarCipher, { encrypt as caesarEncrypt, decrypt as caesarDecrypt}   from './modules/caesar.mjs'

const message = 'Meet me at the toga party'
const key = 3
const cipher = new CaesarCipher(key)
const encrypted = cipher.encrypt(message)
const decrypted = caesarDecrypt(encrypted, key)
console.log('encrypted:', encrypted) // Phhw#ph#dw#wkh#wrjd#sduw|
console.log('decrypted:', decrypted) // Meet me at the toga party
