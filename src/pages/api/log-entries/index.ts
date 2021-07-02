import { NextApiRequest, NextApiResponse } from 'next'
import { StoryblokCMA, flushStoryblokCache } from 'lib/storyblok'
import { STORYBLOK_SPACE_ID, STORYBLOK_LOG_FOLDER_ID } from 'lib/constants'
import { tokenIsCorrect } from 'lib/auth'
import { v4 as uuid } from 'uuid'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    res.status(405).send('Method not allowed')
    return
  }

  const token = req.cookies.token

  if (!tokenIsCorrect(token)) {
    res.status(401).send('Unauthorized')
    return
  }

  const id = uuid()
  const data = JSON.parse(req.body)

  await StoryblokCMA.post(`spaces/${STORYBLOK_SPACE_ID}/stories/`, {
    story: {
      name: id,
      slug: id,
      parent_id: STORYBLOK_LOG_FOLDER_ID,
      content: {
        component: 'log-entry',
        body: data.body,
        sentiment: data.sentiment,
      },
    },
    publish: 1,
  })
    .then((r) => res.status(201).send(r.data))
    .catch((_) => res.status(422).send('Incorrect log entry format'))

  flushStoryblokCache()
}
