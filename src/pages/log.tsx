import Layout from 'layout/Layout'
import { StoryblokCDA as Storyblok } from 'lib/storyblok'
import { GetServerSideProps } from 'next'
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
      <Layout title="ACCESS DENIED &bull; finkrer.wtf" description="Get out!">
        <FlexContainer className="items-center">
          <p className="mt-16 text-4xl font-bold tracking-wide text-red-600 uppercase transition-colors duration-200 dark:text-red-400">
            By the order of the Jarl, stop right there!
          </p>
          <p className="text-lg">
            You do not have permission to access this page. This incident will
            be reported.
          </p>
        </FlexContainer>
      </Layout>
    )

  const [entryList, setEntries] = useState(entries)

  return (
    <Layout title="Log &bull; finkrer.wtf" description="My personal blog">
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
    </Layout>
  )
}

export default Log
