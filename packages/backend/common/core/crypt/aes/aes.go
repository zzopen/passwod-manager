package aes

import (
  "github.com/duke-git/lancet/v2/cryptor"
  "zz-cipher/common/core/tool"
)

func CbcEncrypt(data string, key string) string {
  re := cryptor.AesCbcEncrypt([]byte(data), []byte(key))
  return cryptor.Base64StdEncode(string(re))
}

func CbcDecrypt(encrypted string, key string) string {
  if !tool.IsBase64(encrypted) {
    return encrypted
  }

  base64Str := cryptor.Base64StdDecode(encrypted)
  res := cryptor.AesCbcDecrypt([]byte(base64Str), []byte(key))
  return string(res)
}
