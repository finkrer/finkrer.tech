import { StoryblokCDA as Storyblok } from 'lib/storyblok'
import Timestamp from 'components/Timestamp'
import Markdown from 'components/Markdown'
import Layout from 'components/Layout'
import { useRouter } from 'next/router'
import DefaultErrorPage from 'next/error'
import { GetStaticProps, GetStaticPaths } from 'next'
import { Story } from 'storyblok-js-client'

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let post: Story

  await Storyblok.getStory(`posts/${params.slug}`)
    .then((story) => (post = story))
    .catch((_) => {
      post = null
    })

  if (!post || !post.data.story.content.public) {
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

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}

const Post = ({ name, first_published_at, body }) => {
  const router = useRouter()

  if (router.isFallback) {
    return <h3>Loading...</h3>
  }

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
