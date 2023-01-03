import { Container, TypographyStylesProvider } from '@mantine/core'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const WhatIsForexPage = () => {
  return (
    <>
      <MetaTags title="WhatIsForex" description="WhatIsForex page" />

      <Container>
        <h1>WhatIsForexPage</h1>
        <TypographyStylesProvider>
          <p>
            Forex, or foreign exchange trading, involves buying and selling
            different currencies with the goal of making a profit from the
            resulting price movements.
          </p>
          <p>
            While individuals may exchange currency when traveling abroad, forex
            traders engage in this activity on a larger, more complex scale.
            With the advancement of technology, private investors and traders
            also have the opportunity to participate in this market.
          </p>
          <p>
            It's important to keep in mind that forex trading carries risk and
            it is essential to thoroughly understand and research the potential
            risks before getting involved.
          </p>
        </TypographyStylesProvider>
      </Container>
    </>
  )
}

export default WhatIsForexPage
