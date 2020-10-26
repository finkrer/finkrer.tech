import { FC } from 'react'

type Props = {
  className?: string
}

const FlexContainer: FC<Props> = ({ className, children }) => (
  <div className={`flex flex-col ${className ?? ''}`}>{children}</div>
)

export default FlexContainer
