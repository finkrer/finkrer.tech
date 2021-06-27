import { FC } from 'react'

type Props = {
  emoji: string
}

const Placeholder: FC<Props> = ({ emoji, children }) => {
  return (
    <>
      <p className="pt-64 text-center text-8xl">{emoji}</p>
      <p className="pt-4 text-center text-gray-400">{children}</p>
    </>
  )
}

export default Placeholder
