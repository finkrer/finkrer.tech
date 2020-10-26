import { FC } from 'react'
import renderMarkdown from 'snarkdown'

type Props = {
  body: string
  className: string
}

const Markdown: FC<Props> = ({ body, className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: renderMarkdown(body),
    }}
  ></div>
)

export default Markdown
