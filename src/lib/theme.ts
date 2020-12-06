export type Theme = 'light' | 'dark'

export const applyTheme = () => {
    const localStorage = window.localStorage
    const currentSetting = localStorage.getItem('theme')

    if (currentSetting === 'dark' || (currentSetting === null && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.querySelector('html')?.classList.add('dark')
    } else {
        document.querySelector('html')?.classList.remove('dark')
    }
}

export const setTheme = (theme: Theme) => {
    window.localStorage.setItem('theme', theme)
    applyTheme()
}

export const getTheme = () => {
    const setting = window.localStorage.getItem('theme') as Theme | null
    return setting != null ? setting : window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}
