import { AppProps } from 'next/app'
import SEO from '@/components/SEO'

import GlobalStyles from '@/styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SEO
        title="My Next.JS Boilerplate"
        description="A simple starter for projects using Next.JS, TypeScript and Styled Components"
        shouldExcludeTitleSuffix={true}
      />
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
