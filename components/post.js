import { formatDate, renderMarkdown } from 'lib/utils'

const Post = (props) => (
  <div className="px-4 pb-3 pt-1 mt-3 shadow-sm bg-white rounded">
    <h3 className="float-left">{props.title}</h3>
    <p className="text-sm text-gray-700 p-0 float-right">
      {formatDate(props.datetime)}
    </p>
    <section
      className="inline-block"
      dangerouslySetInnerHTML={{
        __html: renderMarkdown(props.body),
      }}
    ></section>
  </div>
)

export default Post
