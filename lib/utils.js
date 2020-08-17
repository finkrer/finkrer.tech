import { Remarkable } from 'remarkable'

export const formatDate = (datetime) => {
  const date = new Date(datetime)
  const format = new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: 'numeric',
    minute: 'numeric',
  })
  const [
    { value: month },
    ,
    { value: day },
    ,
    { value: year },
    ,
    { value: hour },
    ,
    { value: minute },
  ] = format.formatToParts(date)
  return `${day}.${month}.${year} ${hour}:${minute}`
}

const remarkable = new Remarkable()
export const renderMarkdown = (markdown) => remarkable.render(markdown)
