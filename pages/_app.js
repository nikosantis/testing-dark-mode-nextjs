import AppProvider from '../lib/contexts/app-provider'
import baseStyles from '../styles/base'

export default function App ({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
      <style jsx global>
        {baseStyles}
      </style>
    </AppProvider>
  )
}
