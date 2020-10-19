import { PostInfo } from 'lib/data'
import { getPostList } from 'lib/mdx'
import { GetStaticProps } from 'next'
import Layout from 'layout/Layout'
import PostPreview from 'components/PostPreview'

export const getStaticProps: GetStaticProps = async () => {
  const posts = getPostList().filter(post => post.frontMatter.public)

  return { props: { posts } }
}

const Blog = ({ posts }: { posts: PostInfo[] }) => {
  return (
    <Layout title="Log &bull; finkrer.wtf" description="My personal blog">
      <section className="mt-4">
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </section>
    </Layout>
  )
}

export default Blog
