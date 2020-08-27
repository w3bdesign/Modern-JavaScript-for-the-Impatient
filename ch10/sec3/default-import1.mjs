// node default-import1.mjs

'use strict'

console.log('// Default imports')

import CaesarCipher from './modules/caesar.mjs'

const cc = new CaesarCipher(3)
const message = 'Meet me at the toga party'
const encrypted = cc.encrypt(message)
const decrypted = cc.decrypt(encrypted)
console.log('encrypted:', encrypted) // Phhw#ph#dw#wkh#wrjd#sduw|
console.log('decrypted:', decrypted) // Meet me at the toga party
