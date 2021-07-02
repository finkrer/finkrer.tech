import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { FC } from 'react'

type Props = {
  datetime: string | Date
  className?: string
  absolute?: boolean
  format?: string
}

const Timestamp: FC<Props> = ({ datetime, className, absolute, format }) => {
  dayjs.extend(relativeTime)
  const m = dayjs(datetime)
  format ??= 'DD.MM.YYYY HH:mm'

  return (
    <time className={className} title={m.format(format)}>
      {absolute ? m.format(format) : m.fromNow()}
    </time>
  )
}

export default Timestamp
