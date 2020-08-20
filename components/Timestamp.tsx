const Timestamp = ({ datetime }) => (
  <time className="text-sm mt-2 text-gray-700 p-0 float-right">
    {formatDate(datetime)}
  </time>
)

const formatDate = (datetime: string | number | Date) => {
  const date = new Date(datetime)
  const format = new Intl.DateTimeFormat('ru', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: 'numeric',
  })
  const [
    { value: day },
    ,
    { value: month },
    ,
    { value: year },
    ,
    { value: hour },
    ,
    { value: minute },
  ] = format.formatToParts(date)
  return `${day}.${month}.${year} ${hour}:${minute}`
}

export default Timestamp
