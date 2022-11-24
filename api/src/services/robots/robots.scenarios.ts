import type { Prisma, Robot } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.RobotCreateArgs>({
  robot: {
    one: {
      data: {
        description: 'String',
        pairs: 'String',
        timeframe: 'String',
        image: 'String',
        files: 'String',
        updatedAt: '2022-11-23T07:22:41.031Z',
      },
    },
    two: {
      data: {
        description: 'String',
        pairs: 'String',
        timeframe: 'String',
        image: 'String',
        files: 'String',
        updatedAt: '2022-11-23T07:22:41.031Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Robot, 'robot'>
