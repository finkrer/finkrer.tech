import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { StoryData, StoryblokComponent } from 'storyblok-js-client'

export interface PostInfo {
  readonly slug: string
  readonly frontMatter: PostFrontMatter
}

export interface Post {
  readonly source: MDXRemoteSerializeResult<Record<string, unknown>>
  readonly frontMatter: PostFrontMatter
}

export interface PostFrontMatter {
  readonly title: string
  readonly description: string
  readonly public: boolean
  readonly date: string
}

export type Sentiment = 'neutral' | 'happy' | 'sad' | 'love' | 'tough'

export type LogEntry = StoryData<
  StoryblokComponent<string> & { body: string; sentiment: Sentiment }
>
