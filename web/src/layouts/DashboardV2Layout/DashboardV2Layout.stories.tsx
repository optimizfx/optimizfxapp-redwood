import type { ComponentMeta, ComponentStory } from '@storybook/react'

import DashboardV2Layout from './DashboardV2Layout'

export const generated: ComponentStory<typeof DashboardV2Layout> = (args) => {
  return <DashboardV2Layout {...args} />
}

export default {
  title: 'Layouts/DashboardV2Layout',
  component: DashboardV2Layout,
} as ComponentMeta<typeof DashboardV2Layout>
