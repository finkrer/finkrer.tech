import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const token = req.cookies.token

  if (token === process.env.ADMIN_TOKEN) {
    res.status(200).json({ success: true })
  } else {
    res.status(401).json({ success: false })
  }
}
