import type { ComponentMeta, ComponentStory } from '@storybook/react'

import LandingLayout from './LandingLayout'

export const generated: ComponentStory<typeof LandingLayout> = (args) => {
  return <LandingLayout {...args} />
}

export default {
  title: 'Layouts/LandingLayout',
  component: LandingLayout,
} as ComponentMeta<typeof LandingLayout>
