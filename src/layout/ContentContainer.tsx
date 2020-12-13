import { FC } from 'react'

type Props = {
  className: string
}

const ContentContainer: FC<Props> = ({ children, className }) => (
  <div className={className}>
    <div className="px-3 mx-auto max-w-optimal">{children}</div>
  </div>
)

export default ContentContainer
