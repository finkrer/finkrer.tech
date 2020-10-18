import Layout from 'layout/Layout'
import PostList from 'components/PostList'
import { StoryblokCDA as Storyblok } from 'lib/storyblok'
import { GetServerSideProps } from 'next'
import { containsToken } from 'lib/auth'

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const cookie = req.headers.cookie
  const authorized = containsToken(cookie)
  const res = await Storyblok.getStories()

  const posts = res.data.stories.filter(
    story => authorized || story.content.public
  )

  return {
    props: { posts },
  }
}

const Log = ({ posts }) => {
  return (
    <Layout title="Log &bull; finkrer.wtf" description="My personal blog">
      <PostList posts={posts} />
    </Layout>
  )
}

export default Log
