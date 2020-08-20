import { Remarkable } from 'remarkable'

const remarkable = new Remarkable()

const Markdown = ({ body }) => (
  <section
    className="inline-block"
    dangerouslySetInnerHTML={{ __html: remarkable.render(body) }}
  ></section>
)

export default Markdown
