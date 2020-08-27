// node named-imports6.mjs

'use strict'

console.log('// Importing all features into an object')

import * as CaesarCipherTools from './modules/caesar.mjs'

const message = 'Meet me at the toga party'
const key = 3
let encrypted = CaesarCipherTools.encrypt(message, key)
let decrypted = CaesarCipherTools.decrypt(encrypted, key)
console.log('encrypted:', encrypted) // Phhw#ph#dw#wkh#wrjd#sduw|
console.log('decrypted:', decrypted) // Meet me at the toga party

const CaesarCipher = CaesarCipherTools.default
const cc = new CaesarCipher(1000)
encrypted = cc.encrypt(message)
decrypted = cc.decrypt(encrypted)
console.log('encrypted:', encrypted) // еээќЈѕэЈщќЈќѐэЈќїящЈјщњќѡ
console.log('decrypted:', decrypted) // Meet me at the toga party
