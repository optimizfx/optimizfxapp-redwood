import type { ComponentMeta } from '@storybook/react'

import DashboardV2Page from './DashboardV2Page'

export const generated = () => {
  return <DashboardV2Page />
}

export default {
  title: 'Pages/DashboardV2Page',
  component: DashboardV2Page,
} as ComponentMeta<typeof DashboardV2Page>
