const UNICODE_CHARS = 17 * 65536

export default class Cipher {
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

export const encrypt = (str, key) => 
  String.fromCodePoint(...[...str].map(c =>
    (c.codePointAt(0) + key) % UNICODE_CHARS))  

export const decrypt = (str, key) => 
  String.fromCodePoint(...[...str].map(c =>
    (c.codePointAt(0) - key + UNICODE_CHARS) % UNICODE_CHARS))

