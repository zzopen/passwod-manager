package main

import (
	"encoding/base64"
	"encoding/hex"
	"fmt"
	"github.com/duke-git/lancet/v2/cryptor"
)

func main() {
	//testByte()
	test11()
	//testBase64()
}

func testHex() {
	str := "Hello, World!"
	s := hex.EncodeToString([]byte(str))
	fmt.Println("hex 编码后:", s)
}

func testByte() {
	str := "a"
	strByte := []byte(str)
	fmt.Printf("16 进制表示: %x\n", strByte)
	fmt.Println("str 转 byte:", strByte)
}

func testBase64() {
	str := "a"
	strByte := []byte(str)
	base64Str := base64.StdEncoding.EncodeToString(strByte)
	fmt.Println("base64:", base64Str)
	fmt.Println("base64:", cryptor.Base64StdEncode(str))
}

func test11() {
	data := []byte("abc")
	fmt.Println("data:", data, len(data))
	iv := []byte("123")
	fmt.Println("iv:", iv, len(iv))
	var encrypted []byte
	fmt.Println("encrypted 1:", encrypted, len(encrypted), string(encrypted))
	encrypted = append(encrypted, iv...)
	encrypted = append(encrypted, data...)
	//iv := encrypted[:aes.BlockSize]
	//if _, err := io.ReadFull(rand.Reader, iv); err != nil {
	//	panic(err)
	//}
	fmt.Println("encrypted:", encrypted, len(encrypted), string(encrypted))
	a := string(encrypted)
	fmt.Println("a:", a, len(a), a == "123ab")
	fmt.Println("base64:", cryptor.Base64StdEncode(a))
}
