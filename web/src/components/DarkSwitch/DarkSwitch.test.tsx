import { render } from '@redwoodjs/testing/web'

import DarkSwitch from './DarkSwitch'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DarkSwitch', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DarkSwitch />)
    }).not.toThrow()
  })
})
