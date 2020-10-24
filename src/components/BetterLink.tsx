import Link from 'next/link'

const BetterLink = ({ href, className, children }) => (
  <Link href={href}>
    <a className={className}>{children}</a>
  </Link>
)

export default BetterLink
