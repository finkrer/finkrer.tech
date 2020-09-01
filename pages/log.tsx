import Layout from 'layout/Layout'
import PostList from 'components/PostList'
import { StoryblokCDA as Storyblok } from 'lib/storyblok'
import { GetServerSideProps } from 'next'
import { containsToken } from 'lib/auth'
import { useState } from 'react'

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const cookie = req.headers.cookie
  const authorized = containsToken(cookie)
  const res = await Storyblok.getStories()

  const posts = res.data.stories
    .filter((story) => authorized || story.content.public)
    .map((story) => ({
      id: story.id,
      name: story.name,
      slug: story.slug,
      first_published_at: story.first_published_at,
      body: story.content.body,
    }))

  return {
    props: { posts },
  }
}

const Log = ({ posts }) => {
  return (
    <Layout title="Log &bull; finkrer.wtf" description="My personal blog">
      <Explanation />
      <PostList posts={posts} />
    </Layout>
  )
}

const Explanation = () => {
  const [active, setActive] = useState(false)
  return (
    <section>
      <button
        onClick={() => setActive(!active)}
        className="mt-8 text-gray-700 border-none dashed focus:outline-none"
      >
        Что за лог?
      </button>
      {active ? (
        <p>
          Лог - это как блог, только лог. Вообще лог - это как журнал, или
          дневник. На судне, например. Только это на сайте.
          <br />
          На самом деле блог - это и есть web log, но об этом как-то все забыли.
          Теперь под блогом понимаются какие-то крупные статьи. Ну или твиттер.
          А я тут просто пишу, что захочу. Какие-то маленькие заметочки, или
          статьи, если надо.
          <br />К слову, это и дневник мой тоже. Только мои личные записи вам не
          показывает. Во всяком случае, я очень на это надеюсь.
        </p>
      ) : null}
    </section>
  )
}

export default Log
