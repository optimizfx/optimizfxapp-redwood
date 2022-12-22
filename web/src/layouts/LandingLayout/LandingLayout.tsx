import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from '@mantine/core'
import { useLocalStorage } from '@mantine/hooks'

import { Link, routes } from '@redwoodjs/router'

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
  // Set color theme state and save to local storage
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  })

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <HeaderMegaMenu />
        <main>{children}</main>
        <Footer links={footerLinks} />
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default LandingLayout
