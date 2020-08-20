import Link from 'next/link'

const Header = () => (
  <header>
    <nav>
      <menu className="p-0 m-0">
        <ul>
          <Link href="/">
            <a className="inline-block font-display text-red-500 text-5xl mt-4">
              finkrer.wtf
            </a>
          </Link>
          <aside lang="en" className="italic text-base">
            Fully armed and operational
          </aside>
        </ul>
        <ul>
          <Link href="/log">
            <a className="inline-block border-red-500 border-2 rounded hover:bg-red-500 hover:text-blue-100 px-6 mt-2">
              Лог
            </a>
          </Link>
        </ul>
      </menu>
    </nav>
  </header>
)

export default Header
