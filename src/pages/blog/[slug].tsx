import Timestamp from 'components/Timestamp'
import Layout from 'layout/Layout'
import DefaultErrorPage from 'next/error'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getPost, getPostList } from 'lib/mdx'
import hydrate from 'next-mdx-remote/hydrate'
import { Post } from 'lib/data'

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (typeof params.slug !== 'string') return

  const post = await getPost(params.slug)
  if (!post.frontMatter.public) return { props: {} }

  return { props: { source: post.source, frontMatter: post.frontMatter } }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getPostList()
      .filter(p => p.frontMatter.public)
      .map(p => {
        return { params: { slug: p.slug } }
      }),
    fallback: false,
  }
}

const PostPage = ({ source, frontMatter }: Post) => {
  if (!source) {
    return <DefaultErrorPage statusCode={404} title="Post not found" />
  }

  return (
    <Layout
      title={`finkrer.wtf • ${frontMatter.title}`}
      description={frontMatter.description}
    >
      <div className="mt-4">
        <h1 className="block mt-2 text-4xl font-medium text-gray-900">
          {frontMatter.title}
        </h1>
        <Timestamp
          datetime={frontMatter.date}
          className="p-0 mt-1 text-sm tracking-wide text-gray-500"
        />
        {hydrate(source)}
      </div>
    </Layout>
  )
}

export default PostPage
