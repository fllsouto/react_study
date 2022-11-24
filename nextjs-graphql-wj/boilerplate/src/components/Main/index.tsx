import * as Style from './style'

const Main = () => (
  <Style.Wrapper>
    <Style.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React avançado escrito ao lado."
    />
    <Style.Title>React Avançado</Style.Title>
    <Style.Description>
      TypeScript, ReactJS, NextJS e Styled Components
    </Style.Description>
    <Style.Illustration src="/img/hero-illustration.svg/" />
  </Style.Wrapper>
)

export default Main
