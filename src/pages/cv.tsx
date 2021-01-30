import { FC } from 'react'
import Head from 'next/head'

const pillBgColors = {
  gray: 'bg-gray-100',
  blue: 'bg-blue-100',
  red: 'bg-red-100',
  orange: 'bg-orange-100',
  purple: 'bg-purple-100',
  rose: 'bg-rose-100',
  yellow: 'bg-yellow-100',
  lightblue: 'bg-lightblue-100',
}

const pillFgColors = {
  gray: 'text-gray-900',
  blue: 'text-blue-900',
  red: 'text-red-900',
  orange: 'text-orange-900',
  purple: 'text-purple-900',
  rose: 'text-rose-900',
  yellow: 'text-yellow-900',
  lightblue: 'text-lightblue-900',
}

type Color =
  | 'gray'
  | 'blue'
  | 'red'
  | 'orange'
  | 'purple'
  | 'rose'
  | 'yellow'
  | 'lightblue'

const Pill: FC<{ color: Color }> = ({ color, children }) => (
  <span
    className={`px-2 py-1 mt-2 mr-2 text-sm ${pillFgColors[color]} ${pillBgColors[color]} rounded-lg max-w-min whitespace-nowrap`}
  >
    {children}
  </span>
)

const SectionHeader: FC = ({ children }) => (
  <>
    <h2>{children} ⟶</h2>
    <hr />
  </>
)

const SectionSubheader: FC<{ className?: string }> = ({
  className,
  children,
}) => (
  <h3 className={'text-lg font-medium text-gray-700' + (' ' + className) ?? ''}>
    {children}
  </h3>
)

const LargeSubheader: FC = ({ children }) => (
  <h3 className="inline-block mr-2">{children}</h3>
)

export const CV = () => (
  <>
    <Head>
      <title>Евгений Зырянов</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <article className="grid min-h-screen grid-cols-1 text-gray-800 bg-white sm:grid-cols-2 lg:grid-cols-4">
      <div className="order-1 p-8 bg-blue-50 sm:col-span-2 lg:col-span-3">
        <h1 className="text-4xl">Евгений Зырянов</h1>
        <p>Студент-программист, 3 курс</p>
      </div>
      <div className="order-2 hidden bg-blue-100 lg:block"></div>
      <div className="order-3 p-8 lg:col-span-2">
        <SectionHeader>Образование</SectionHeader>
        <LargeSubheader>УрФУ</LargeSubheader>
        <Pill color="blue">3 курс</Pill>
        <p className="mt-1 text-gray-700">
          Фундаментальная информатика и информационные технологии
        </p>
        <LargeSubheader>ШПоРа</LargeSubheader>
        <Pill color="red">2018-2019</Pill>
        <p className="mt-1 text-gray-700">
          Школа промышленной разработки (СКБ Контур)
        </p>
        <LargeSubheader>Университет Сириус</LargeSubheader>
        <Pill color="purple">2020</Pill>
        <p className="mt-1 text-gray-700 max-w-prose">
          Образовательный модуль &laquo;Информационная безопасность финансовой
          сферы&raquo; (Ростелеком-Солар, Банк России)
        </p>
      </div>
      <div className="order-4 p-8">
        <SectionHeader>Навыки</SectionHeader>
        <SectionSubheader>Языки</SectionSubheader>
        <div className="flex flex-wrap">
          <Pill color="purple">C#</Pill>
          <Pill color="yellow">JavaScript</Pill>
          <Pill color="blue">TypeScript</Pill>
          <Pill color="orange">Java</Pill>
          <Pill color="lightblue">Go</Pill>
          <Pill color="orange">Rust</Pill>
          <Pill color="blue">Python</Pill>
          <Pill color="gray">Bash</Pill>
          <Pill color="purple">Haskell</Pill>
        </div>
        <SectionSubheader>Фронтенд</SectionSubheader>
        <div className="flex flex-wrap">
          <Pill color="blue">CSS</Pill>
          <Pill color="rose">Sass</Pill>
          <Pill color="orange">Svelte</Pill>
          <Pill color="lightblue">Tailwind</Pill>
          <Pill color="blue">React</Pill>
        </div>
        <SectionSubheader>Другие технологии</SectionSubheader>
        <div className="flex flex-wrap">
          <Pill color="red">Git</Pill>
          <Pill color="gray">Linux</Pill>
          <Pill color="blue">Docker</Pill>
        </div>
      </div>
      <div className="order-5 hidden bg-gray-100 lg:block"></div>
      <div className="order-5 col-span-1 p-8 max-w-prose">
        <SectionHeader>Обо мне</SectionHeader>
        <p>
          Учусь в университете, изучаю веб-разработку и дизайн для души. Играю в
          CTF в составе университетской команды. А еще я свободно говорю
          по-английски, хорошо гуглю и быстро учусь.
        </p>
      </div>
      <div className="order-6 col-span-1 p-8 max-w-prose">
        <SectionHeader>О работе</SectionHeader>
        <p>
          Ищу работу на неполный рабочий день или удаленную, чтобы совмещать с
          учебой. Хочу решать интересные задачи и учиться новому.
        </p>
      </div>
      <div className="order-7 col-span-1 p-8 bg-gray-100 sm:col-span-2 lg:row-span-2 lg:col-span-1 lg:order-4">
        <div className="lg:sticky lg:top-12">
          <SectionHeader>Контакты</SectionHeader>
          <SectionSubheader>Почта</SectionSubheader>
          <a href="mailto:finkrer@gmail.com" className="link-decoration">
            finkrer@gmail.com
          </a>
          <SectionSubheader>Телефон</SectionSubheader>
          <a href="tel:+79826374036" className="link-decoration">
            +7 (982) 637-40-36
          </a>
          <SectionSubheader>Github</SectionSubheader>
          <a href="https://github.com/finkrer" className="link-decoration">
            https://github.com/finkrer
          </a>
        </div>
      </div>
    </article>
  </>
)

export default CV
