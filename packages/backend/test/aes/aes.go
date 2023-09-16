package aes

import (
  "bytes"
  "crypto/aes"
  "crypto/cipher"
)

// AesCbcEncrypt encrypt data with key use AES CBC algorithm
// len(key) should be 16, 24 or 32.
func AesCbcEncrypt(data, iv, key []byte) []byte {
  block, _ := aes.NewCipher(key)
  data = pkcs7Padding(data, block.BlockSize())

  encrypted := make([]byte, len(data))

  mode := cipher.NewCBCEncrypter(block, iv)
  mode.CryptBlocks(encrypted, data)

  return encrypted
}

// AesCbcDecrypt decrypt data with key use AES CBC algorithm
// len(key) should be 16, 24 or 32.
func AesCbcDecrypt(encrypted, iv, key []byte) []byte {
  block, _ := aes.NewCipher(key)

  mode := cipher.NewCBCDecrypter(block, iv)
  mode.CryptBlocks(encrypted, encrypted)

  decrypted := pkcs7UnPadding(encrypted)
  return decrypted
}

func pkcs7Padding(src []byte, blockSize int) []byte {
  padding := blockSize - len(src)%blockSize
  padText := bytes.Repeat([]byte{byte(padding)}, padding)
  return append(src, padText...)
}

func pkcs7UnPadding(src []byte) []byte {
  length := len(src)
  unPadding := int(src[length-1])
  return src[:(length - unPadding)]
}
