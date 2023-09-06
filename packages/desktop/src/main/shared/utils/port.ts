import { portfinder } from '@main/shared/deps'
import { logger } from './log'

export const getAvailablePorts = async (
  port: number,
  stopPort: number,
  num = 2
): Promise<number[]> => {
  if (port <= 1000) {
    return []
  }

  if (stopPort <= 1000) {
    return []
  }

  if (num < 1) {
    return []
  }

  const getPortsPromise = new Promise((resolve) => {
    portfinder.getPorts(num, { port, stopPort }, (err, ports) => {
      if (err) {
        logger.info(err, 'getPortsPromise')
        resolve([])
      }

      logger.info(ports, 'getPortsPromise')
      resolve(ports)
    })
  })

  const ports = (await getPortsPromise) as number[]
  return ports
}
