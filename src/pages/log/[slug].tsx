import { StoryblokCDA as Storyblok } from 'lib/storyblok'
import Timestamp from 'components/Timestamp'
import Markdown from 'components/Markdown'
import Layout from 'layout/Layout'
import DefaultErrorPage from 'next/error'
import { GetServerSideProps } from 'next'
import { Story } from 'storyblok-js-client'
import { containsToken } from 'lib/auth'
import React from 'react'

export const getServerSideProps: GetServerSideProps = async ({
  params,
  req,
}) => {
  const cookie = req.headers.cookie
  const authorized = containsToken(cookie)
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
      <div className="mt-4">
        <h1 className="block mt-2 text-4xl font-medium text-gray-900">
          {name}
        </h1>
        <Timestamp
          datetime={first_published_at}
          className="p-0 mt-1 text-sm tracking-wide text-gray-500"
        />
        <Markdown body={body} className="" />
      </div>
    </Layout>
  )
}

export default Post
