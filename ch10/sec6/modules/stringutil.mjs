export default {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  digits: '0123456789',
  brackets: '()[]{}<>',
  punctuation: ',.?!;:\'"',
  symbols: '@#$%^&*-_=+\\|/`~',
  whitespace: ' \n\r\t'
}

import { Random } from './random.mjs'

export const shuffle = str => {
  const chars = [...str]
  const p = Random.permutation(0, chars.length)
  return p.map(i => chars[i]).join('')
}

