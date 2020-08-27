// node default-import1.mjs

'use strict'

import CaesarCipher, * as cc from './modules/default-export4.mjs'

const cipher = new CaesarCipher(3)
const message = 'Meet me at the toga party'
const encrypted = cc.encrypt(message, cc.DEFAULT_KEY)
const decrypted = cipher.decrypt(encrypted)
console.log('encrypted:', encrypted) // Phhw#ph#dw#wkh#wrjd#sduw|
console.log('decrypted:', decrypted) // Meet me at the toga party
