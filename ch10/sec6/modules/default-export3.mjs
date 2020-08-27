console.log('// Exporting an anonymous function as default')

const UNICODE_CHARS = 17 * 65536

export default (str, key) => {
  return String.fromCodePoint(...[...str].map(c =>
    (c.codePointAt(0) + key) % UNICODE_CHARS))  
} // No need to name this function


export class Cipher {
  constructor(key) { this.key = key }
  encrypt(str) {
    return String.fromCodePoint(...[...str].map(c =>
      (c.codePointAt(0) + this.key) % UNICODE_CHARS))
  }
  decrypt(str) {
    return String.fromCodePoint(...[...str].map(c =>
      (c.codePointAt(0) - this.key + UNICODE_CHARS)
        % UNICODE_CHARS))
  }
}

export const DEFAULT_KEY = 3