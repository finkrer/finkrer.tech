import NavItem from 'components/NavItem'

const Header = () => (
  <header>
    <nav>
      <menu className="flex items-center justify-between py-3 pl-0 m-0 select-none">
        <NavItem
          href="/"
          className="inline-block text-3xl font-medium tracking-wide rounded"
        >
          finkrer<span className="text-accent-200">.</span>
        </NavItem>
        <NavItem
          href="/log"
          className="inline-block px-6 mt-1 ml-8 text-lg lowercase rounded hover:bg-accent-200"
        >
          Лог
        </NavItem>
      </menu>
    </nav>
  </header>
)

export default Header
