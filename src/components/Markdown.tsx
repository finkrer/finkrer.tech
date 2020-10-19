import remark from 'remark'
import html from 'remark-html'

const Markdown = ({ body, className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: remark().use(html).processSync(body).toString(),
    }}
  ></div>
)

export default Markdown
