import Link from 'components/BetterLink'
import { FC } from 'react'

type NavItemProps = {
  href: string
}

const NavItem: FC<NavItemProps> = ({ href, children }) => (
  <ul>
    <Link
      href={href}
      className="inline-block px-4 py-1 mt-1 ml-8 text-lg lowercase rounded hover:bg-gray-200"
    >
      {children}
    </Link>
  </ul>
)

const Header = () => (
  <header>
    <nav>
      <menu className="flex items-center py-3 pl-0 m-0 select-none">
        <ul>
          <Link
            href="/"
            className="inline-block text-3xl font-medium tracking-wide rounded"
          >
            finkrer
            <Link className="text-accent-200" href="/admin">
              .
            </Link>
          </Link>
        </ul>
        <NavItem href="/">Blog</NavItem>
        <NavItem href="/about">About</NavItem>
      </menu>
    </nav>
  </header>
)

export default Header
