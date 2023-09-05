import { consoleLog, portfinder } from '@main/shared'

export const getRandomPort = async (port: number, stopPort: number, num: number): number[] => {
  if (port <= 1000) {
    return []
  }

  if (stopPort <= 1000) {
    return []
  }

  if (num < 1) {
    return []
  }

  const getPortsPromise = new Promise((resolve, reject) => {
    portfinder.getPorts(2, { port, stopPort }, (err, ports) => {
      if (err) {
        reject()
      }

      resolve(ports)
    })
  })

  const port = (await getPortsPromise) as number[]
  consoleLog('getAvailablePort', port)
  shareState.backend.port = port[0].toString()
  shareState.backend.healthPort = port[1].toString()
}
