// node default-import2.mjs

'use strict'

console.log('// Default imports with renaming')

import CC from './modules/caesar.mjs'

const cc = new CC(3)
const message = 'Meet me at the toga party'
const encrypted = cc.encrypt(message)
const decrypted = cc.decrypt(encrypted)
console.log('encrypted:', encrypted) // Phhw#ph#dw#wkh#wrjd#sduw|
console.log('decrypted:', decrypted) // Meet me at the toga party
