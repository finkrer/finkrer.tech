import PostPreview from 'components/PostPreview'
import { Post } from 'lib/data'

const PostList = ({ posts }: { posts: Post[] }) => (
  <section className="mt-4">
    {posts
      .sort((a, b) => b.id - a.id)
      .map(post => (
        <PostPreview key={post.id} post={post} />
      ))}
  </section>
)

export default PostList
