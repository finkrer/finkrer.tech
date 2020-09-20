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
    }).then((res) => (res.ok ? setResult(true) : setResult(false)))
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
            <label className="text-lg text-gray-600" htmlFor="token">
              Токен
            </label>
            <input
              className="block w-full p-2 text-base border-2 border-gray-600 rounded focus:outline-none focus:border-gray-300 hover:border-gray-300"
              name="token"
              id="token"
              type="search"
              autoComplete="new-password"
              ref={register}
            />
          </div>
          <input
            className="p-3 mt-4 text-xs font-medium tracking-wider text-gray-800 uppercase bg-gray-200 rounded focus:outline-none focus:shadow-focus hover:bg-gray-200"
            type="submit"
            value="Попробовать"
          />
          {result !== null ? (
            result ? (
              <span className="ml-4 text-green-500">
                Все норм, можно заходить
              </span>
            ) : (
              <span className="ml-4 text-red-500">Ты пытался :(</span>
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
