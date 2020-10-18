import { PostInfo } from 'lib/data'
import { getPostList } from 'lib/mdx'
import { GetStaticProps } from 'next'
import Layout from 'layout/Layout'
import PostList from 'components/PostList'

export const getStaticProps: GetStaticProps = async () => {
  const posts = getPostList().filter(post => post.frontMatter.public)

  return { props: { posts } }
}

const Blog = ({ posts }: { posts: PostInfo[] }) => {
  return (
    <Layout title="Log &bull; finkrer.wtf" description="My personal blog">
      <PostList posts={posts} />
    </Layout>
  )
}

export default Blog
