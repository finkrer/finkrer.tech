import Link from 'components/BetterLink'
import { FC } from 'react'
import ThemeToggle from 'components/ThemeToggle'

type NavItemProps = {
  href: string
}

const NavItem: FC<NavItemProps> = ({ href, children }) => (
  <ul>
    <Link
      href={href}
      className="inline-block px-4 py-1 mt-1 ml-8 text-lg lowercase transition-colors duration-500 ease-out rounded hover:bg-green-100 dark:hover:bg-gray-700 focus:outline-none focus:ring ring-inset ring-green-100 dark:ring-gray-700"
    >
      {children}
    </Link>
  </ul>
)

const Header = () => (
  <header>
    <nav>
      <menu className="flex content-center pt-2 pb-1 pl-0 m-0 select-none">
        <ul>
          <Link
            href="/"
            className="inline-block text-4xl font-medium tracking-wide rounded focus:outline-none focus:ring ring-green-100 dark:ring-gray-700"
          >
            finkrer
            <Link
              className="text-green-300 focus:outline-none focus:ring ring-green-100 dark:ring-gray-700"
              href="/admin"
            >
              .
            </Link>
          </Link>
        </ul>
        <NavItem href="/">Blog</NavItem>
        <NavItem href="/about">About</NavItem>
        <ThemeToggle className="p-0 my-1 ml-auto text-2xl rounded-full focus:outline-none focus:ring ring-opacity-50" />
      </menu>
    </nav>
  </header>
)

export default Header
