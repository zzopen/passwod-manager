import { consoleLog, portfinder } from '@main/shared'

export const getRandomPort = async (port: number, stopPort: number) => {
  const getPortsPromise = new Promise((resolve, reject) => {
    portfinder.getPorts(2, { port: 50000, stopPort: 50100 }, (err, ports) => {
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
