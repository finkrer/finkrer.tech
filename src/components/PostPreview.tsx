import Link from 'next/link'
import Markdown from 'components/Markdown'
import Timestamp from 'components/Timestamp'

const PostPreview = ({ name, first_published_at, body, slug }) => (
  <Link href={'/log/[slug]'} as={`/log/${slug}`}>
    <a>
      <div className="p-4 rounded-md group hover:bg-gray-50">
        <h1 className="block mt-2 text-2xl font-medium text-gray-900">
          {name}
        </h1>
        <Timestamp
          datetime={first_published_at}
          className="p-0 mt-1 text-sm tracking-wide text-gray-500"
        />
        <Markdown body={body.split('\n')[0] + '..'} className="" />
      </div>
    </a>
  </Link>
)

export default PostPreview
