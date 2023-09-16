// import randomBytes from 'randombytes'

export const utf8StrToHex = (str: string) => {
  const buffer = Buffer.from(str, 'utf8')
  return buffer.toString('hex')
}

export const hexToUtf8Str = (hex: string) => {
  const buffer = Buffer.from(hex, 'hex')
  return buffer.toString('utf-8')
}

// export const getRandomBuffer = (size: number) => {
//   return randomBytes(size)
// }
