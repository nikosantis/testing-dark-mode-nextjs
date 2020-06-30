import { createContext, useContext, useEffect, useReducer } from 'react'
import { getDarkMode } from '../dark-mode'

const ThemeContext = createContext()
const ToggleContext = createContext()

export default function ThemeProvider (props) {
  // useEffect(() => {
  //   const localTheme = localStorage.getItem('casper-theme')
  //   if (localTheme) {
  //     document.querySelector('html').classList.add('__casper-dark-mode')
  //   }
  // }, [])

  return (
    <ThemeContext.Provider value={{ a: 1 }}>
      <ToggleContext.Provider {...props} />
    </ThemeContext.Provider>
  )
}
function useTheme () {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

function useToggle () {
  const context = useContext(ToggleContext)
  if (context === undefined) {
    throw new Error('useToggle must be used within a ThemeProvider')
  }
  return context
}

export { useTheme, useToggle }
