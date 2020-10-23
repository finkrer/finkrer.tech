import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Allow', '')
  res.status(405).send('No methods allowed for now')
  return
}