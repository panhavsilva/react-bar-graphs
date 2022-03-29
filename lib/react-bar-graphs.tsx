import { motion } from 'framer-motion'
import * as G from './graphs-style'
import { GraphicProps } from './types'
import { maxValue, ranges } from './format-data'

export type GraphicPropsStorybook = GraphicProps

export const Graphic = ({
  size, title, data, colors, type,
}: GraphicProps) => {
  const background = colors?.bars || colors?.gradient || 'linear-gradient(#fd749b, #281ac8)'
  const style = {
    border: colors?.border || '#bbbbbb',
    title: colors?.title || '#636363',
    lines: colors?.lines || '#d7d6d6',
    text: colors?.text || '#636363',
  }
  const dimensions = size || { height: 400, width: 643 }
  const graphsType = type || 'number'
  const yAxis = ranges(data, graphsType)
  const onePiece = ((dimensions.height - 70) / maxValue(data))

  return (
    <G.Container size={dimensions} colors={style}>
      <G.Title colors={style}>{title}</G.Title>
      <G.YAxis colors={style}>
        {yAxis.map((item) => (
          <G.Hours key={item} title={item} colors={style}>
            {graphsType === 'seconds' && item.match(/\d\d:\d\d/g)}
            {graphsType === 'price' && item}
            {graphsType === 'number' && item}
          </G.Hours>
        ))}
      </G.YAxis>
      <G.Shape>
        <G.Grid colors={style} />
        <G.Grid colors={style} />
        <G.Grid colors={style} />
        <G.Grid colors={style} />
        <G.Bars size={dimensions} color={background}>
          {data.map((item) => (
            <motion.div
              className='bar-day'
              initial={{ height: 0 }}
              animate={{ height: (item.value * onePiece) + 'px' }}
              transition={{
                ease: 'easeOut',
                duration: 2,
                stiffness: 260,
                damping: 20,
              }}
              key={item.label}
            />
          ))}
        </G.Bars>
      </G.Shape>
      <G.XAxis colors={style}>
        {data.map((item) => (
          <G.Day key={item.label}>{item.label}</G.Day>
        ))}
      </G.XAxis>
    </G.Container>
  )
}
