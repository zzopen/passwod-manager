/**** platform ****/
export const isLinux = process.platform == 'linux'
export const isWin = process.platform == 'win32'
export const isMac = process.platform == 'darwin'

/**** env ****/
export const isProd = process.env.NODE_ENV == 'production'
export const isDev = process.env.NODE_ENV == 'development'
