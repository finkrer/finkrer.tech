import { StoryblokCDA as Storyblok } from 'lib/storyblok'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Placeholder from 'components/Placeholder'
import { isAuthorized } from 'lib/auth'
import FlexContainer from 'layout/FlexContainer'
import NewEntry from 'components/NewEntry'
import { FC, useState } from 'react'
import Timestamp from 'components/Timestamp'
import snarkdown from 'snarkdown'
import { LogEntry } from 'lib/data'

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const authorized = isAuthorized(req)
  const res = await Storyblok.getStories()

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
          <article className="items-baseline mt-4 lg:flex">
            <Timestamp
              absolute
              datetime={e.created_at}
              className="text-sm text-gray-400 lg:-ml-36 whitespace-nowrap dark:text-gray-500"
            />
            <div
              className="lg:ml-8"
              dangerouslySetInnerHTML={{ __html: snarkdown(e.content.body) }}
            ></div>
          </article>
        ))}
      </div>
    </>
  )
}

export default Log
