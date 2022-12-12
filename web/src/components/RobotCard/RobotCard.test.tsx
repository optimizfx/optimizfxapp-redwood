import { render } from '@redwoodjs/testing/web'

import RobotCard from './RobotCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('RobotCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RobotCard />)
    }).not.toThrow()
  })
})
