export type Data = {
  label: string,
  value: number,
}

export type TypesData = 'price' | 'seconds' | 'number'

export type GraphicProps = {
  size?: {
    height: number,
    width: number,
  },
  title: string,
  data: Data[],
  type?: TypesData,
  colors?: {
    bars?: string,
    gradient?: string,
    title?: string,
    border?: string,
    text?: string,
    lines?: string,
  },
}

export type StyleProps = {
  size: {
    height: number,
    width: number,
  },
  colors: {
    title: string,
    border: string,
    text: string,
    lines: string,
  },
}

export type BarsProps = {
  size: {
    height: number,
    width: number,
  },
  color: string,
}

export type ColorsPorps = {
  colors: {
    title: string,
    border: string,
    text: string,
    lines: string,
  },
}

export type ColorsSizePorps = {
  size: {
    height: number,
    width: number,
  },
  colors: {
    title: string,
    border: string,
    text: string,
    lines: string,
  },
}
