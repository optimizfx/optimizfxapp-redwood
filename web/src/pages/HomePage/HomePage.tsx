import { MetaTags } from '@redwoodjs/web'

import Hero from 'src/components/Hero'
const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <Hero />
    </>
  )
}

export default HomePage
