import fs from 'fs'

let result = Math.trunc(Math.random() * 1000) + '\n'
const filename = 'random.txt'
fs.writeFileSync(filename, result)
