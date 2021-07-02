import { FC } from 'react'
import Timestamp from 'components/Timestamp'
import { LogEntry, Sentiment } from 'lib/data'
import snarkdown from 'snarkdown'
import CalendarIcon from '@heroicons/react/outline/CalendarIcon'
import ClockIcon from '@heroicons/react/outline/ClockIcon'
import CollectionIcon from '@heroicons/react/outline/CollectionIcon'

type Props = {
  from: LogEntry
}

type Color = 'blue' | 'yellow' | 'pink' | 'gray'

type Theme = {
  bgColor: `bg-${Color}-${'100' | '800'}`
  fieldColor: `bg-${Color}-${'50' | '700'}`
  textColor: `text-${Color}-${'900' | '100'}`
  selectionColor: `selection:bg-${Color}-${'200' | '500'}`
  name: string
}

const Themes: { [key in Sentiment]: Theme } = {
  happy: {
    bgColor: 'bg-yellow-100',
    fieldColor: 'bg-yellow-50',
    textColor: 'text-yellow-900',
    selectionColor: 'selection:bg-yellow-200',
    name: 'счастье',
  },
  sad: {
    bgColor: 'bg-blue-100',
    fieldColor: 'bg-blue-50',
    textColor: 'text-blue-900',
    selectionColor: 'selection:bg-blue-200',
    name: 'грусть',
  },
  neutral: {
    bgColor: 'bg-gray-100',
    fieldColor: 'bg-gray-50',
    textColor: 'text-gray-900',
    selectionColor: 'selection:bg-gray-200',
    name: 'нейтрально',
  },
  tough: {
    bgColor: 'bg-gray-800',
    fieldColor: 'bg-gray-700',
    textColor: 'text-gray-100',
    selectionColor: 'selection:bg-gray-500',
    name: 'песос',
  },
  love: {
    bgColor: 'bg-pink-100',
    fieldColor: 'bg-pink-50',
    textColor: 'text-pink-900',
    selectionColor: 'selection:bg-pink-200',
    name: 'любовь',
  },
}

const PropertyContainer: FC<{ theme: Theme }> = ({ children, theme }) => (
  <div
    className={`text-sm ${theme.textColor} ${theme.fieldColor} py-0.5 px-1.5 rounded flex items-center`}
  >
    {children}
  </div>
)

const Entry: FC<Props> = ({ from: entry }) => {
  const theme = Themes[entry.content.sentiment] ?? Themes['neutral']

  return (
    <article
      className={`items-baseline p-4 mt-6 ${theme.bgColor} shadow-lg rounded-xl ${theme.selectionColor}`}
    >
      <div className="flex gap-2">
        <PropertyContainer theme={theme}>
          <CalendarIcon className="w-4 h-4 mr-1" />
          <Timestamp absolute datetime={entry.created_at} format="DD.MM.YY" />
        </PropertyContainer>
        <PropertyContainer theme={theme}>
          <ClockIcon className="w-4 h-4 mr-1" />
          <Timestamp absolute datetime={entry.created_at} format="HH:mm" />
        </PropertyContainer>
        <PropertyContainer theme={theme}>
          <CollectionIcon className="w-4 h-4 mr-1" />
          <span>{theme.name}</span>
        </PropertyContainer>
      </div>
      <div
        className={`px-3 py-2 mt-4 ${theme.fieldColor} rounded-lg ${theme.textColor}`}
        dangerouslySetInnerHTML={{ __html: snarkdown(entry.content.body) }}
      ></div>
    </article>
  )
}

export default Entry
