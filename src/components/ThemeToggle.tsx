import { applyTheme, getTheme, setTheme, Theme } from 'lib/theme'
import { FC, useState, useEffect } from 'react'

type Props = {
  className: string
}

const ThemeToggle: FC<Props> = ({ className }) => {
  const [state, setState] = useState<Theme | 'unknown'>('unknown')

  const updateTheme = (theme: Theme) => {
    setTheme(theme)
    setState(theme)
  }

  const loadTheme = () => {
    const theme = getTheme()
    setState(theme)
  }

  useEffect(loadTheme)

  useEffect(() => {
    const mql = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (e: MediaQueryListEvent) => {
      loadTheme()
      applyTheme()
    }
    mql.addEventListener('change', handler)
    return () => mql.removeEventListener('change', handler)
  })

  if (state === 'unknown') {
    return null
  }

  if (state === 'light') {
    return (
      <button
        className={className}
        onClick={() => {
          updateTheme('dark')
        }}
      >
        🌞
      </button>
    )
  }

  if (state === 'dark') {
    return (
      <button
        className={className}
        onClick={() => {
          updateTheme('light')
        }}
      >
        🌚
      </button>
    )
  }

  return null
}

export default ThemeToggle
