import { render } from '@redwoodjs/testing/web'

import WhatIsForexPage from './WhatIsForexPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('WhatIsForexPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WhatIsForexPage />)
    }).not.toThrow()
  })
})
