import { tokenIsCorrect } from 'lib/auth'
import { NextApiRequest, NextApiResponse } from 'next'

const isProduction = process.env.NODE_ENV === 'production'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    login(req, res)
  } else if (req.method === 'DELETE') {
    logout(req, res)
  } else {
    res.setHeader('Allow', 'POST, DELETE')
    res.status(405).send('Method not allowed')
  }
}

const login = async (req: NextApiRequest, res: NextApiResponse) => {
  const token = req.body

  if (!tokenIsCorrect(token)) {
    res.status(401).send('Unauthorized')
    return
  }

  res.setHeader(
    'Set-Cookie',
    `token=${token};${isProduction ? ' Secure;' : ''} SameSite=Strict; Path=/`
  )

  res.status(201).send('Login successful')
}

const logout = async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Set-Cookie', 'token=; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Path=/')

  res.status(204).send('Logged out')
}