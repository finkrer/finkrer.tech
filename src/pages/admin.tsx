import FlexContainer from 'layout/FlexContainer'
import Layout from 'layout/Layout'
import { isAuthorized } from 'lib/auth'
import { GetServerSideProps } from 'next'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

type FormData = {
  token: string
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const authorized = isAuthorized(req)

  return {
    props: {
      authorized: authorized,
    },
  }
}

const LoginPage = ({ setAuth }) => {
  const { register, handleSubmit } = useForm<FormData>()
  const [result, setResult] = useState(null as boolean)

  const onSubmit = (data: FormData) => {
    fetch('/api/session', {
      method: 'POST',
      cache: 'no-cache',
      credentials: 'same-origin',
      body: data.token,
    }).then(res => {
      setResult(res.ok)
      if (res.ok) setAuth(true)
    })
  }

  return (
    <Layout title="Login &bull; finkrer.wtf" description="The login page, duh">
      <FlexContainer>
        <p className="text-sm leading-6 text-gray-400">
          Здесь можно залогиниться... в теории.
          <br />
          Нужно всего-то лишь знать секретный токен.
        </p>
        <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="ml-1 text-gray-800" htmlFor="token">
              Токен
            </label>
            <input
              className="block w-full p-2 text-base border-b-2 rounded-sm bg-gray-50 focus:outline-none focus:border-accent-300 hover:border-accent-300"
              name="token"
              id="token"
              type="search"
              autoComplete="new-password"
              ref={register}
            />
          </div>
          <input
            className="p-3 mt-4 text-xs font-medium tracking-wide text-gray-800 bg-gray-100 rounded hover:bg-gray-200"
            type="submit"
            value="Мне повезёт!"
          />
          {result !== null ? (
            result ? (
              <span className="ml-4 text-sm text-green-500">
                Все норм, можно заходить
              </span>
            ) : (
              <span className="ml-4 text-sm text-red-500">
                Нет, это вряд ли
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

const AdminPage = ({ setAuth }) => {
  const { register, handleSubmit } = useForm()

  const onSubmit = () => {
    fetch('/api/session', {
      method: 'DELETE',
      cache: 'no-cache',
      credentials: 'same-origin',
    }).then(res => {
      if (res.ok) setAuth(false)
    })
  }

  return (
    <Layout title="Admin &bull; finkrer.wtf" description="Admin page">
      <FlexContainer>
        <p>Привет, админ</p>
        <form className="mt-2" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="p-3 mt-4 text-xs font-medium tracking-wide text-gray-800 bg-gray-100 rounded hover:bg-gray-200"
            type="submit"
            value="Выйти"
            ref={register}
          />
        </form>
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
