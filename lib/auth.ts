export const tokenIsCorrect = (token: string) =>
  process.env.ADMIN_TOKEN === token

export const containsToken = (str: string) =>
  str && str.indexOf(`token=${process.env.ADMIN_TOKEN}`) !== -1
