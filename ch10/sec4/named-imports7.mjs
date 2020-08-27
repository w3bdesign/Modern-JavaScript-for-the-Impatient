// node named-imports7.mjs

'use strict'

console.log('// Importing the default and an object with all features')

import CaesarCipher, * as CaesarCipherTools   from './modules/caesar.mjs'

const message = 'Meet me at the toga party'
const key = 3
let encrypted = CaesarCipherTools.encrypt(message, key)
let decrypted = CaesarCipherTools.decrypt(encrypted, key)
console.log('encrypted:', encrypted) // Phhw#ph#dw#wkh#wrjd#sduw|
console.log('decrypted:', decrypted) // Meet me at the toga party

const cipher = new CaesarCipher(1000)
encrypted = cipher.encrypt(message)
decrypted = cipher.decrypt(encrypted)
console.log('encrypted:', encrypted) // еээќЈѕэЈщќЈќѐэЈќїящЈјщњќѡ
console.log('decrypted:', decrypted) // Meet me at the toga party
