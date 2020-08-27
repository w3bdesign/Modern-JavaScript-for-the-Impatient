console.log('// Exporting an anonymous class as default')

const UNICODE_CHARS = 17 * 65536

export const encrypt = (str, key) =>
  String.fromCodePoint(...[...str].map(c =>
    (c.codePointAt(0) + key) % UNICODE_CHARS))  

export default class { // No need to name this class
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