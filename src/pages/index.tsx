interface IHomeProps {
  title: string
}

const Home = ({ title = 'Hello World!' }: IHomeProps) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}

export default Home
