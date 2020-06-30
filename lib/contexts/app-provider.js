import ThemeProvider from './theme-contexts'

export default function AppProvider ({ children }) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}
