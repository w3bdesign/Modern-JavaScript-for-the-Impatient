// node named-imports8.mjs

'use strict'

console.log('// Running a module without importing anything')

import CaesarCipher from './modules/caesar.mjs'
import './app/init.mjs'
import fs from 'fs'

// The init module generates a file with a random key
const filename = 'random.txt'
const key = parseInt(fs.readFileSync(filename).toString())
fs.unlinkSync(filename)

const message = 'Meet me at the toga party'
const cipher = new CaesarCipher(key)

let encrypted = cipher.encrypt(message)
let decrypted = cipher.decrypt(encrypted)
console.log('encrypted:', encrypted) // ĮņņŕāŎņāłŕāŕŉņāŕŐňłāőłœŕŚ
console.log('decrypted:', decrypted) // Meet me at the toga party
