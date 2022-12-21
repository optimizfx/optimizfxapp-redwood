import { Link, routes } from '@redwoodjs/router'

import Footer from 'src/components/Footer'
import { HeaderMegaMenu } from 'src/components/Frontpage/Navbar'

type LandingLayoutProps = {
  children?: React.ReactNode
}

const LandingLayout = ({ children }: LandingLayoutProps) => {
  return (
    <>
      <HeaderMegaMenu />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default LandingLayout
