// import CryptoJS from 'crypto-js'
// import { utf8StrToHex, getRandomBuffer, hexToUtf8Str } from '@common/shared/utils'
// const BLOCK_SIZE = 16

// const aesKey = () => {
//   return '123456abcdefghijklmnopqrstuvwxyz'
// }

// const aesKeyHex = () => {
//   return utf8StrToHex(aesKey())
// }

// // 加密key, 16进制字符串
// const AES_KEY = CryptoJS.enc.Hex.parse(aesKeyHex())

// const encrypt = (data: string) => {
//   const ivBuffer = getRandomBuffer(BLOCK_SIZE)
//   const ivHexStr = utf8StrToHex(ivBuffer.toString('utf-8'))
//   const iv = CryptoJS.enc.Hex.parse(ivHexStr)
//   const srcs = CryptoJS.enc.Utf8.parse(data)
//   const encrypted = CryptoJS.AES.encrypt(srcs, AES_KEY, {
//     iv: iv,
//     mode: CryptoJS.mode.CBC,
//     padding: CryptoJS.pad.Pkcs7
//   })

//   const encryptedBuffer = Buffer.from(encrypted.ciphertext.toString(), 'utf-8')
//   const res = Buffer.concat([ivBuffer, encryptedBuffer])
//   console.log('res:', res.toString('utf-8'))
//   console.log('res-btoa:', btoa(res.toString('utf-8')))
//   return ''
// }

// const decrypt = (encrypted: string) => {
//   // 首先使用base64解码
//   const data = atob(encrypted)
//   console.log('encrypted:', encrypted)
//   console.log('data:', data)
//   const buf = Buffer.from(data, 'utf-8')
//   console.log('buf:', buf)
//   const ivBuf = buf.subarray(0, BLOCK_SIZE)
//   const ivBuf1 = buf.subarray(BLOCK_SIZE, buf.length)
//   console.log('ivBuf:', ivBuf)
//   console.log('ivBuf1:', ivBuf1.toString())
//   const base64 = CryptoJS.enc.Base64.parse(encrypted)
//   console.log('base64:', base64)
//   const src = CryptoJS.enc.Base64.stringify(base64)
//   console.log('src:', src)
//   const decrypted = CryptoJS.AES.decrypt(src, AES_KEY, {
//     iv: CryptoJS.enc.Utf8.parse(ivBuf.toString('utf-8')),
//     mode: CryptoJS.mode.CBC,
//     padding: { pad: pkcs7Padding, unpad: pkcs7UnPadding }
//     //CryptoJS.pad.NoPadding
//   })
//   const decryptedStr = decrypted.toString()
//   console.log('decryptedStr:', decryptedStr, hexToUtf8Str(decryptedStr))
//   return decryptedStr
// }

// const pkcs7Padding = (data: any, blockSize = 4) => {
//   // Shortcut
//   const blockSizeBytes = blockSize * 4

//   // Count padding bytes
//   const nPaddingBytes = blockSizeBytes - (data.sigBytes % blockSizeBytes)

//   // // Create padding word
//   // const paddingWord =
//   //   (nPaddingBytes << 24) | (nPaddingBytes << 16) | (nPaddingBytes << 8) | nPaddingBytes

//   // Create padding
//   const paddingWords: number[] = []
//   for (let i = 1; i <= nPaddingBytes; i++) {
//     paddingWords.push(nPaddingBytes)
//   }

//   console.log('paddingWords:', paddingWords)
//   const padding = CryptoJS.lib.WordArray.create(paddingWords, nPaddingBytes)

//   // Add padding
//   data.concat(padding)
// }
// const pkcs7UnPadding = (data: any) => {
//   // Get number of padding bytes from last byte
//   const nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff

//   // Remove padding
//   data.sigBytes -= nPaddingBytes
// }

// export const AES = {
//   encrypt,
//   decrypt
// }

export {}
