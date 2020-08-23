import { Remarkable } from 'remarkable'

const remarkable = new Remarkable()

const Markdown = ({ body }) => (
  <section
    className="inline-block ml-4"
    dangerouslySetInnerHTML={{ __html: remarkable.render(body) }}
  ></section>
)

export default Markdown
