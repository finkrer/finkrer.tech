import Timestamp from 'components/Timestamp'
import Layout from 'layout/Layout'
import DefaultErrorPage from 'next/error'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getPost, getPostList } from 'lib/mdx'
import hydrate from 'next-mdx-remote/hydrate'
import { Post } from 'lib/data'
import { FC } from 'react'

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (typeof params?.slug !== 'string') return { props: {} }

  const post = await getPost(params.slug)
  if (!post.frontMatter.public) return { props: {} }

  return { props: { source: post.source, frontMatter: post.frontMatter } }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getPostList()
      .filter((p) => p.frontMatter.public)
      .map((p) => {
        return { params: { slug: p.slug } }
      }),
    fallback: false,
  }
}

const PostPage: FC<Post> = ({ source, frontMatter }) => {
  if (!source) {
    return <DefaultErrorPage statusCode={404} title="Post not found" />
  }

  return (
    <Layout
      title={`finkrer.wtf • ${frontMatter.title}`}
      description={frontMatter.description}
    >
      <div className="mt-8">
        <h1 className="block mt-2 mb-2 text-4xl font-medium">
          {frontMatter.title}
        </h1>
        <Timestamp
          datetime={frontMatter.date}
          className="p-0 text-sm tracking-wide text-gray-700 transition-colors duration-500 dark:text-gray-400"
        />
        <div className="mt-4">{hydrate(source)}</div>
      </div>
    </Layout>
  )
}

export default PostPage
