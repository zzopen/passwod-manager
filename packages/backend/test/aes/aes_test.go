package aes

import (
	"encoding/hex"
	"fmt"
	"testing"
)

var key, _ = hex.DecodeString("96B6715EF50FA4557F6CF977178E86C9")
var iv, _ = hex.DecodeString("11C500740BE44D4EE5BDAED03CE76FFF")

var data = []byte("我是仔仔")

func TestAesCbcEncrypt(t *testing.T) {

	encryptStr := AesCbcEncrypt(data, iv, key)
	fmt.Println("encryptStr:", encryptStr)
}

func TestAesCbcDecrypt(t *testing.T) {
	encryptStr := AesCbcEncrypt(data, iv, key)
	fmt.Println("encryptStr:", encryptStr)
}
