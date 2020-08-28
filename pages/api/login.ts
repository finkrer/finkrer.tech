import { tokenIsCorrect } from 'lib/auth'
import { NextApiRequest, NextApiResponse } from 'next'

const isProduction = process.env.NODE_ENV === 'production'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(405).send('Method not allowed')
    return
  }

  const token = req.body

  if (!tokenIsCorrect(token)) {
    res.status(401).json({ success: false })
    return
  }

  res.setHeader(
    'Set-Cookie',
    `token=${token};${isProduction ? ' Secure;' : ''} SameSite=Strict; Path=/`
  )

  res.status(201).json({ success: true })
}
