import { Data, TypesData, GraphicProps } from './types'

export const maxValue = (data: Data[]) => {
  const seconds = data.map((item) => item.value)
  const result = seconds.reduce(function (accumulated, current) {
    if (accumulated > current) {
      return accumulated
    }
    return current
  }, 0)

  return result
}

export const convertSecondsToHhMmSs = (totalSeconds: number) => {
  const hours = Math.floor(totalSeconds / 3600)
  const min = Math.floor(totalSeconds % 3600 / 60)
  const seconds = Math.floor(totalSeconds % 60)
  const includesZero = (number: number) => {
    if (number < 10) { return `0${number}` }
    return number
  }
  return `${includesZero(hours)}:${includesZero(min)}:${includesZero(seconds)}`
}

export const ranges = (data: Data[], type: TypesData) => {
  const max = maxValue(data)
  const middle = Math.round(max / 2)
  const betweenMaxMiddle = Math.round((max - middle) / 2 + middle)
  const min = 0
  const betweenMiddleMin = Math.round(middle / 2)

  if (type === 'price') {
    return [
      'R$' + max,
      'R$' + betweenMaxMiddle,
      'R$' + middle,
      'R$' + betweenMiddleMin,
      'R$' + min,
    ]
  }

  if (type === 'number') {
    return [
      String(max),
      String(betweenMaxMiddle),
      String(middle),
      String(betweenMiddleMin),
      String(min),
    ]
  }

  return [
    convertSecondsToHhMmSs(max),
    convertSecondsToHhMmSs(betweenMaxMiddle),
    convertSecondsToHhMmSs(middle),
    convertSecondsToHhMmSs(betweenMiddleMin),
    convertSecondsToHhMmSs(min),
  ]
}
