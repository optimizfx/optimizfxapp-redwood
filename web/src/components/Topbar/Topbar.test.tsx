import { render } from '@redwoodjs/testing/web'

import Topbar from './Topbar'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Topbar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Topbar />)
    }).not.toThrow()
  })
})
