import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { FC, useState } from 'react'

type Props = {
  datetime: string | Date
  className: string
}

const Timestamp: FC<Props> = ({ datetime, className }) => {
  const [showFull, setShowFull] = useState(false)
  dayjs.extend(relativeTime)
  const m = dayjs(datetime)

  return (
    <time
      className={className}
      onMouseEnter={() => setShowFull(true)}
      onMouseLeave={() => setShowFull(false)}
    >
      {showFull ? m.format('DD.MM.YYYY HH:mm') : m.fromNow()}
    </time>
  )
}

export default Timestamp
