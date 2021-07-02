import { StoryblokCDA as Storyblok } from 'lib/storyblok'
import Timestamp from 'components/Timestamp'
import Markdown from 'components/Markdown'
import DefaultErrorPage from 'next/error'
import { GetServerSideProps } from 'next'
import { isAuthorized } from 'lib/auth'

export const getServerSideProps: GetServerSideProps = async ({
  params,
  req,
}) => {
  if (typeof params?.slug !== 'string') return { props: {} }
  const authorized = isAuthorized(req)

  const res = await Storyblok.getStory(`log/${params.slug}`).catch((_) => null)

  if (!authorized || res == null) return { props: {} }

  const post = res.data.story

  return {
    props: { post },
  }
}

const PostPage = ({ post }: any) => {
  if (!post?.content) {
    return <DefaultErrorPage statusCode={404} title="Post not found" />
  }

  return (
    <div className="mt-4">
      <h1 className="block mt-2 text-4xl font-medium">{post.name}</h1>
      <Timestamp
        datetime={post.first_published_at}
        className="p-0 mt-1 text-sm tracking-wide text-gray-700 transition-colors duration-500 dark:text-gray-400"
      />
      <Markdown body={post.content.body} className="" />
    </div>
  )
}

export default PostPage
