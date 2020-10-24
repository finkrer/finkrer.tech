import Link from 'components/BetterLink'

const InlineLink = ({ href, children }) => (
  <Link href={href} className="hover:bg-yellow-50 link-decoration">
    {children}
  </Link>
)

export default InlineLink
