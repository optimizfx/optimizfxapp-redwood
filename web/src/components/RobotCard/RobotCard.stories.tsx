// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof RobotCard> = (args) => {
//   return <RobotCard {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import RobotCard from './RobotCard'

export const generated = () => {
  return <RobotCard />
}

export default {
  title: 'Components/RobotCard',
  component: RobotCard,
} as ComponentMeta<typeof RobotCard>
