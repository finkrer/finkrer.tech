import Link from 'next/link'

const InlineLink = ({ href, children }) => (
  <Link href={href}>
    <a className="hover:bg-yellow-50 link-decoration">{children}</a>
  </Link>
)

export default InlineLink
