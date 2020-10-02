import FlexContainer from 'layout/FlexContainer'
import Layout from 'layout/Layout'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

type FormData = {
  token: string
}

const Login = () => {
  const { register, handleSubmit } = useForm<FormData>()
  const [result, setResult] = useState(null as boolean)

  const onSubmit = (data: FormData) => {
    fetch('/api/login', {
      method: 'POST',
      cache: 'no-cache',
      credentials: 'same-origin',
      body: data.token,
    }).then((res) => setResult(res.ok))
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
            className="p-3 mt-4 text-xs font-medium tracking-wider text-gray-800 uppercase bg-gray-100 rounded focus:outline-none focus:shadow-focus hover:bg-gray-200"
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

export default Login
