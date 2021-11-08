import styled from 'styled-components'

export const Wrapper = styled.main`
  position: relative;
  background-color: #fff;
  color: #000;
  width: 100%;
  height: 100%;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
`

export const Title = styled.h1`
  font-size: 4.5rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
`

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`

export const Illustration = styled.img`
  @keyframes MoveUpDown {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(2rem);
    }
  }
  animation: MoveUpDown 2s ease-in-out infinite;
  margin-top: 3rem;
  width: min(54rem, 100%);
`
