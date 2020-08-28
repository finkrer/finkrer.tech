import Link from 'next/link'

const NavItem = ({ href, className, children }) => (
  <ul>
    <Link href={href}>
      <a className={className}>{children}</a>
    </Link>
  </ul>
)

export default NavItem
