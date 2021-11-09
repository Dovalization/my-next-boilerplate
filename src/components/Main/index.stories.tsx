import { Meta, Story } from '@storybook/react'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'My Next.Js Boilerplate',
    description: 'TypeScript, ReactJS, NextJS e Styled Components'
  }
} as Meta

export const Default: Story = (args) => <Main {...args} />

export const Basic: Story = (args) => <Main {...args} />
Basic.args = {
  title: 'Just a basic title',
  description: 'Just a basic description'
}
