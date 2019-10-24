import CryptoJS from 'crypto-js';
import dotenv from 'dotenv'
dotenv.config()
export const encrypttext = (text: string): string => {
    const ciphertext = CryptoJS.AES.encrypt(text, process.env.AES_SECRET_KEY);
    return ciphertext.toString()
}