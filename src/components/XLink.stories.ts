import type { Meta, StoryObj } from '@storybook/react'

import { XLink } from './XLink'

const meta = {
  title: 'Components/XLink',
  component: XLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof XLink>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    to: 'React',
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    to: 'Vite',
    variant: 'secondary',
  },
}

export const Accent: Story = {
  args: {
    to: 'tailwindcss',
    variant: 'accent',
  },
}

export const AsButton: Story = {
  args: {
    to: 'TypeScript',
    asButton: true,
  },
}
