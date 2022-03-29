import { Graphic, GraphicPropsStorybook } from '@panhasilva/react-bar-graphs'

export const GraphicStorybook = ({
  size, title, data, colors, type,
}: GraphicPropsStorybook) => {
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
