import NavItem from 'components/NavItem'
import Link from 'next/link'

const Header = () => (
  <header>
    <nav>
      <menu className="flex items-center justify-between py-3 pl-0 m-0 select-none">
        <NavItem
          href="/"
          className="inline-block text-3xl font-medium tracking-wide rounded"
        >
          finkrer
          <span className="text-accent-200">
            <Link href="/admin">
              <a>.</a>
            </Link>
          </span>
        </NavItem>
        <NavItem
          href="/about"
          className="inline-block px-4 py-1 mt-1 ml-8 text-lg lowercase rounded hover:bg-gray-200"
        >
          Обо мне
        </NavItem>
      </menu>
    </nav>
  </header>
)

export default Header
