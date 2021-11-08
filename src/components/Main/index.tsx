import SEO from '@/components/SEO'
import * as S from './styles'

const Main = ({
  title = 'My Next.JS Boilerplate',
  description = 'TypeScript, ReactJS, NextJS and Styled Components'
}) => {
  return (
    <S.Wrapper>
      <SEO title="Home" shouldExcludeTitleSuffix={false} />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustration
        src="/rocket-illustration.svg"
        alt="Cartoon style illustration of a rocket in space"
      />
    </S.Wrapper>
  )
}

export default Main
