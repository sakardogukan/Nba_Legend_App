import { Container } from "react-bootstrap"
import Header from './compenents/Header'
import ContainerCard from "./compenents/ContainerCard"

function App() {
  return (
    <Container className="mt-2 text-center">
      <Header />
      <ContainerCard/>
    </Container>
  )
}

export default App
