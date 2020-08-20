import { StoryblokCDA as Storyblok } from 'lib/api'
import Timestamp from 'components/Timestamp'
import Markdown from 'components/Markdown'
import Layout from 'components/Layout'
import { useRouter } from 'next/router'
import { GetStaticProps, GetStaticPaths } from 'next'

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await Storyblok.getStory(`posts/${params.slug}`)
  return {
    props: post.data.story,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}

const Post = ({ name, first_published_at, content }) => {
  const router = useRouter()

  return router.isFallback ? (
    <h3>Loading...</h3>
  ) : (
    <Layout title={`finkrer.wtf • ${name}`} description="A post">
      <article>
        <div className="px-4 pb-3 pt-1 mt-3 shadow-sm bg-white rounded">
          <h3 className="float-left">{name}</h3>
          <Timestamp datetime={first_published_at} />
          <Markdown body={content.body} />
        </div>
      </article>
    </Layout>
  )
}

export default Post
