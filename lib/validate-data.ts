import { Size, Colors } from './types'

export const verifySize = (size: Size | undefined, length: number) => {
  if (size) {
    const formatSize = {
      width: size.width >= 42 * length ? size.width : 42 * length,
      height: size.height >= 200 ? size.height : 200,
    }
    return formatSize
  }

  return { height: 400, width: 643 }
}

const verifyColor = (color: string | undefined) => {
  if (color) {
    const colorMatch = color.match(/^(#\w{3}|#\w{6})$/)
    const result = colorMatch !== null ? color : null
    return result
  }
  if (color === undefined) {
    return null
  }
  return null
}

export const verifyStyle = (colors: Colors | undefined) => {
  const style = {
    title: '#636363',
    border: '#bbbbbb',
    lines: '#d7d6d6',
    text: '#636363',
  }

  if (colors) {
    const result = {
      border: verifyColor(colors.border) || '#bbbbbb',
      title: verifyColor(colors.title) || '#636363',
      lines: verifyColor(colors.lines) || '#d7d6d6',
      text: verifyColor(colors.text) || '#636363',
    }
    return result
  }
  return style
}

export const verifyBackground = (colors: Colors | undefined) => {
  if (colors) {
    if (colors.bars) {
      const color = verifyColor(colors.bars)
      const result = color !== null ? colors.bars : 'linear-gradient(#fd749b, #281ac8)'
      return result
    }
    if (colors.gradient) {
      const gradient = colors.gradient.match(
        /^linear-gradient\((#\w{3}|#\w{6}),\s(#\w{3}|#\w{6})\)$/)
      const result = gradient !== null ? colors.gradient : 'linear-gradient(#fd749b, #281ac8)'
      return result
    }
  }
  return 'linear-gradient(#fd749b, #281ac8)'
}

export const verifyTitle = (title: string) => {
  if (title === '') {
    return 'Gráfico'
  }
  return title
}
