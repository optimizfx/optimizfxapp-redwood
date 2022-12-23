import { BlogNavbar } from 'src/components/Blog/BlogNavbar'

type BlogLayoutProps = {
  children?: React.ReactNode
}

const blogLinks = [
  {
    link: '/about',
    label: 'Features',
  },
  {
    link: '/pricing',
    label: 'Pricing',
  },
  {
    link: '/learn',
    label: 'Learn',
  },
  {
    link: '/community',
    label: 'Community',
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
