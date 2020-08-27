// node default-import2.mjs

'use strict'

import * as cc from './modules/named-exports3.mjs'

const cipher = new cc.Cipher(cc.DEFAULT_KEY)
const message = 'Meet me at the toga party'
const encrypted = cc.caesarEncrypt(message, cc.DEFAULT_KEY)
const decrypted = cipher.decrypt(encrypted)
console.log('encrypted:', encrypted) // Phhw#ph#dw#wkh#wrjd#sduw|
console.log('decrypted:', decrypted) // Meet me at the toga party
