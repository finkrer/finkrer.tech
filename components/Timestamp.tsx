import moment from 'moment'

const Timestamp = ({ datetime, className }) => {
  const m = moment(datetime).locale('ru')
  return (
    <time className={className} title={m.format('DD.MM.YYYY HH:mm')}>
      {m.fromNow()}
    </time>
  )
}

export default Timestamp
