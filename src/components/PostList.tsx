import PostPreview from 'components/PostPreview'
import { PostInfo } from 'lib/data'

const PostList = ({ posts }: { posts: PostInfo[] }) => (
  <section className="mt-4">
    {posts.map(post => (
      <PostPreview key={post.slug} post={post} />
    ))}
  </section>
)

export default PostList
