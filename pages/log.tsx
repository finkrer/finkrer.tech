import Layout from 'components/Layout'
import PostList from 'components/PostList'
import Explanation from 'components/Explanation'
import { StoryblokCDA as Storyblok } from 'lib/storyblok'
import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await Storyblok.getStories()

  const posts = res.data.stories
    .filter((story) => story.content.public)
    .map((story) => ({
      id: story.id,
      name: story.name,
      slug: story.slug,
      first_published_at: story.first_published_at,
      body: story.content.body,
    }))

  return {
    props: { posts },
    revalidate: 1,
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
