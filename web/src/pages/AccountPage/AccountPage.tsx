import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import Account from 'src/components/Account/Account'

const AccountPage = () => {
  return (
    <>
      <MetaTags title="Account" description="Account page" />

      <h1>AccountPage</h1>
      <Account />
    </>
  )
}

export default AccountPage
