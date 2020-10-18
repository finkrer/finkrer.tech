import { StoryblokCDA as Storyblok } from 'lib/storyblok'
import Timestamp from 'components/Timestamp'
import Markdown from 'components/Markdown'
import Layout from 'layout/Layout'
import DefaultErrorPage from 'next/error'
import { GetServerSideProps } from 'next'
import { Story } from 'storyblok-js-client'
import { containsToken } from 'lib/auth'

export const getServerSideProps: GetServerSideProps = async ({
  params,
  req,
}) => {
  const cookie = req.headers.cookie
  const authorized = containsToken(cookie)
  let res: Story

  await Storyblok.getStory(`posts/${params.slug}`)
    .then(story => (res = story))
    .catch(_ => {
      res = null
    })

  const post = res.data.story

  if (!res || (!post.content.public && !authorized)) {
    return { props: {} }
  }

  return {
    props: { post },
  }
}

const PostPage = ({ post }) => {
  if (!post.content) {
    return <DefaultErrorPage statusCode={404} title="Post not found" />
  }

  return (
    <Layout title={`finkrer.wtf • ${post.name}`} description="A post">
      <div className="mt-4">
        <h1 className="block mt-2 text-4xl font-medium text-gray-900">
          {post.name}
        </h1>
        <Timestamp
          datetime={post.first_published_at}
          className="p-0 mt-1 text-sm tracking-wide text-gray-500"
        />
        <Markdown body={post.content.body} className="" />
      </div>
    </Layout>
  )
}

export default PostPage
