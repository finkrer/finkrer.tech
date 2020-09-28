import { useForm } from 'react-hook-form'

type FormData = {
  title: string
  body: string
  public: boolean
}

const NewPost = () => {
  const { register, handleSubmit, errors } = useForm<FormData>()
  const onSubmit = (data: FormData) => {
    fetch('/api/post', {
      method: 'POST',
      cache: 'no-cache',
      credentials: 'same-origin',
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="title">Title</label>
      <input className="" name="title" ref={register} />
      <textarea className="" name="body" ref={register} />
      <input className="" name="public" type="checkbox" ref={register} />
      <input type="submit" />
    </form>
  )
}

export default NewPost
