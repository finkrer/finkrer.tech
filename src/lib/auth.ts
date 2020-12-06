import { IncomingMessage } from "http"

export const tokenIsCorrect = (token: string): boolean =>
  process.env.ADMIN_TOKEN === token

export const containsToken = (str: string): boolean =>
  str.indexOf(`token=${process.env.ADMIN_TOKEN}`) !== -1

export const isAuthorized = (req: IncomingMessage): boolean => {
  const cookie = req.headers?.cookie
  if (cookie == null) return false;
  return containsToken(cookie)
}
