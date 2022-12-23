import { Container } from '@mantine/core'

import { MetaTags } from '@redwoodjs/web'

import ArticlesCell from 'src/components/ArticlesCell'
const BlogPage = () => {
  return (
    <>
      <MetaTags title="Blog" description="Blog page" />
      <Container>
        <h1>Blog Page</h1>
        <ArticlesCell />
      </Container>
    </>
  )
}

export default BlogPage
