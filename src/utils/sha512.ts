const sha512 = require('js-sha512').sha512;

export const encrypttext2 = (text: string): string => {
    return sha512(text)
}