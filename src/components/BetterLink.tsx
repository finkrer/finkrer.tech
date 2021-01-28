import Link from 'next/link'
import { FC } from 'react'

type Props = {
  href: string
  className?: string
}

const BetterLink: FC<Props> = ({ href, className, children }) => (
  <Link href={href}>
    <a className={className}>{children}</a>
  </Link>
)

export default BetterLink
