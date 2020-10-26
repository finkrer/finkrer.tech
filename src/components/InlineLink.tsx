import Link from 'components/BetterLink'
import { FC } from 'react'

type Props = {
  href: string
}

const InlineLink: FC<Props> = ({ href, children }) => (
  <Link href={href} className="hover:bg-yellow-50 link-decoration">
    {children}
  </Link>
)

export default InlineLink
