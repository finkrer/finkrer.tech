import PostPreview from 'components/PostPreview'

const PostList = ({ posts }) => (
  <section className="mt-4">
    {posts
      .sort((a, b) => b.id - a.id)
      .map((postProps) => (
        <PostPreview key={postProps.id} {...postProps} />
      ))}
  </section>
)

export default PostList
