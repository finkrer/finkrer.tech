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
    <Layout title="finkrer.wtf &bull; Login" description="The login page, duh">
      <FlexContainer>
        <p className="text-gray-400">
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
              className="block w-full p-2 text-base border-2 border-gray-600 rounded focus:outline-none focus:border-yellow-300"
              name="token"
              id="token"
              ref={register}
            />
            {result !== null ? (
              result ? (
                <p className="text-green-500">Все норм, можно заходить</p>
              ) : (
                <p className="text-red-500">Токен неправильный, уходи!</p>
              )
            ) : (
              ''
            )}
          </div>
          <input
            className="p-3 mt-4 text-lg rounded shadow focus:outline-none focus:shadow-outline"
            type="submit"
            value="Попробовать"
          />
        </form>
      </FlexContainer>
    </Layout>
  )
}

export default Login
