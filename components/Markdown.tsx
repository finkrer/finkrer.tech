import { Remarkable } from 'remarkable'

const remarkable = new Remarkable()

const Markdown = ({ body, className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{ __html: remarkable.render(body) }}
  ></div>
)

export default Markdown
