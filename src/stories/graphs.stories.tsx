import { ComponentStory, ComponentMeta } from '@storybook/react'
import { GraphicStorybook } from './graphic-storybook'

export default {
  title: 'Example/Graphs',
} as ComponentMeta<typeof GraphicStorybook>

const Template: ComponentStory<typeof GraphicStorybook> = (args) => {
  return (
    <GraphicStorybook {...args} />
  )
}

const data = [
  { label: 'Mon', value: 7200 },
  { label: 'Tue', value: 3600 },
  { label: 'Wed', value: 5400 },
  { label: 'Thu', value: 9000 },
  { label: 'Fri', value: 6480 },
  { label: 'Sat', value: 9720 },
  { label: 'Sun', value: 1800 },
]

export const Default = Template.bind({})
Default.args = {
  data: data,
  title: 'Default',
}

export const Size = Template.bind({})
Size.args = {
  data: data,
  title: 'Custom Size',
  size: {
    height: 400,
    width: 500,
  },
}

export const Colors = Template.bind({})
Colors.args = {
  data: data,
  title: 'Custom Colors',
  colors: {
    bars: '#C70039',
    border: '#DAF7A6',
    title: '#581845',
    lines: '#DAF7A6',
    text: '#581845',
  },
}

export const Price = Template.bind({})
Price.args = {
  data: data,
  title: 'Type Price',
  type: 'price',
}

export const Seconds = Template.bind({})
Seconds.args = {
  data: data,
  title: 'Type Seconds',
  type: 'seconds',
}
