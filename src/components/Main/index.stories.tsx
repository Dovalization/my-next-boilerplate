import Main from '.'
import { withKnobs, text } from '@storybook/addon-knobs'
import { Meta, Story } from '@storybook/react'

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs]
} as Meta

export const Basic: Story = () => (
  <Main
    title={text('Title', 'My Next.JS Boilerplate')}
    description={text(
      'Description',
      'TypeScript, ReactJS, NextJS and Styled Components'
    )}
  />
)
