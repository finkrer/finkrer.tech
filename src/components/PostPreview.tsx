import Link from 'next/link'
import Markdown from 'components/Markdown'
import Timestamp from 'components/Timestamp'
import { PostInfo } from 'lib/data'

const PostPreview = ({ post }: { post: PostInfo }) => (
  <Link href={`/blog/${post.slug}`}>
    <a>
      <div className="p-4 rounded-md group hover:bg-gray-50">
        <h1 className="block mt-2 text-xl font-medium text-gray-900">
          {post.frontMatter.title}
        </h1>
        <Timestamp
          datetime={post.frontMatter.date}
          className="p-0 mt-1 text-xs tracking-wide text-gray-500"
        />
        <p className="text-sm">{post.frontMatter.description}</p>
      </div>
    </a>
  </Link>
)

export default PostPreview
