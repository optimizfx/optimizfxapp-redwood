import { Footer } from 'src/components/Frontpage/Footer'
import { HeaderMegaMenu } from 'src/components/Frontpage/Navbar'

type LandingLayoutProps = {
  children?: React.ReactNode
}

const footerLinks = [
  { link: '#', label: 'About' },
  { link: '#', label: 'Contact' },
  { link: '#', label: 'Terms' },
  { link: '#', label: 'Privacy' },
]

const LandingLayout = ({ children }: LandingLayoutProps) => {
  return (
    <>
      <HeaderMegaMenu />
      <main>{children}</main>
      <Footer links={footerLinks} />
    </>
  )
}

export default LandingLayout
