import { LogEntry } from 'lib/data'
import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import Textarea from 'react-textarea-autosize'

type FormData = {
  body: string
}

type Props = {
  onCreate?: (entry: LogEntry) => void
}

const NewEntry: FC<Props> = ({ onCreate }) => {
  const { register, handleSubmit } = useForm<FormData>()
  const [result, setResult] = useState(true)

  const onSubmit = (data: FormData) => {
    fetch('/api/log-entries', {
      method: 'POST',
      cache: 'no-cache',
      credentials: 'same-origin',
      body: JSON.stringify(data),
    }).then((res) => {
      setResult(res.ok)
      if (res.ok) {
        ;(document.getElementById('new-entry') as HTMLFormElement)?.reset()
        res.json().then((j) => {
          onCreate?.(j.story as LogEntry)
        })
      }
    })
  }

  return (
    <form
      id="new-entry"
      className="flex flex-col mt-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Textarea
        className="w-full px-4 pt-3 pb-2 overflow-hidden transition-colors duration-300 ease-out bg-gray-100 border-b-2 rounded-sm resize-none dark:bg-gray-800 dark:border-gray-700 dark:focus:border-gray-500 dark:hover:border-gray-500 focus:outline-none focus:border-purple-300 hover:border-purple-300"
        minRows={2}
        placeholder="Share your thoughts..."
        name="body"
        ref={register}
      />
      <input
        className="self-end px-8 mt-4 btn ring-opacity-50"
        type="submit"
        value="Create"
      ></input>
      {result ? (
        <span />
      ) : (
        <span className="ml-4 text-sm font-semibold tracking-wide text-red-500">
          Could not add entry
        </span>
      )}
    </form>
  )
}

export default NewEntry
