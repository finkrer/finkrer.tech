import { PostInfo } from 'lib/data'
import { getPostList } from 'lib/mdx'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Placeholder from 'components/Placeholder'
import PostPreview from 'components/PostPreview'

export const getStaticProps: GetStaticProps = async () => {
  const posts = getPostList().filter((post) => post.frontMatter.public)

  return { props: { posts } }
}

const Index = ({ posts }: { posts: PostInfo[] }) => {
  return (
    <>
      <Head>
        <title>finkrer.tech</title>
        <meta name="description" content="My personal blog" />
      </Head>
      <section className="mt-4">
        {posts.length === 0 && (
          <Placeholder emoji="😳">
            Looks like I don't have any posts yet...
          </Placeholder>
        )}
        {posts.map((post) => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </section>
    </>
  )
}

export default Index
