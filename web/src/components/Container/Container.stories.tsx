// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Container> = (args) => {
//   return <Container {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Container from './Container'

export const generated = () => {
  return <Container />
}

export default {
  title: 'Components/Container',
  component: Container,
} as ComponentMeta<typeof Container>
