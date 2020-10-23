import Layout from 'layout/Layout'
import { StoryblokCDA as Storyblok } from 'lib/storyblok'
import { GetServerSideProps } from 'next'
import { isAuthorized } from 'lib/auth'

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const authorized = isAuthorized(req)
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
      {posts}
    </Layout>
  )
}

export default Log
