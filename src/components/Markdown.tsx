import renderMarkdown from 'snarkdown'

const Markdown = ({ body, className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: renderMarkdown(body),
    }}
  ></div>
)

export default Markdown
