import { dayjs } from '@common/deps'

function minute(val: number) {
  return dayjs(val * 1000).format('mm:ss')
}

export { minute }
