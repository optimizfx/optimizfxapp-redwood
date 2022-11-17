import { Link, routes } from '@redwoodjs/router'

import Footer from 'src/components/Footer'
import Header from 'src/components/Header'

type LandingLayoutProps = {
  children?: React.ReactNode
}

const LandingLayout = ({ children }: LandingLayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default LandingLayout
