import { BlogNavbar } from 'src/components/Blog/BlogNavbar'

type BlogLayoutProps = {
  children?: React.ReactNode
}

const blogLinks = [
  {
    link: '/blog',
    label: 'Home',
  },
  {
    link: '/recent',
    label: 'Recent',
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
