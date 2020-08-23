import { StoryblokCDA as Storyblok } from 'lib/storyblok'
import Timestamp from 'components/Timestamp'
import Markdown from 'components/Markdown'
import Layout from 'layout/Layout'
import DefaultErrorPage from 'next/error'
import { GetServerSideProps } from 'next'
import { Story } from 'storyblok-js-client'

export const getServerSideProps: GetServerSideProps = async ({
  params,
  req,
}) => {
  const cookie = req.headers.cookie
  const authorized = cookie && cookie.indexOf(process.env.ADMIN_TOKEN) !== -1
  let post: Story

  await Storyblok.getStory(`posts/${params.slug}`)
    .then((story) => (post = story))
    .catch((_) => {
      post = null
    })

  if (!post || (!post.data.story.content.public && !authorized)) {
    return { props: {} }
  }

  return {
    props: {
      name: post.data.story.name,
      first_published_at: post.data.story.first_published_at,
      body: post.data.story.content.body,
    },
  }
}

const Post = ({ name, first_published_at, body }) => {
  if (!body) {
    return <DefaultErrorPage statusCode={404} title="Post not found" />
  }

  return (
    <Layout title={`finkrer.wtf • ${name}`} description="A post">
      <article>
        <div className="px-4 pb-3 pt-1 mt-3 shadow-sm bg-white rounded">
          <h3 className="float-left">{name}</h3>
          <Timestamp datetime={first_published_at} />
          <Markdown body={body} />
        </div>
      </article>
    </Layout>
  )
}

export default Post
