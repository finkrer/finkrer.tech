import { StoryData, StoryblokComponent } from 'storyblok-js-client'

export interface PostInfo {
  readonly slug: string
  readonly frontMatter: PostFrontMatter
}

export interface Post {
  readonly source: object
  readonly frontMatter: PostFrontMatter
}

export interface PostFrontMatter {
  readonly title: string
  readonly description: string
  readonly public: boolean
  readonly date: string
}

export type LogEntry = StoryData<StoryblokComponent<string> & { body: string }>
