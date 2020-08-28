import { NextApiRequest, NextApiResponse } from 'next'
import { StoryblokCMA, flushStoryblokCache } from 'lib/storyblok'
import { STORYBLOK_SPACE_ID, STORYBLOK_POST_FOLDER_ID } from 'lib/constants'
import { tokenIsCorrect } from 'lib/auth'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(405).send('Method not allowed')
    return
  }

  const token = req.cookies.token

  if (!tokenIsCorrect(token)) {
    res.status(401).json({ success: false })
    return
  }

  await StoryblokCMA.post(`spaces/${STORYBLOK_SPACE_ID}/stories/`, {
    story: {
      name: req.query.name,
      slug: req.query.slug,
      parent_id: STORYBLOK_POST_FOLDER_ID,
      content: {
        component: 'post',
        public: req.query.public === 'true',
        body: req.body,
      },
    },
    publish: 1,
  })
    .then((_) => res.status(201).json({ success: true }))
    .catch((_) => res.status(422).json({ success: false }))

  flushStoryblokCache()
}
