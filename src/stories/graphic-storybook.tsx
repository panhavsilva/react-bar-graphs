import { Graphic } from '@panhasilva/react-bar-graphs'
import { GraphicProps } from '../../lib/types'

export const GraphicStorybook = ({
  size, title, data, colors, type,
}: GraphicProps) => {
  return (
    <Graphic
      size={size}
      title={title}
      data={data}
      type={type}
      colors={colors}
    />
  )
}
