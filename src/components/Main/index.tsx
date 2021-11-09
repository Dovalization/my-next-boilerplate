import * as S from './styles'

const Main = ({
  title = 'My Next.Js Boilerplate',
  description = 'TypeScript, ReactJS, NextJS e Styled Components'
}) => {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustration
        src="/img/rocket-illustration.svg"
        alt="Cartoon style illustration of a rocket in space"
      />
    </S.Wrapper>
  )
}

export default Main
