import { motion } from 'framer-motion'
import * as G from './graphs-style'
import { GraphicProps } from './types'
import { maxValue, ranges } from './format-data'
import {
  verifySize, verifyBackground, verifyTitle, verifyStyle,
} from './validate-data'

export const Graphic = ({
  size, title, data, colors, type,
}: GraphicProps) => {
  const background = verifyBackground(colors)
  const style = verifyStyle(colors)
  const dimensions = verifySize(size, data.length)
  const graphsType = type || 'number'
  const yAxis = ranges(data, graphsType)
  const onePiece = ((dimensions.height - 70) / maxValue(data))

  return (
    <G.Container size={dimensions} colors={style}>
      <G.Title colors={style}>
        {verifyTitle(title)}
      </G.Title>
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
        <G.Bars size={dimensions} color={background} quantity={data.length}>
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
      <G.XAxis colors={style} size={dimensions} quantity={data.length}>
        {data.map((item) => (
          <G.Day key={item.label} title={item.label}>{item.label}</G.Day>
        ))}
      </G.XAxis>
    </G.Container>
  )
}
