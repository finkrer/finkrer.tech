import FlexContainer from 'layout/FlexContainer'
import Layout from 'layout/Layout'
import { isAuthorized } from 'lib/auth'
import { GetServerSideProps } from 'next'
import Link from 'components/BetterLink'
import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'

type FormData = {
  token: string
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return {
    props: {
      isAuthorized: isAuthorized(req),
    },
  }
}

type Props = {
  setAuth: (value: boolean) => void
}

const LoginPage: FC<Props> = ({ setAuth }) => {
  const { register, handleSubmit } = useForm<FormData>()
  const [result, setResult] = useState<boolean | null>(null)

  const onSubmit = (data: FormData) => {
    fetch('/api/session', {
      method: 'POST',
      cache: 'no-cache',
      credentials: 'same-origin',
      body: data.token,
    }).then((res) => {
      setResult(res.ok)
      if (res.ok) setAuth(true)
    })
  }

  return (
    <Layout title="Login &bull; finkrer.wtf" description="The login page, duh">
      <FlexContainer>
        <p className="text-sm leading-6 text-gray-600 transition-colors duration-500 dark:text-gray-500">
          Here you can log in... at least in theory.
          <br />
          All you need is a secret token.
        </p>
        <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="ml-1" htmlFor="token">
              Token
            </label>
            <input
              className="block w-full p-2 text-base transition-colors duration-300 ease-out bg-gray-100 border-b-2 rounded-sm dark:bg-gray-800 dark:border-gray-700 dark:focus:border-gray-500 dark:hover:border-gray-500 focus:outline-none focus:border-purple-300 hover:border-purple-300"
              name="token"
              id="token"
              type="search"
              autoComplete="new-password"
              ref={register}
            />
          </div>
          <input
            className="mt-4 btn"
            type="submit"
            value="I'm feeling lucky!"
          />
          {result !== null ? (
            result ? (
              <span className="ml-4 text-sm font-semibold tracking-wide text-green-500 uppercase">
                Access granted
              </span>
            ) : (
              <span className="ml-4 text-sm font-semibold tracking-wide text-red-500 uppercase">
                Access denied
              </span>
            )
          ) : (
            ''
          )}
        </form>
      </FlexContainer>
    </Layout>
  )
}

const AdminPage: FC<Props> = ({ setAuth }) => {
  const { register, handleSubmit } = useForm()

  const onSubmit = () => {
    fetch('/api/session', {
      method: 'DELETE',
      cache: 'no-cache',
      credentials: 'same-origin',
    }).then((res) => {
      if (res.ok) setAuth(false)
    })
  }

  return (
    <Layout title="Admin &bull; finkrer.wtf" description="Admin page">
      <FlexContainer>
        <p className="mt-8">
          Duuude, you know the token, right? You are so cool, damn. Amazing.
        </p>
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="btn"
            type="submit"
            value="&mdash; I don't wanna be cool, just let me out!"
            ref={register}
          />
        </form>
        <p>
          Now, since you're so cool and all, you have access to these restricted
          sections of the site.
        </p>
        <FlexContainer className="mt-4">
          <Link href="/log" className="inline-block btn">
            Log
          </Link>
        </FlexContainer>
        <p>I know that's not much, but there will be more!</p>
      </FlexContainer>
    </Layout>
  )
}

const Admin = ({ isAuthorized }: { isAuthorized: boolean }) => {
  const [authorized, setAuthorized] = useState(isAuthorized)
  return authorized ? (
    <AdminPage setAuth={setAuthorized} />
  ) : (
    <LoginPage setAuth={setAuthorized} />
  )
}

export default Admin
