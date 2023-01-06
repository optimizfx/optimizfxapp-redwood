import type { ComponentMeta } from '@storybook/react'

import LearnPage from './LearnPage'

export const generated = () => {
  return <LearnPage />
}

export default {
  title: 'Pages/LearnPage',
  component: LearnPage,
} as ComponentMeta<typeof LearnPage>
