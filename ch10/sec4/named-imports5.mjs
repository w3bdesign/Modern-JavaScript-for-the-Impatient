// node named-imports5.mjs

'use strict'

console.log('// Use braces when importing a single nondefault feature')

import { encrypt } from './modules/caesar.mjs'

const message = 'Meet me at the toga party'
const key = 3
const encrypted = encrypt(message, key)
console.log('encrypted:', encrypted) // Phhw#ph#dw#wkh#wrjd#sduw|
