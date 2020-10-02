interface Story {
  readonly id: number
  readonly name: string
  readonly slug: string
  readonly first_published_at: string
  readonly content: any
}

interface PostData {
  readonly body: string
  readonly public: boolean
}

export interface Post extends Story {
  readonly content: PostData
}

export const toPost = (story: Story): Post => {
  return {
    id: story.id,
    name: story.name,
    slug: story.slug,
    first_published_at: story.first_published_at,
    content: { body: story.content.body, public: story.content.public },
  }
}
