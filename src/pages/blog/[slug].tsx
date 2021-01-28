import Timestamp from 'components/Timestamp'
import Layout from 'layout/Layout'
import DefaultErrorPage from 'next/error'
import Router from 'next/router'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getPost, getPostList } from 'lib/mdx'
import hydrate from 'next-mdx-remote/hydrate'
import { Post, PostInfo } from 'lib/data'
import { FC, useEffect } from 'react'
import BetterLink from 'components/BetterLink'

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (typeof params?.slug !== 'string') return { props: {} }

  const post = await getPost(params.slug)
  if (!post.frontMatter.public) return { props: {} }

  const otherPosts = getPostList().filter((p) => p.slug != params.slug)
  const prev = otherPosts[0]
  const next = otherPosts[1]

  return {
    props: { source: post.source, frontMatter: post.frontMatter, prev, next },
  }
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

type Props = Post & { prev: PostInfo; next: PostInfo }

const PostPage: FC<Props> = ({ source, frontMatter, prev, next }) => {
  if (!source) {
    return <DefaultErrorPage statusCode={404} title="Post not found" />
  }

  const handleKeydown = (event: KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowLeft':
        Router.push(prev.slug)
        break
      case 'ArrowRight':
        Router.push(next.slug)
        break
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown)
    return () => window.removeEventListener('keydown', handleKeydown)
  })

  return (
    <Layout
      title={`finkrer.wtf • ${frontMatter.title}`}
      description={frontMatter.description}
    >
      <div className="flex flex-col mt-8">
        <h1 className="block max-w-lg mt-2 mb-2 text-4xl">
          {frontMatter.title}
        </h1>
        <Timestamp
          datetime={frontMatter.date}
          className="p-0 text-sm text-gray-700 transition-colors duration-500 dark:text-gray-400"
        />
        <div className="mt-4">{hydrate(source)}</div>
        <div className="flex justify-between mt-12">
          <BetterLink
            href={prev.slug}
            className="block max-w-xs p-4 text-xs rounded sm:-ml-4 hover:bg-purple-100 hover:text-purple-900"
          >
            <span className="text-sm">⟵</span>
            <br />
            {prev.frontMatter.title}
          </BetterLink>
          <BetterLink
            href={next.slug}
            className="block max-w-xs p-4 text-xs text-right rounded sm:-mr-4 hover:bg-purple-100 hover:text-purple-900"
          >
            <span className="text-sm">⟶</span>
            <br />
            {next.frontMatter.title}
          </BetterLink>
        </div>
      </div>
    </Layout>
  )
}

export default PostPage
