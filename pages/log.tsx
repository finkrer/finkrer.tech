import Layout from 'layout/Layout'
import PostList from 'components/PostList'
import Explanation from 'components/Explanation'
import { StoryblokCDA as Storyblok } from 'lib/storyblok'
import { GetServerSideProps } from 'next'
import { containsToken } from 'lib/auth'

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const cookie = req.headers.cookie
  const authorized = containsToken(cookie)
  const res = await Storyblok.getStories()

  const posts = res.data.stories
    .filter((story) => authorized || story.content.public)
    .map((story) => ({
      id: story.id,
      name: story.name,
      slug: story.slug,
      first_published_at: story.first_published_at,
      body: story.content.body,
    }))

  return {
    props: { posts },
  }
}

const Log = ({ posts }) => {
  return (
    <Layout title="finkrer.wtf &bull; Log" description="My personal blog">
      <Explanation />
      <PostList posts={posts} />
    </Layout>
  )
}

export default Log
