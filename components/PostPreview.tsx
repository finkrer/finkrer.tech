import Link from 'next/link'
import Markdown from 'components/Markdown'
import Timestamp from 'components/Timestamp'

const PostPreview = ({ name, first_published_at, content, slug }) => (
  <div className="px-4 pb-3 pt-1 mt-3 shadow-sm bg-white rounded">
    <Link href="/posts/[slug]" as={`/posts/${slug}`}>
      <a className="float-left mt-2 text-xl text-red-700">{name}</a>
    </Link>
    <Timestamp datetime={first_published_at} />
    <Markdown body={content.body} />
  </div>
)

export default PostPreview
