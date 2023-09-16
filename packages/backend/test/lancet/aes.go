package main

import (
	"crypto/rand"
	"fmt"
	"github.com/duke-git/lancet/v2/cryptor"
	"io"
)

var key = "123456abcdefghijklmnopqrstuvwxyz"

func main() {
	tAes()
}

func tAes() {
	data := "我是仔仔"
	e := tEncrypt([]byte(data))
	ba := cryptor.Base64StdEncode(string(e))
	fmt.Println("base64后数据", ba)
	tDecrypt(e)
}

func tEncrypt(data []byte) []byte {
	aesCbcEncrypt := cryptor.AesCbcEncrypt(data, []byte(key))
	fmt.Println("加密后数据", string(aesCbcEncrypt))
	return aesCbcEncrypt
}

func tDecrypt(aesCbcEncrypt []byte) {
	aesCbcDecrypt := cryptor.AesCbcDecrypt(aesCbcEncrypt, []byte(key))
	fmt.Println("解密后数据", string(aesCbcDecrypt))
}

func t1() {
	l1 := 2
	blockSize := 16
	encrypted := make([]byte, blockSize+l1)
	iv := encrypted[:blockSize]
	if _, err := io.ReadFull(rand.Reader, iv); err != nil {
		panic(err)
	}

	fmt.Println("iv:", iv, string(iv))
	fmt.Println("iv:", encrypted, string(encrypted))
}

func t3() {
	data := []byte{0x12, 0x34, 0x56, 0x78}

	//取出前3位
	lowerBits := (data[0] & 0x0F) | ((data[1] & 0xFF) << 4)

	fmt.Printf("Lower 3 bits: %X\n", lowerBits)
}
