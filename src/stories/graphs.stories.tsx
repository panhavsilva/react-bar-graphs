import { ComponentStory, ComponentMeta } from '@storybook/react'
import { GraphicStorybook } from './graphic-storybook'

export default {
  title: 'Example/Graphic',
} as ComponentMeta<typeof GraphicStorybook>

const Template: ComponentStory<typeof GraphicStorybook> = (args) => {
  return (
    <GraphicStorybook {...args} />
  )
}

const data = [
  { label: 'Seg', value: 7200 },
  { label: 'Ter', value: 3600 },
  { label: 'Qua', value: 5400 },
  { label: 'Qui', value: 9000 },
  { label: 'Sex', value: 6480 },
  { label: 'Sáb', value: 9720 },
  { label: 'Dom', value: 1800 },
]

export const Example = Template.bind({})
Example.args = {
  data: data,
  type: 'seconds',
  title: 'Título do gráfico',
  size: {
    height: 450,
    width: 660,
  },
  colors: {
    bars: 'purple',
    border: 'gray',
    title: 'black',
    lines: 'gray',
    text: 'black',
  },
}
