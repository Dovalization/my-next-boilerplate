import Main from '@/components/Main'
import SEO from '@/components/SEO'

const Home = () => {
  return (
    <>
      <SEO
        title="My Next.JS Boilerplate"
        description="A simple starter for projects using Next.JS, TypeScript and Styled Components"
        shouldExcludeTitleSuffix={true}
      />
      <Main />
    </>
  )
}

export default Home
