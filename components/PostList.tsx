import PostPreview from 'components/PostPreview'
import { StoryData } from 'storyblok-js-client'

const PostList = ({ posts }: { posts: Array<StoryData> }) => (
  <section className="mt-4">
    {posts
      .sort((a, b) => b.id - a.id)
      .map((postProps) => (
        <PostPreview key={postProps.id} {...postProps} />
      ))}
  </section>
)

export default PostList
