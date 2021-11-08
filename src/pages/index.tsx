import Head from 'next/head'

interface IHomeProps {
  title: string
}

export const Home = ({ title = 'Hello World!' }: IHomeProps) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}
