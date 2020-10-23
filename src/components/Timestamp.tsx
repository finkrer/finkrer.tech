import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/ru'
import { useState } from 'react'

const Timestamp = ({ datetime, className }) => {
  const [showFull, setShowFull] = useState(false)
  dayjs.extend(relativeTime)
  const m = dayjs(datetime).locale('ru')

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
