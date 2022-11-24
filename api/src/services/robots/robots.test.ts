import type { Robot } from '@prisma/client'

import { robots, robot, createRobot, updateRobot, deleteRobot } from './robots'
import type { StandardScenario } from './robots.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('robots', () => {
  scenario('returns all robots', async (scenario: StandardScenario) => {
    const result = await robots()

    expect(result.length).toEqual(Object.keys(scenario.robot).length)
  })

  scenario('returns a single robot', async (scenario: StandardScenario) => {
    const result = await robot({ id: scenario.robot.one.id })

    expect(result).toEqual(scenario.robot.one)
  })

  scenario('creates a robot', async () => {
    const result = await createRobot({
      input: {
        description: 'String',
        pairs: 'String',
        timeframe: 'String',
        image: 'String',
        files: 'String',
        updatedAt: '2022-11-23T07:22:41.020Z',
      },
    })

    expect(result.description).toEqual('String')
    expect(result.pairs).toEqual('String')
    expect(result.timeframe).toEqual('String')
    expect(result.image).toEqual('String')
    expect(result.files).toEqual('String')
    expect(result.updatedAt).toEqual(new Date('2022-11-23T07:22:41.020Z'))
  })

  scenario('updates a robot', async (scenario: StandardScenario) => {
    const original = (await robot({ id: scenario.robot.one.id })) as Robot
    const result = await updateRobot({
      id: original.id,
      input: { description: 'String2' },
    })

    expect(result.description).toEqual('String2')
  })

  scenario('deletes a robot', async (scenario: StandardScenario) => {
    const original = (await deleteRobot({ id: scenario.robot.one.id })) as Robot
    const result = await robot({ id: original.id })

    expect(result).toEqual(null)
  })
})
