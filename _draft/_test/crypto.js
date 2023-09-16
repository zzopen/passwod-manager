const toHexStr = (str) => {
  const buffer = Buffer.from(str, 'utf-8')
  return buffer.toString('hex')
}

// const str = 'Hello, World!'
// console.log('hex编码:', toHexStr(str))

const testBuffer = () => {
  const str = 'a'
  const buffer = Buffer.from(str, 'utf-8')
  const str1 = 'b'
  const buffer1 = Buffer.from(str1, 'utf-8')

  const buf = Buffer.concat([buffer, buffer1])
  console.log(buf.toString())
}
// testBuffer()
const testBase64 = () => {
  const str = 'a'
  const base64Str = btoa(str)
  console.log('base64Str:', base64Str)
}
// testBase64()
const testBase64De = () => {
  const base64Str = 'abbsAvZmewNjYlVrxt71ug=='
  const str = atob(base64Str)
  console.log('str:', str)
  console.log('str buffer:', Buffer.from(str, 'utf-8'))
}

// testBase64De()

const testBase64De2 = () => {
  const base64Str = 'MTIzYWJj'
  console.log('base64Str:', base64Str)
  const str = atob(base64Str)
  console.log('str:', str, typeof str, str.length, str == '123abc')
  const buf = Buffer.from(str, 'utf-8')
  console.log('buf:', buf, buf.length, buf.toString())
  const slicedBuffer = buf.subarray(3, buf.length) // 含左边不含右边

  console.log('slicedBuffer:', slicedBuffer.length, slicedBuffer.toString('utf-8'))
}
testBase64De2()

const testBase64De3 = () => {
  const buffer = Buffer.from('这是一个示例', 'utf-8')

  // 截取 Buffer 的前 5 个字节
  const slicedBuffer = buffer.subarray(0, 6)

  // 将截取的 Buffer 转换为字符串并打印
  const str = slicedBuffer.toString('utf-8')
  console.log(str) // 输出 "这是一"
}
// testBase64De3()
