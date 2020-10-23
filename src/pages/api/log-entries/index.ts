import { NextApiRequest, NextApiResponse } from 'next'
import { StoryblokCMA, flushStoryblokCache } from 'lib/storyblok'
import { STORYBLOK_SPACE_ID, STORYBLOK_LOG_FOLDER_ID } from 'lib/constants'
import { tokenIsCorrect } from 'lib/auth'

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

  await StoryblokCMA.post(`spaces/${STORYBLOK_SPACE_ID}/stories/`, {
    story: {
      name: req.body.name,
      slug: req.body.slug,
      parent_id: STORYBLOK_LOG_FOLDER_ID,
      content: {
        component: 'log-entry',
        body: req.body.content,
      },
    },
    publish: 1,
  })
    .then(_ => res.status(201).send('Log entry created'))
    .catch(_ => res.status(422).send('Incorrect log entry format'))

  flushStoryblokCache()
}
