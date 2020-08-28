import Link from 'next/link'
import Markdown from 'components/Markdown'
import Timestamp from 'components/Timestamp'

const PostPreview = ({ name, first_published_at, body, slug }) => (
  <div className="px-4 pt-1 pb-3 mt-3 bg-white rounded">
    <Link href={'/log/[slug]'} as={`/log/${slug}`}>
      <a className="float-left mt-2 text-xl text-gray-700">{name}</a>
    </Link>
    <Timestamp datetime={first_published_at} />
    <Markdown body={body} />
  </div>
)

export default PostPreview
