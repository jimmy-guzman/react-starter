import { type Meta, type StoryObj } from '@storybook/react'

import { PageLoading as PageLoadingComponent } from './PageLoading'

const meta = {
  title: 'Components/PageLoading',
  component: PageLoadingComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PageLoadingComponent>

export default meta

type Story = StoryObj<typeof meta>

export const PageLoading: Story = {}
