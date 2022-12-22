import { Container } from '@mantine/core'

import { MetaTags } from '@redwoodjs/web'

import { Contact } from 'src/components/Frontpage/Contact'
import { Features } from 'src/components/Frontpage/Features'
import { Hero } from 'src/components/Frontpage/Hero'
const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <Hero />
      <Container>
        <Features />
        <Contact />
      </Container>
    </>
  )
}

export default HomePage
