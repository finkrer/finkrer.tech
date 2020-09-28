import StoryblokClient, { StoryblokCache } from 'storyblok-js-client'

const cacheSettings: StoryblokCache = {
  clear: 'auto',
  type: 'memory',
}

export const StoryblokCDA = new StoryblokClient({
  accessToken: process.env.STORYBLOK_CDA_TOKEN,
  cache: cacheSettings,
})

export const StoryblokCMA = new StoryblokClient({
  oauthToken: process.env.STORYBLOK_CMA_TOKEN,
  cache: cacheSettings,
})

export const flushStoryblokCache = () => {
  StoryblokCDA.flushCache()
  StoryblokCMA.flushCache()
}
