import moment from 'moment'
import { useState } from 'react'

const Timestamp = ({ datetime, className }) => {
  const [showFull, setShowFull] = useState(false)
  const m = moment(datetime).locale('ru')

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
