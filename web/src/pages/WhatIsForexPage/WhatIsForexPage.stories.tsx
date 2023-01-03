import type { ComponentMeta } from '@storybook/react'

import WhatIsForexPage from './WhatIsForexPage'

export const generated = () => {
  return <WhatIsForexPage />
}

export default {
  title: 'Pages/WhatIsForexPage',
  component: WhatIsForexPage,
} as ComponentMeta<typeof WhatIsForexPage>
