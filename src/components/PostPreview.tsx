import Link from 'next/link'
import Timestamp from 'components/Timestamp'
import { PostInfo } from 'lib/data'
import { FC } from 'react'

type Props = {
  post: PostInfo
}

const PostPreview: FC<Props> = ({ post }) => (
  <Link href={`/blog/${post.slug}`}>
    <a>
      <div className="p-4 pt-2 -my-0 rounded-md sm:-mx-4 group hover:bg-gray-50">
        <h1 className="block mt-2 text-2xl font-medium text-gray-900">
          {post.frontMatter.title}
        </h1>
        <Timestamp
          datetime={post.frontMatter.date}
          className="p-0 mt-1 text-sm tracking-wide text-gray-500"
        />
        <p className="mt-1 text-base">{post.frontMatter.description}</p>
      </div>
    </a>
  </Link>
)

export default PostPreview
