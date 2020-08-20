import Layout from 'components/Layout'
import PostList from 'components/PostList'
import Explanation from 'components/Explanation'
import { StoryblokCDA as Storyblok } from 'lib/api'
import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async (context) => {
  Storyblok.flushCache()
  const res = await Storyblok.getStories()
  const posts = res.data.stories
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
