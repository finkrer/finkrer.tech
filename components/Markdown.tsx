import { Remarkable } from 'remarkable'

const remarkable = new Remarkable()

const Markdown = ({ body, className }) => (
  <section
    className={className}
    dangerouslySetInnerHTML={{ __html: remarkable.render(body) }}
  ></section>
)

export default Markdown
