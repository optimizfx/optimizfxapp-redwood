import { render } from '@redwoodjs/testing/web'

import DashboardV2Layout from './DashboardV2Layout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('DashboardV2Layout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DashboardV2Layout />)
    }).not.toThrow()
  })
})
