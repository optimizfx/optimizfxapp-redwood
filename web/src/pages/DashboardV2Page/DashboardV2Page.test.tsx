import { render } from '@redwoodjs/testing/web'

import DashboardV2Page from './DashboardV2Page'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('DashboardV2Page', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DashboardV2Page />)
    }).not.toThrow()
  })
})
