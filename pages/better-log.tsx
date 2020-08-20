import Layout from 'components/Layout'
import PostList from 'components/PostList'
import { StoryblokCDA as Storyblok } from 'lib/storyblok'
import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const cookie = req.headers.cookie

  if (!cookie || cookie.indexOf(process.env.ADMIN_TOKEN) === -1) {
    return {
      props: {},
    }
  }

  const res = await Storyblok.getStories()

  const posts = res.data.stories.map((story) => ({
    id: story.id,
    name: story.name,
    slug: story.slug,
    first_published_at: story.first_published_at,
    body: story.content.body,
    isPublic: story.content.public,
  }))

  return {
    props: { posts },
  }
}

const BLog = ({ posts }) => {
  if (!posts) {
    return (
      <Layout title="finkrer.wtf &bull; Log" description="My personal blog">
        <h2>Такс такс такс, что у нас тут</h2>
        <p>Доступ... запрещен!</p>
        <p>Здесь можно читать мои личные записи. Но только мне!</p>
      </Layout>
    )
  }
  return (
    <Layout title="finkrer.wtf &bull; Log" description="My personal blog">
      <PostList posts={posts} />
    </Layout>
  )
}

export default BLog
