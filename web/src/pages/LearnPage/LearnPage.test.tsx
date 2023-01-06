import { render } from '@redwoodjs/testing/web'

import LearnPage from './LearnPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('LearnPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LearnPage />)
    }).not.toThrow()
  })
})
