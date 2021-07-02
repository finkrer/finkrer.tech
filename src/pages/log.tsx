import { StoryblokCDA as Storyblok } from 'lib/storyblok'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Placeholder from 'components/Placeholder'
import { isAuthorized } from 'lib/auth'
import NewEntry from 'components/NewEntry'
import { FC, useState } from 'react'
import { LogEntry } from 'lib/data'
import Entry from 'components/Entry'

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const authorized = isAuthorized(req)
  const res = await Storyblok.getStories({
    per_page: 50,
  })

  if (!authorized) return { props: {} }

  const entries = res.data.stories

  return {
    props: { entries },
  }
}

type Props = {
  entries: LogEntry[]
}

const Log: FC<Props> = ({ entries }) => {
  if (!entries)
    return (
      <>
        <Head>
          <title>ACCESS DENIED &bull; finkrer.tech</title>
          <meta name="description" content="Get out!" />
        </Head>
        <Placeholder emoji="😤">
          You can't be here without authorization.
        </Placeholder>
      </>
    )

  const [entryList, setEntries] = useState(entries)

  return (
    <>
      <Head>
        <title>Log &bull; finkrer.tech</title>
        <meta name="description" content="My personal blog" />
      </Head>
      <NewEntry onCreate={(entry) => setEntries([entry, ...entryList])} />
      <div className="mt-8">
        {entryList.map((e) => (
          <Entry from={e} key={e.id} />
        ))}
      </div>
    </>
  )
}

export default Log
