import { BlogNavbar } from 'src/components/Blog/BlogNavbar'

type BlogLayoutProps = {
  children?: React.ReactNode
}

const blogLinks = [
  {
    link: '/',
    label: 'Home',
  },
]

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return (
    <>
      <BlogNavbar links={blogLinks} />
      {children}
    </>
  )
}

export default BlogLayout
