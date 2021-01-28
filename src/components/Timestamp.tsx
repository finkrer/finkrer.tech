import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { FC } from 'react'

type Props = {
  datetime: string | Date
  className: string
  absolute?: boolean
}

const Timestamp: FC<Props> = ({ datetime, className, absolute }) => {
  dayjs.extend(relativeTime)
  const m = dayjs(datetime)

  return (
    <time className={className} title={m.format('DD.MM.YYYY HH:mm')}>
      {absolute ? m.format('DD.MM.YYYY HH:mm') : m.fromNow()}
    </time>
  )
}

export default Timestamp
