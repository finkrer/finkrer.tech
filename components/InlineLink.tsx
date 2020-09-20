import Link from 'next/link'

const InlineLink = ({ href, children }) => (
  <Link href={href}>
    <a className="hover:bg-gray-100 link-decoration">
      {children}
      <span></span>
    </a>
  </Link>
)

export default InlineLink
